import React, { useState } from "react";
import FirstPage from "./main/firstPage";
import SecondPage from "./main/secondPage";
import ThirdPage from "./main/thirdPage";
import FourthPage from "./main/fourthPage";
import FifthPage from "./main/fifthPage";

import { Menu, MenuFragment } from "./main/menu";

// import './mainPage.css';
import "./mainPage.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

function MainPage() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  // u
  return (
    <>
      <Header />
      <main>
        <Menu handle={() => setMenuVisibility(!menuVisibility)} />

        {menuVisibility ? (
          <MenuFragment />
        ) : (
          <div>
            <FirstPage styleClass="white-style-background" />
            <SecondPage styleClass="black-style-background" />
            <ThirdPage styleClass="white-style-background" />
            <FourthPage styleClass="black-style-background" />
            <FifthPage styleClass="white-style-background" />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
