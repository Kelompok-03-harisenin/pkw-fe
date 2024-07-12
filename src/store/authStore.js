import { create } from "zustand";

const useAuthStore = create((set) => ({
  jwt: null,
  setJwt: (token) => set(() => ({ jwt: token })),
  removeJwt: () => set(() => ({ jst: null }))
}))

export default useAuthStore;
