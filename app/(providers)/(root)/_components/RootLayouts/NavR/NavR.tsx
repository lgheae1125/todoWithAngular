import React from "react";

interface NavRProps {
  colSpan: string;
}

function NavR({ colSpan }: NavRProps) {
  return <div className={`w-full bg-gray-500 ${colSpan} `}>내브R임</div>;
}

export default NavR;
