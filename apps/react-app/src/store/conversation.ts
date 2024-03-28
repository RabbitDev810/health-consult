import { MessageType } from "@/lib/types";
import { create } from "zustand";

type ConversationState = {
  activeKey: string;
  conversation: MessageType[];
  infoConversation: MessageType[];
  vitalsConversation: MessageType[];
  encounterConversation: MessageType[];
  setActiveKey: (key: string) => void;
  setConversation: (identifier: string, messages: MessageType[]) => void;
};

export const useConversationStore = create<ConversationState>((set) => ({
  activeKey: "1",
  conversation: [],
  infoConversation: [],
  vitalsConversation: [],
  encounterConversation: [],
  setActiveKey: (key) => {
    set((state) => ({
      activeKey: key,
      conversation:
        key === "1"
          ? state.infoConversation
          : key === "2"
          ? state.vitalsConversation
          : key === "3"
          ? state.encounterConversation
          : state.conversation,
    }));
  },
  setConversation: (identifier: string, messages: MessageType[]) => {
    set((state) => ({
      [identifier === "1"
        ? "infoConversation"
        : identifier === "2"
        ? "vitalsConversation"
        : "encounterConversation"]: messages,
      conversation: messages,
    }));
  },
}));
