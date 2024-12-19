"use client";
import { useModalStore } from "@/zustand/modalStore/modalStore";
import React, { PropsWithChildren } from "react";

function ModalProvider({ children }: PropsWithChildren) {
  const modal = useModalStore((state) => state.modal);
  const closeModal = useModalStore((state) => state.closeModal);

  return modal ? (
    <>
      <div
        className="fixed bg-black/80 left-0 top-0 right-0 w-full h-screen"
        onClick={closeModal}
      >
        {modal}
      </div>
      {children}
    </>
  ) : (
    children
  );
}

export default ModalProvider;
