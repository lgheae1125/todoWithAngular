import React from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/Button/Button";

function Header() {
  return (
    <header className="h-20 flex gap-x-2 px-4 items-center bg-gray-300">
      <Link href="/" className="flex items-center gap-x-2">
        <Image src={logo} alt="logo" width={60} height={60}></Image>
        <h2>TODO MATE</h2>
      </Link>
      <Button size={"sm"}>로그인</Button>
    </header>
  );
}

export default Header;
