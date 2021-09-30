import "./Nav.scss";
import { useState } from "react";
import { NavImages } from "../helpers/images";
import { Spin as Hamburger } from "hamburger-react";
export const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const [NavLogo, Social, Phone, Envelop] = NavImages;
  const Links = () => (
    <div>
      <div className="flex text-gray-light gap-4">
        <p className="flex ml-28 gap-1">
          <img src={Phone} alt="phone" />
          <span>Call:(123)456-7890</span>
        </p>
        <p className="flex gap-1">
          <img src={Envelop} alt="email" />
          <span>Email:info@wppool.com</span>
          <img className="ml-1" src={Social} alt="social" />
        </p>
      </div>
      <ul className=" flex gap-6 text-blue-dark">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#meet">MEET THE TEAM</a>
        </li>
        <li>
          <a href="#blog">BLOG</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
  const NavPC = () => (
    <nav className="flex justify-between px-10 py-8 pc__nav">
      <div>
        <img src={NavLogo} alt="logo" />
      </div>
      <Links />
    </nav>
  );
  const NavPhone = () => (
    <>
      <div className="bg-blue-light flex justify-between items-center py-2 toggle__phone px-4">
        <div className="">
          <img src={NavLogo} alt="logo" />
        </div>
        <div className="">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={1.8}
            color="#fff"
            easing="ease-in"
          />
        </div>
      </div>
      <nav className="relative nav__phone grid bg-blue-light place-items-center gap-4">
        {isOpen && (
          <div className="my-2">
            <ul className=" flex flex-col gap-4 text-blue-dark my-4">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#meet">MEET THE TEAM</a>
              </li>
              <li>
                <a href="#blog">BLOG</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
            <div className="flex flex-col text-gray-light gap-4">
              <p className="flex gap-1">
                <img src={Phone} alt="phone" />
                <span>Call:(123)456-7890</span>
              </p>
              <p className="flex  gap-1">
                <img src={Envelop} alt="email" />
                <span>Email:info@wppool.com</span>
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
