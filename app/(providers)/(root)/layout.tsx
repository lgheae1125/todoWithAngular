import React, { PropsWithChildren } from "react";
import Header from "./_components/RootLayouts/Header/Header";
import Footer from "./_components/RootLayouts/Footer/Footer";
import Nav from "./_components/RootLayouts/Nav/Nav";

function layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-12 gap-6 mx-6">
        <div className="col-span-2">
          <Nav />
        </div>
        <div className="col-span-8">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default layout;
