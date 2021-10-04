import "./Nav.scss";
import { useState } from "react";
import { NavImages } from "../../helpers/images";
import { Menu } from "./Menu";
import { Divide as Hamburger } from "hamburger-react";
export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [navBG, setNavBG] = useState(false);

  const scrollEffect = () => {
    if (window.scrollY >= 100) {
      setNavBG(true);
      console.log("object");
    } else {
      setNavBG(false);
    }
  };
  window.addEventListener("scroll", scrollEffect);

  const [NavLogo, Social, Phone, Phone2, Envelope, Envelope2] = NavImages;
  const Links = () => (
    <div className="flex flex-col space-y-1">
      <div className="flex gap-4 ml-auto font-normal text-gray-light">
        <p className="flex gap-1 ">
          <img src={Phone} alt="phone" />
          <span>Call:(123)456-7890</span>
        </p>
        <p className="flex gap-1">
          <img src={Envelope} alt="email" />
          <span>Email:info@wppool.com</span>
          <img className="ml-1" src={Social} alt="social" />
        </p>
      </div>
      <Menu />
    </div>
  );
  const NavPC = () => (
    <nav className={navBG ? "pc__nav active" : "pc__nav"}>
      <div>
        <img src={NavLogo} alt="logo" />
      </div>
      <Links />
    </nav>
  );
  const NavPhone = () => (
    <>
      <div className="toggle__phone">
        <div>
          <img src={NavLogo} alt="logo" />
        </div>
        <div className="hamburger">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={1.8}
            color="#fff"
            easing="ease-in-out"
          />
        </div>
      </div>
      <nav className="relative flex gap-4 px-4 text-text-one phone__nav bg-blue-dark ">
        {isOpen && (
          <div className="my-2">
            <Menu />
            <div className="flex flex-wrap gap-4 mt-4 text-text-one text-gray-light">
              <p className="flex items-center gap-2">
                <img src={Phone2} alt="phone" />
                <span className="hover:text-whiteBlack-w">
                  Call:(123)456-7890
                </span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                <img src={Envelope2} alt="email" />
                <span className="hover:text-whiteBlack-w">
                  Email:info@wppool.com
                </span>
                <img className="ml-1" src={Social} alt="social" />
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
  return (
    <>
      <NavPC />
      <NavPhone />
    </>
  );
};
