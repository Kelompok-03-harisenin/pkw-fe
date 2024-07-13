import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(persist((set) => ({
  jwt: null,
  removeJwt: () => set(() => ({ jst: null }))
}), {
  name: 'jwt-storage',
  storage: createJSONStorage(() => sessionStorage)
})
)

export default useAuthStore;
