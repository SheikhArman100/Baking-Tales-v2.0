import { create } from "zustand";

export const useAuthStore = create(() => ({
  accessToken: "",
}));

export const setAccessToken = (token) => {
  useAuthStore.setState({ accessToken: token });
};
