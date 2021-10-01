import "./Header.scss";

import BGText from "../assets/header-text.svg";
import Banner from "../assets/header.svg";
import Cross from "../assets/header-cross.svg";
export const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-between my-4 laptop:flex-row header"
      style={{
        backgroundImage: `url(${BGText})`,
        backgroundPosition: "left center",
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="leftDiv pl-10 overflow-hidden laptop:w-3/6">
        <h1 className="text-text-30 text-blue-light">What is Lorem Ipsum?</h1>
        <p className="mb-10 font-black tracking-tighter text-text-24 tablet:text-text-36 desktop:text-text-72 text-blue-dark">
          Lorem Ipsum is simply dummy text of the printing and
        </p>
        <button className="px-4 py-2 font-black transition ease-in-out delay-100 border-4 text-text-24 border-blue-light text-blue-dark hover:bg-blue-light hover:text-whiteBlack-w">
          Learn About
        </button>
      </div>
      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
};
