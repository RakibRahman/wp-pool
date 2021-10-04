import Logo from "../../assets/logo.svg";
import Phone2 from "../../assets/phone2.svg";
import Envelope2 from "../../assets/envelope2.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="grid gap-4 px-4 py-10 mx-auto mt-20 bg-blue-dark text-text-24 footer place-items-center ">
      <img src={Logo} alt="footer" />
      <div className="flex flex-wrap justify-center my-4 gap-14 ">
        <p className="flex gap-1">
          <img src={Phone2} alt="phone" />
          <span className="hover:text-blue">Call:(123)456-7890</span>
        </p>
        <p className="flex gap-1 ">
          <img src={Envelope2} alt="email" />
          <span className="hover:text-blue">Email:info@wppool.com</span>
        </p>
      </div>
      <div className="menu">
        <a href="#home">HOME</a>
        <a href="#about-us">ABOUT US</a>
        <a href="meet-the-team">MEET THE TEAM</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </div>
      <p className="pb-8 mt-10 text-center copy">
        © Copyright 2020. WPPOOL, LLC. All rights reserved.
      </p>
    </div>
  );
};
