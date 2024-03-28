import { ColumnContainer, RowContainer } from "@/styles/common-styles";
import MessageHeader from "./message-header";
import ChatContainer from "./chat-container";
import PictureContainer from "./picture-container";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import doctor from "../../assets/image/person2.png";
import nurse from "../../assets/image/person1.png";
import { isMobileHook } from "@/utils";
import { ConversationType } from "@/lib/types";
import { useConversationStore } from "@/store/conversation";
import { useParams } from "react-router-dom";
import { updateConversation } from "@/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { getConversation } from "@/graphql/queries";

const messageCardStyle: React.CSSProperties = {
  padding: "10px",
  // position: "relative",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  height: "50px",
  maxHeight: "50px",
  borderRadius: "20px",
  marginBottom: "15px",
};

const customerImageContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "100%",
};

const circleImage: React.CSSProperties = {
  position: "absolute",
  bottom: "21px",
};

const chatContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowX: "hidden",
  borderRadius: "20px 20px 0px 0px",
  border: "1px solid lightgrey",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputContainer: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Montserrat",
  display: "flex",
  alignItems: "center",
  gap: "21px",
  padding: "10px",
  borderRadius: "0px 0px 20px 20px",
  border: "1px solid lightgrey",
};

const iconContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  gap: "10px",
};

type MessageBoxProps = {
  maxHeight?: string;
  isDoctor?: boolean;
  screen: string;
};
const MessageBox = (props: MessageBoxProps) => {
  const pictureRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("100%");
  const [chatHeight, setChatHeight] = useState("100%");
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const { conversation, setConversation } = useConversationStore();
  const [loading, setLoading] = useState(true);
  const isMobile = isMobileHook();
  const { id } = useParams();

  useLayoutEffect(() => {
    const updateContainerHeight = () => {
      // Get the height of the InfoHeader component
      const pictureHeight = pictureRef.current
        ? pictureRef.current.offsetHeight
        : 0;
      // Calculate the new height for the RowContainer
      const newHeight = `calc(${props.maxHeight} - ${pictureHeight}px)`;
      setContainerHeight(newHeight);
      const chatHeight = isListening
        ? `calc(${props.maxHeight} - ${pictureHeight}px - 60px-12vh)`
        : `calc(${props.maxHeight} - ${pictureHeight}px - 15vh )`;
      setChatHeight(chatHeight);
    };

    updateContainerHeight();

    // Re-calculate on window resize
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, [pictureRef, props.maxHeight, isListening]);

  useEffect(() => {
    const addConversation = async () => {
      if (conversation.length > 0) {
        const convDetails = {
          id: id,
          screen: props.screen,
          date: new Date(),
          conversation: {
            statements: conversation.map((message) => ({
              completed_statement: message.completed_statement,
              partial_statement: message.partial_statement,
              speaker_id: message.speaker_id,
              speaker_name: message.speaker_name,
            })),
          },
        };

        try {
          await API.graphql(
            graphqlOperation(updateConversation, {
              input: convDetails,
              // condition: { id: id, screen: props.screen },
            })
          );

          // Optionally, clear the form or navigate the user elsewhere
        } catch (error) {
          console.error("Error saving information:", error);
        }
      }
    };

    addConversation();
  }, [conversation]);

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const infoData: any = await API.graphql(
          graphqlOperation(getConversation, { id, screen: props.screen })
        );
        const infoItem = infoData.data.getConversation;
        if (infoItem) {
          setConversation(props.screen, infoItem.conversation.statements);
        } else {
          setConversation(props.screen, []);
        }
      } catch (error) {
        console.error("Error fetching information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, [id, props.screen]);
  return (
    <ColumnContainer
      style={{
        width: "95%",
        maxHeight: props.maxHeight ? props.maxHeight : "80vh",
        marginRight: "10px",
        paddingInline: "10px",
      }}
    >
      {!isMobile && (
        <div
          ref={pictureRef}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PictureContainer
            name="Susan"
            avatar={props.isDoctor ? doctor : nurse}
          />
        </div>
      )}
      <ColumnContainer
        style={{
          boxShadow: "-10px 0 5px -5px rgba(0,0,0,0.03)",
          maxHeight: containerHeight,
        }}
      >
        <MessageHeader
          name={props.isDoctor ? "Doctor" : "Nurse"}
          conversation={conversation}
          setConversation={setConversation}
          setIsListening={setIsListening}
          isListening={isListening}
          setIsTranscribing={setIsTranscribing}
        />
        <ChatContainer
          isTranscribing={isTranscribing}
          maxHeight={`${chatHeight}`}
          conversation={conversation}
          isListening={isListening}
          loading={loading}
        />
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default MessageBox;
