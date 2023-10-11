  import {create} from "zustand";

  const useAuthStore = create((set) => ({
    authToken: null,
    setAuthToken: (authToken) => set({ authToken }),
  }));

  export default useAuthStore;
