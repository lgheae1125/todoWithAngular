import React, { PropsWithChildren } from "react";
import Header from "./_components/RootLayouts/Header/Header";
import Footer from "./_components/RootLayouts/Footer/Footer";
import NavL from "./_components/RootLayouts/NavL/NavL";
import NavR from "./_components/RootLayouts/NavR/NavR";

function layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-9 gap-20 mx-44">
        <NavL colSpan="col-span-2" />
        <div className="col-span-5">
          {children}
          <Footer />
        </div>
        <NavR colSpan="col-span-2" />
      </div>
    </React.Fragment>
  );
}

export default layout;
