import { ColumnContainer } from "@/styles/common-styles";
import doctor from "../../assets/image/doctor.png";
import visitor from "../../assets/image/visitor.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ConversationType, MessageType, StatementType } from "@/lib/types";
import { ListeningIndicator } from "./listening-indicator";
import { useTheme } from "@mui/material";
import Loading from "../general/loading";

const chatContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  float: "left",
  padding: "5px",
};

const infoContainer: React.CSSProperties = {
  display: "flex",
  marginBottom: "-20px",
  alignItems: "center",
  gap: "10px",
};

const Name: React.CSSProperties = {
  color: "#000e08",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "14px",
};
const textContainer: React.CSSProperties = {
  // width: "100%",
  alignSelf: "flex-start",
  marginTop: "20px",
  padding: "13px 8px 16px 18px",
  backgroundColor: "#e0eeff",
  borderRadius: "0px 12px 12px 12px",
};

const messageContainer: React.CSSProperties = {
  color: "#000",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  width: "fit-content",
};

const timeContainer: React.CSSProperties = {
  alignSelf: "flex-end",
  color: "#797c7b",
  fontFamily: "Montserrat",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: "100",
  lineHeight: "10px",
  textAlign: "right",
  marginTop: "15px",
};

type ChatContainerProps = {
  maxHeight?: string;
  conversation: MessageType[];
  isListening: boolean;
  isTranscribing: boolean;
  loading: boolean;
};
const messages = [
  {
    message: "Hello ",
    time: "09:25 AM",
    type: "A",
  },

  {
    message: "Hi",
    time: "09:25 AM",
    type: "right",
  },
  {
    message: "How can I assist you today?",
    time: "09:25 AM",
    type: "A",
  },

  {
    message: "Hi, I've been experiencing some chest pain recently.",
    time: "09:25 AM",
    type: "right",
  },
  {
    message:
      "I'm sorry to hear that. Can you describe the pain? Is it constant or does it come and go?",
    time: "09:25 AM",
    type: "A",
  },

  {
    message:
      "It's a sharp pain that comes and goes. It started a few days ago.",
    time: "09:25 AM",
    type: "right",
  },
];

const Doctor = {
  name: "susan",
  icon: doctor,
};
const Visitor = {
  name: "visitor",
  icon: visitor,
};
const ChatContainer = (props: ChatContainerProps) => {
  const { conversation, isListening, isTranscribing, loading } = props;
  const theme = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const formattedHours = hours % 12 || 12;
  const amPm = hours < 12 ? "AM" : "PM";

  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amPm}`;

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation, index]);

  return (
    <ColumnContainer
      ref={scrollRef}
      style={{
        maxHeight: props.maxHeight,
        minHeight: props.maxHeight,
        overflowY: "scroll",
        padding: "5px",
      }}
    >
      {loading && <Loading />}
      {conversation.length <= 0 && !isTranscribing && !loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i>No Conversation</i>
        </div>
      ) : (
        // messages.map(({ message, type, time }, index) =>
        //   type == "A" ? (
        //     <div
        //       style={chatContainer}
        //       key={index}
        //       onLoad={() => setIndex(index)}
        //     >
        //       <div style={infoContainer}>
        //         <img src={Doctor.icon} />
        //         <p style={Name}>{Doctor.name}</p>
        //       </div>
        //       <div style={textContainer}>
        //         <p style={messageContainer}>{message}</p>
        //       </div>
        //       <div style={timeContainer}>{formattedTime}</div>
        //     </div>
        //   ) : (
        //     <div
        //       style={{
        //         ...ChatContainer,
        //         marginLeft: "60px",
        //         float: "right",
        //       }}
        //       key={index}
        //       onLoad={() => setIndex(index)}
        //     >
        //       <div style={infoContainer}>
        //         <img src={Visitor.icon} />
        //         <p style={Name}>{Visitor.name}</p>
        //       </div>
        //       <div style={{ ...textContainer, backgroundColor: "#E3DBFF" }}>
        //         <p style={messageContainer}>{message}</p>
        //       </div>
        //       <div style={timeContainer}>{time}</div>
        //     </div>
        //   )
        // )
        isTranscribing && <Loading />
      )}
      {conversation.length > 0 &&
        !loading &&
        conversation.map(
          ({ completed_statement: message, speaker_id: type }, index) =>
            type == "A" ? (
              <div
                style={chatContainer}
                key={index}
                onLoad={() => setIndex(index)}
              >
                <div style={infoContainer}>
                  <img src={Doctor.icon} />
                  <p style={Name}>{Doctor.name}</p>
                </div>
                <div style={textContainer}>
                  <p style={messageContainer}>{message}</p>
                </div>
                <div style={timeContainer}>{formattedTime}</div>
              </div>
            ) : (
              <div
                style={{
                  ...ChatContainer,
                  marginLeft: "60px",
                  float: "right",
                }}
                key={index}
                onLoad={() => setIndex(index)}
              >
                <div style={infoContainer}>
                  <img src={Visitor.icon} />
                  <p style={Name}>{Visitor.name}</p>
                </div>
                <div style={{ ...textContainer, backgroundColor: "#E3DBFF" }}>
                  <p style={messageContainer}>{message}</p>
                </div>
                <div style={timeContainer}>{formattedTime}</div>
              </div>
            )
        )}
    </ColumnContainer>
  );
};

export default ChatContainer;
