import React from "react";

interface NavLProps {
  colSpan: string;
}

function NavL({ colSpan }: NavLProps) {
  return <div className={`w-full bg-gray-500 ${colSpan}`}>내브L임</div>;
}

export default NavL;
