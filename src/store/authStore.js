import { create } from "zustand";

const useAuthStore = create((set) => ({
  jwt: null,
  removeJwt: () => set(() => ({ jst: null }))
}))

export default useAuthStore;
