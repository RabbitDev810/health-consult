// @ts-ignore
import React, { useEffect, useRef, useCallback, useState } from "react";
import { Typography } from "@mui/material";
import { useSpeechRecognition } from "react-speech-recognition";

const root = (isVisible) => ({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  marginInline: "10%",
  width: "100%",
});

const container = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  overflowY: "auto",
  width: "100%",
  transition: "scroll-behavior 0.6s ease-in-out",
};

const message = {
  display: "flex",
  alignItems: "center",
  maxWidth: "70%",
  padding: "6px 16px",
  margin: "10px",
  borderRadius: "24px",
  "&:first-child": {
    marginTop: "auto",
  },
  "&:not(:last-child)": {
    marginBottom: "1px",
  },
};

const InboundMessage = {
  alignSelf: "flex-start",
  color: "#fff",
  background: "#3b82f6",
};

const OutboundMessage = {
  alignSelf: "flex-end",
  background:
    "linear-gradient(90deg, rgba(33, 150, 243, 0.54) 35%, rgba(144, 202, 249, 0.6) 99%)",
};

const typography = {
  "&.MuiTypography-root": {
    padding: "8px 0",
    whiteSpace: "initial",
    "& > a": {
      margin: "0",
      color: "inherit",
      textDecoration: "underline",
    },
  },
};

const MessageProgress = {
  display: "flex",
  alignItems: "center",
  maxWidth: "70%",
  padding: "6px 16px",
  borderRadius: "24px",
  alignSelf: "flex-start",
  background:
    "linear-gradient(90deg, rgba(144, 202, 249, 0.6) 35%, rgba(144, 202, 249, 0.8) 99%)",
};

export const Messages = ({ className }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [messages, setMessages] = useState<any>([
    { id: "1", kind: "Inbound", text: "Hello! How can I assist you today?" },
    {
      id: "2",
      kind: "Outbound",
      text: "Hi, I've been experiencing some chest pain recently.",
    },
    {
      id: "3",
      kind: "Inbound",
      text: "I'm sorry to hear that. Can you describe the pain? Is it constant or does it come and go?",
    },
    {
      id: "4",
      kind: "Outbound",
      text: "It's a sharp pain that comes and goes. It started a few days ago.",
    },
  ]);
  useEffect(() => {
    if (!listening && transcript) {
      console.log(transcript);
      setMessages((prev: any) => [
        ...prev,
        {
          id: messages.length + 1,
          kind: messages.length % 2 == 0 ? "Inbound" : "Outbound",
          text: transcript,
        },
      ]);
      resetTranscript();
    }
  }, [listening]);
  const isVisible = true; // Set to false if you want to hide the component initially

  // const messages = [
  //   { id: "1", kind: "Inbound", text: "Hello! How can I assist you today?" },
  //   { id: "2", kind: "Outbound", text: "Hi, I've been experiencing some chest pain recently." },
  //   { id: "3", kind: "Inbound", text: "I'm sorry to hear that. Can you describe the pain? Is it constant or does it come and go?" },
  //   { id: "4", kind: "Outbound", text: "It's a sharp pain that comes and goes. It started a few days ago." },
  //   { id: "5", kind: "Inbound", text: "I see. Have you noticed any triggers or does it happen randomly?" },
  //   { id: "6", kind: "Outbound", text: "It seems to happen more often after I eat." },
  //   { id: "7", kind: "Inbound", text: "Thank you for sharing that. I recommend scheduling an appointment for a thorough examination. In the meantime, avoid spicy and fatty foods." },
  //   { id: "8", kind: "Outbound", text: "Okay, I'll make an appointment. Thank you, doctor." },
  //   { id: "9", kind: "Inbound", text: "You're welcome. If the pain becomes severe or persists, don't hesitate to seek immediate medical attention." },
  //   { id: "10", kind: "Outbound", text: "I'll keep that in mind. Thank you for your help." }
  //   // Add more dummy messages as needed
  // ];

  const chatContainerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const textRef = useCallback((element: any) => {
    if (!element) {
      return;
    }

    // Dummy implementation for tracking links
  }, []);
  return (
    /* @ts-ignore */
    <div style={root(isVisible)} className={className}>
      {/* @ts-ignore */}
      <div style={container} ref={chatContainerRef}>
        {messages.map(({ id, kind = "Inbound", text = "" }) => (
          <div
            key={`message-${id}`}
            style={{
              ...message,
              ...(kind === "Inbound" ? InboundMessage : OutboundMessage),
            }}
          >
            <Typography
              // @ts-ignore
              style={typography}
              dangerouslySetInnerHTML={{ __html: text }}
              ref={textRef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
