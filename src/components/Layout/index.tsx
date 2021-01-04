import React, { ReactElement, useEffect, useState, createContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import CustomCursor from "../CustomCursor";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FirebaseProvider from "../../firebase.provider";

interface Props {
  children: React.ReactNode;
  title?: string;
  disableCustomCursor?: boolean;
}

function Layout(props: Props): ReactElement {
  const { children, title, disableCustomCursor } = props;

  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
  }, []);

  return (
    <FirebaseProvider>
      <Header title={title} />
      <Navbar />
      <CustomCursor disabled={disableCustomCursor} />
      <div style={{ paddingTop: "50px", minHeight: "calc( 100vh - 125px)" }}>
        {children}
      </div>
      <Footer />
    </FirebaseProvider>
  );
}

export default Layout;
