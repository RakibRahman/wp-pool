import { Info } from "./Info";
import Pic from "../../assets/blog.png";
import Plus3 from "../../assets/plus3.svg";
import Cross from "../../assets/header-cross.svg";

export const Carousel = () => {
  return (
    <div className="relative flex items-center gap-2">
      <img
        src={Cross}
        alt="x"
        className="absolute z-0 ml-56 left-60 w-96 -top-36"
      />

      <Info />
      <div className="overflow-hidden ">
        <div className="relative">
          <img
            src={Pic}
            className="object-cover w-full transition-transform ease-in transform h-9/12 hover:scale-105"
            alt="demo pic"
          />
          <span className="absolute w-7/12 font-bold bottom-10 left-10 text-text-36 text-whiteBlack-w">
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
