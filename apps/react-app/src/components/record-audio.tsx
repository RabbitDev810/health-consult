import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Typography } from "@mui/material";
import { PauseCircle, PlayCircleFilled } from "@mui/icons-material";
import io, { Socket } from "socket.io-client";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const RecordAudio = ({
  id,
  showText = true,
}: {
  id?: string;
  showText: boolean;
}) => {
  const visitId = id ?? uuidv4();
  const [socket, setSocket] = useState<Socket>();
  const [isRecording, setIsRecording] = useState(false);
  const [blob, setBlob] = useState<Blob>();
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [wavHeader, setWavHeader] = useState<ArrayBuffer>();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  let captureInterval: NodeJS.Timeout;

  const storeBlob = async (event: BlobEvent) => {
    if (event.data.size <= 0) return;

    if (!blob) {
      // First chunk, includes complete WAV header
      const firstBlob = new Blob([event.data], { type: "audio/wav" });
      setWavHeader((await event.data.arrayBuffer()).slice(44));
      setBlob(firstBlob);
      downloadAudio(firstBlob);
    } else {
      // Subsequent chunks, exclude WAV header
      if (!wavHeader) return;
      const updatedBlob = new Blob([wavHeader, event.data], {
        type: "audio/wav",
      });
      setBlob(updatedBlob);
      downloadAudio(updatedBlob);
    }
  };

  const downloadAudio = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audio_${new Date().toISOString()}.wav`; // You can customize the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const startRecording = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mr = new MediaRecorder(userMediaStream);

      // Set the media Recorder
      setMediaRecorder(mr);

      // mediaRecorder.addEventListener("dataavailable", (event): void => {
      //   storeBlob(event);
      // });

      // mediaRecorder.onstop = () => {
      //   mediaRecorder.removeEventListener("dataavailable", (event): void => {
      //     storeBlob(event);
      //   });
      // };

      if (!mr) return;

      mr.ondataavailable = storeBlob;

      captureInterval = setInterval(() => {
        mr.requestData();
      }, 10000);

      mr.start();

      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorder!.stop();
    setIsRecording(false);
    clearInterval(captureInterval);
  };

  useEffect(() => {
    const setupSocket = () => {
      const socketConnection = io("ws://localhost:5000", {
        path: "/ws/socket.io",
      });
      setSocket(socketConnection);
    };

    setupSocket();

    // return () => {
    //   socket!.disconnect();
    // };
  }, []);

  useEffect(() => {
    const sendAudioToServer = async () => {
      if (socket && blob) {
        try {
          // Emit the audio buffer to the backend
          socket.emit("audio_chunk", {
            visitId,
            audioBuffer: blob,
          });
        } catch (error) {
          console.error("Error sending audio to server:", error);
        }
      }
    };

    sendAudioToServer();
  }, [blob]);

  return (
    <Button
      variant="text"
      onClick={() => {
        listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening();
      }}
      sx={{
        display: "flex",
        flexFlow: "column",
      }}
    >
      {listening ? (
        <PauseCircle sx={{ fontSize: 32, color: "white" }} />
      ) : (
        <PlayCircleFilled sx={{ fontSize: 32, color: "white" }} />
      )}

      {showText && (
        <Typography
          component="span"
          sx={{
            color: "white",
            fontSize: 20,
          }}
        >
          {showText && listening ? "Stop the recording" : "Start the recording"}
        </Typography>
      )}
    </Button>
  );
};
