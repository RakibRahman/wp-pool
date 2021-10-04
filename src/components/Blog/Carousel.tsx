import { Info } from "./Info";
import Pic from "../../assets/blog.png";
import Plus3 from "../../assets/plus3.svg";
import Cross from "../../assets/header-cross.svg";

export const Carousel = () => {
  return (
    <div className="relative flex flex-col-reverse items-center gap-2 mx-auto desktop:flex-row">
      <img
        src={Cross}
        alt="x"
        className="absolute top-0 left-0 z-0 desktop:ml-56 laptop:left-60 w-96 laptop:-top-36"
      />

      <Info />
      <div className="overflow-hidden ">
        <div className="relative">
          <img
            src={Pic}
            className="z-50 object-cover w-full transition-transform ease-in transform h-9/12 hover:scale-105"
            alt="demo pic"
          />
          <span className="absolute w-7/12 text-2xl font-bold bottom-10 left-10 laptop:text-text-36 text-whiteBlack-w">
            The Title of a Blog Post Would Go Right Here
          </span>
        </div>
        <div className="flex items-center gap-4 space-y-4">
          <div className="relative h-4 mt-4 w-80 bg-blue-dark">
            <div className="absolute w-3/12 h-full bg-blue-light"></div>
          </div>
          <img src={Plus3} alt="triple plus" />
        </div>
      </div>
    </div>
  );
};
