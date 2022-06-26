import create from "zustand";

const useStore = create((set) => ({
    count: 1,
    user: {
       name: '',
        phone: '',
        ttl: '',
        address: '',
        education: '',
    },
    inc: () => set((state) => ({ count: state.count + 1 })),
    setUser: (user) => set((state) => ({user: user}))
}))

export default useStore;
