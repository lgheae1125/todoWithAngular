"use client";
import React from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useModalStore } from "@/zustand/modalStore/modalStore";
import LogInModal from "@/app/(providers)/_component/LogInModal/LogInModal";

function Header() {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <header className="h-20 flex gap-x-2 px-4 items-center bg-gray-300">
      <Link href="/" className="flex items-center gap-x-2">
        <Image src={logo} alt="logo" width={60} height={60}></Image>
        <h2>TODO MATE</h2>
      </Link>
      <button
        className="ml-auto bg-black text-white text-20px font-medium px-3 py-1.5 rounded-full"
        onClick={() => openModal(<LogInModal />)}
      >
        로그인
      </button>
    </header>
  );
}

export default Header;
