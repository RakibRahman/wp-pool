import "./Header.scss";

import BGText from "../assets/header-text.svg";
import Banner from "../assets/header.svg";
import Cross from "../assets/header-cross.svg";
export const Header = () => {
  return (
    <div
      id="home"
      className="header"
      style={{
        backgroundImage: `url(${BGText})`,
        backgroundPosition: "left center",
        backgroundSize: "180%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pb-6 pl-10 overflow-hidden leftDiv laptop:w-3/6">
        <h1 className="text-text-30 text-blue-light">What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and</p>
        <button className="btn">Learn About</button>
      </div>
      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
};
