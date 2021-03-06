import Left from "../../assets/arrow-left.svg";
import Right from "../../assets/arrow-right.svg";
import { Carousel } from "./Carousel";
export const Bar = () => {
  return (
    <>
      <div className="bar group leftBar">
        <img
          src={Left}
          className="transition ease-in group-hover:bg-whiteBlack-w "
          alt="left arrow"
        />
      </div>
      <Carousel />
      <div className="bar group rightBar">
        <img
          src={Right}
          className="transition ease-in group-hover:bg-whiteBlack-w"
          alt="right arrow"
        />
      </div>
    </>
  );
};
