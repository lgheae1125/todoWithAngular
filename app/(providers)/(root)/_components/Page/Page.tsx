import React, { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return (
    <main className="w-full min-w-[400px] bg-gray-300 h-[1000px]">
      {children}
    </main>
  );
}

export default Page;
