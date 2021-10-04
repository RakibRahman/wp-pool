import "./Blog.scss";
import Plus from "../../assets/plus-white.svg";
import { Bar } from "./Bar";
export const Blog = () => {
  return (
    <div data-aos="slide-left" className="relative">
      <div id="blog" className=" laptop:mb-64 blog">
        <Bar />
      </div>
      <div className="relative flex items-center w-full bdr">
        <img
          src={Plus}
          className="absolute z-0 -left-20 desktop:w-96"
          alt="plus"
        />
        <div className="z-50 w-10/12 mx-auto border-2 bg-blue-light border-blue-light"></div>
      </div>
    </div>
  );
};
