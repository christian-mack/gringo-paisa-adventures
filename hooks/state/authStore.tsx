import { create } from "zustand";

interface UserState {
  userId: string;
  username: string;
  isAuthenticated: boolean;
  setUserAuth: (newAuthState: boolean) => void;
}

export const useAuthStore = create<UserState>()((set) => ({
  userId: "",
  username: "",
  isAuthenticated: false,
  setUserAuth: (newAuthState) =>
    set((state) => ({ isAuthenticated: newAuthState })),
}));
