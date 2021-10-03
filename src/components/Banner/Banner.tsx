import "./Banner.scss";
import Quick from "../../assets/quickbook.jpg";
import Apd from "../../assets/adp.jpg";

export const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between px-20 py-4 my-4 mb-20 laptop:px-24 laptop:flex-row banner bg-whiteBlack-w">
      <div className="laptop:w-7/12">
        <h1 className="font-black text-text-24 text-blue-dark laptop:text-text-48">
          Lorem Ipsum is simply
        </h1>

        <div className="space-y-8 font-normal text-text-one text-whiteBlack-b">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy
            eirmod tempor invidunt ut labore et dolore.
          </p>
          <p>
            Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        <img className="w-80 laptop:w-72" src={Quick} alt="quick book" />
        <img className="w-80 laptop:w-72" src={Apd} alt="ADP" />
      </div>
    </div>
  );
};
