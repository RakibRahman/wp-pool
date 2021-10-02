import "./Card.scss";
import { Card } from "./Card";
import { CardImages } from "../helpers/images";
export const CardContainer = () => {
  const [Shop, Software, Legal] = CardImages;
  return (
    <div className="my-10 text-center border-b-4 border-yellow-light card__container">
      <div>
        <h1 className="text-text-48 text-blue-dark ">
          Lorem Ipsum is simply dummy text
        </h1>
        <p className="text-text-one">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="cards">
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
