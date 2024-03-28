import { RowContainer } from "@/styles/common-styles";
import circle from "../../assets/image/circle.png";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { ConversationType, MessageType } from "@/lib/types";
import Controls from "./controls";
import { ListeningIndicator } from "./listening-indicator";

type MessageHeaderProps = {
  name: string;
  conversation: MessageType[];
  setConversation: (identifier: string, conversation: MessageType[]) => void;
  isListening: boolean;
  setIsListening: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTranscribing: React.Dispatch<React.SetStateAction<boolean>>;
};
const MessageHeader = (props: MessageHeaderProps) => {
  const {
    name,
    conversation,
    isListening,
    setConversation,
    setIsListening,
    setIsTranscribing,
  } = props;

  const theme = useTheme();

  return (
    <RowContainer
      style={{
        justifyContent: "space-between",
        width: "100%",
        maxHeight: "100px",
        borderBottom: `0.5px solid ${theme.palette.primary.main}`,
      }}
    >
      {isListening ? <ListeningIndicator /> : <div></div>}

      <div
        style={{
          borderRadius: "50%",
          height: "60px",
          marginRight: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Controls
          setIsListening={setIsListening}
          conversation={conversation}
          setConversation={setConversation}
          setIsTranscribing={setIsTranscribing}
        />
      </div>
    </RowContainer>
  );
};

export default MessageHeader;
