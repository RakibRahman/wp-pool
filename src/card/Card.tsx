import React from "react";

type CardProps = {
  text: string;
  img: string;
};
export const Card = ({ text, img }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-10 space-y-4 border-4 hover:border-blue-light card border-whiteBlack-w">
      <img src={img} alt="card" />
      <p className="text-text-36">{text}</p>

      <button className="text-text-one">Learn more</button>
    </div>
  );
};
