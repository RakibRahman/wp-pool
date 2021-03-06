import Logo from "../../assets/logo.svg";
import Phone2 from "../../assets/phone2.svg";
import Envelope2 from "../../assets/envelope2.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div data-aos="zoom-in" className="footer">
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
      <div className="font-bold menu">
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
