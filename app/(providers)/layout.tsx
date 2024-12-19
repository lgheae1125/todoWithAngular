import { PropsWithChildren } from "react";
import ModalProvider from "./_providers/ModalProvider/ModalProvider";

function layout({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default layout;
