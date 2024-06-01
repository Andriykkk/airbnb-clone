import { create } from "zustand";

interface LodinModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<LodinModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
