import { AuthUser } from "aws-amplify/auth";
import { create } from "zustand";

interface UserState {
  setUserAuth: (newAuthState: AuthUser) => void;
  user: AuthUser | null;
}

export const useAuthStore = create<UserState>()((set) => ({
  user: null,
  setUserAuth: (newAuthState: AuthUser) =>
    set((state) => ({ user: newAuthState })),
}));
