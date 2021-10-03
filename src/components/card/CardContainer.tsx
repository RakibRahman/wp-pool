import "./Card.scss";
import { Card } from "./Card";
import Cross from "../../assets/header-cross.svg";
import { CardImages } from "../../helpers/images";
export const CardContainer = () => {
  const [Shop, Software, Legal] = CardImages;
  return (
    <div className="relative text-center card__container">
      <div className="my-4 ">
        <h1 className="font-black text-text-48 text-blue-dark ">
          Lorem Ipsum is simply dummy text
        </h1>
        <p className="text-text-one">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="absolute z-0 desktop:-left-40 desktop:top-8">
        <img src={Cross} className="w-96" alt="" />
      </div>
      <div className=" cards">
        <Card text="Lorem Ipsum is simply dummy text" img={Shop} />
        <Card text="Lorem Ipsum is simply dummy text" img={Software} />
        <Card text="Lorem Ipsum is simply dummy text" img={Legal} />

        <Card text="Lorem Ipsum is simply dummy text" img={Shop} />
        <Card text="Lorem Ipsum is simply dummy text" img={Software} />
        <Card text="Lorem Ipsum is simply dummy text" img={Legal} />
      </div>
    </div>
  );
};
