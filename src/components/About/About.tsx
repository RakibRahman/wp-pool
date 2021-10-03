import "./About.scss";
import { Background } from "./Background";
import { Mission } from "./Mission";
import { Value } from "./Value";
export const About = () => {
  return (
    <>
      <div
        id="about-us"
        className="relative pb-24 overflow-hidden bg-blue-dark about"
      >
        <div className="absolute left-0 z-50 w-full mt-56 space-y-4 tablet:mt-24 top-24 pl-14 text-whiteBlack-w laptop:w-84">
          <h1 className="font-black text-text-48 bg-blue-dark tablet:bg-opacity-0 tablet:font-extrabold">
            About Our Firm
          </h1>
          <p className="tablet:w-4/12 text-text-one">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="px-4 py-2 font-black border-4 text-text-one border-blue-light hover:bg-blue-light">
            ABOUT US
          </button>
        </div>

        <Background />
      </div>
      <Mission />
      <Value />
    </>
  );
};
