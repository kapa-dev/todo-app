import { create } from "zustand";
import { ModalStore } from "@/app/lib/types";

const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalStore;