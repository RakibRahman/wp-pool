import React from "react";

type CardProps = {
  text: string;
  img: string;
};
export const Card = ({ text, img }: CardProps) => {
  return (
    <div className="z-50 card group">
      <img src={img} alt="card" />
      <p className="font-black text-text-36 text-blue-dark group-hover:border-blue-light group-hover:text-blue-light">
        {text}
      </p>
      <button className="font-normal uppercase text-text-one">
        Learn more
      </button>
    </div>
  );
};
