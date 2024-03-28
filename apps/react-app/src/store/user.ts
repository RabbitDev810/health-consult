import { MessageType } from "@/lib/types";
import { create } from "zustand";

type UserState = {
  isSigningIn: boolean;
  signingInUser: any | null;
  setIsSigningIn: (currentState: boolean) => void;
  setSigningInUser: (user: any) => void;
};

export const useUserStore = create<UserState>((set) => ({
  isSigningIn: false,
  signingInUser: null,
  setIsSigningIn: (currentState) => {
    set(() => ({
      isSigningIn: currentState,
    }));
  },
  setSigningInUser: (user) => {
    set(() => ({
      signingInUser: user,
    }));
  },
}));
