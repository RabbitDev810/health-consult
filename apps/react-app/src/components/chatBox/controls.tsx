"use client";

import { Circle, PauseIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import axios from "axios";

import { ConversationType, MessageType, StatementType } from "@/lib/types";
import { RealtimeTranscriber } from "assemblyai";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";
import { IconButton, useTheme } from "@mui/material";
import { useConversationStore } from "@/store/conversation";
import { MicOutlined } from "@mui/icons-material";

type Props = {
  conversation: MessageType[];
  setConversation: (identifier: string, conversation: MessageType[]) => void;
  setIsListening: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTranscribing: React.Dispatch<React.SetStateAction<boolean>>;
};

const Controls = ({
  conversation,
  setConversation,
  setIsListening,
  setIsTranscribing,
}: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const theme = useTheme();
  const socket = useRef<RealtimeTranscriber | undefined>();
  const recorder = useRef<RecordRTC | undefined>();
  const transcriptRef = useRef<StatementType>({
    completed_statement: "",
    partial_statement: "",
    speaker_id: "",
  });
  const { activeKey } = useConversationStore();

  const gatewayUrl = import.meta.env.VITE_API_GATEWAY;

  useEffect(() => {
    //connect the socket once the component is mounted
    const initSocket = async () => {
      const {
        data: { token },
      } = await axios.get(`${gatewayUrl}/api/assembly_token`);

      socket.current = new RealtimeTranscriber({ token });
      socket.current.on("error", async (error) => {
        console.error(error);
        if (socket.current) await socket.current.close();
      });

      socket.current.on("close", (event) => {
        socket.current = undefined;
      });

      await socket.current.connect();
    };

    //bind the token on the request
    axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("token")}`;

    initSocket();

    //unmount and clear the socket
    return () => {
      if (socket.current) {
        socket.current.close();
        socket.current = undefined;
      }
    };
  }, []);

  const setupSocket = async () => {
    // const {
    //   data: { token },
    // } = await axios.get(`${gatewayUrl}/api/assembly_token`);
    //
    // socket.current = new RealtimeTranscriber({ token });
    // socket.current.on("transcript", (message) => {
    //   if (message.text) {
    //     if (message.message_type === "PartialTranscript") {
    //       transcriptRef.current.partial_statement = message.text + " ";
    //     } else {
    //       transcriptRef.current.completed_statement =
    //         transcriptRef.current.completed_statement + message.text + " ";

    //       transcriptRef.current.partial_statement = "";
    //     }
    //     setConversation({
    //       ...conversation,
    //       statements: [
    //         ...conversation.statements,
    //         { ...transcriptRef.current },
    //       ],
    //     });
    //   }
    // });

    // socket.current.on("error", async (error) => {
    //   console.error(error);
    //   if (socket.current) await socket.current.close();
    // });
    //
    // socket.current.on("close", (event) => {
    //   socket.current = undefined;
    // });
    //
    // await socket.current.connect();

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        recorder.current = new RecordRTC(stream, {
          type: "audio",
          mimeType: "audio/webm;codecs=pcm", // endpoint requires 16bit PCM audio
          recorderType: StereoAudioRecorder,
          timeSlice: 250, // set 250 ms intervals of data that sends to AAI
          desiredSampRate: 16000,
          numberOfAudioChannels: 1, // real-time requires only one channel
          bufferSize: 16384,
          audioBitsPerSecond: 128000,
          ondataavailable: async function (blob) {
            if (socket.current) {
              socket.current.sendAudio(await blob.arrayBuffer());
            }
          },
        });
        recorder.current.startRecording();
      })
      .catch((err) => console.error(err));
  };

  const startRecording = async () => {
    if (recorder.current) {
      await pauseRecording();
    }
    await setupSocket();

    // const id = setInterval(() => {
    //   setTimer((timer) => timer + 1);
    // }, 1000);
    // setIntervalId(id);

    setIsRecording(true);
    setIsListening(true);
  };

  const pauseRecording = async () => {
    if (socket.current) {
      socket.current.close();
      socket.current = undefined;
    }
    setIsListening(false);
    setIsTranscribing(true);
    if (recorder.current) {
      recorder.current.getDataURL(async (dataUrl) => {
        axios
          .post(`${gatewayUrl}/api/transcribe_audio`, {
            audio_data_url: dataUrl,
          })
          .then(({ data: { statements } }) => {
            setConversation(activeKey, [...conversation, ...statements]);
            setIsTranscribing(false);
          })
          .catch((err) => {
            console.error(err);
          });
      });
      recorder.current.stopRecording();
      recorder.current = undefined;
    }

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
    setIsRecording(false);
  };

  return (
    <IconButton
      style={{ height: "100%" }}
      onClick={async () =>
        isRecording ? await pauseRecording() : await startRecording()
      }
    >
      {!isRecording ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50%",
            height: "50px",
            width: "50px",
          }}
        >
          <MicOutlined
            style={{
              color: "white",
              height: "40px",
              width: "40px",
            }}
            fontSize="large"
          />
        </div>
      ) : (
        <PauseCircleIcon
          style={{
            color: theme.palette.primary.main,
            height: "60px",
            width: "60px",
          }}
          fontSize="large"
        />
      )}
      {/* <div
        style={{
          fontSize: "10px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          minWidth: "20px",
        }}
      >
        {timer}
      </div> */}
    </IconButton>
  );
};

export default Controls;
