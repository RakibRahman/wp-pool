import TeamBG from "../../assets/team.svg";
import React from "react";

export const Team = () => {
  return (
    <div id="meet-the-team" className="team">
      <img src={TeamBG} alt="team" />
      <div className="space-y-8">
        <h1 className="text-text-24 tablet:text-text-48">Meet The Team</h1>
        <p className="font-normal text-text-one">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy lorem dolor.
        </p>
        <button className="btn">MEET THE TEAM</button>
      </div>
    </div>
  );
};
