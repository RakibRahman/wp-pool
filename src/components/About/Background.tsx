import AboutBg from "../../assets/about.svg";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
export const Background = () => {
  return (
    <>
      <img
        src={AboutBg}
        alt="plus"
        className="absolute z-40 w-8/12 top-20 right-20"
      />

      <img
        src={Plus}
        alt="plus"
        className="absolute z-0 w-5/12 -bottom-14 left-64"
      />
      <img
        src={Minus}
        alt="plus"
        className="absolute bottom-0 z-10 w-84 tablet:bottom-20 tablet:left-48"
      />
    </>
  );
};
