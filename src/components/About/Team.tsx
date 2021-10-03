import TeamBG from "../../assets/team.svg";
import React from "react";

export const Team = () => {
  return (
    <div
      id="meet-the-team"
      className="flex flex-col items-center gap-8 laptop:flex-row text-whiteBlack-w bg-blue-light team"
    >
      <img src={TeamBG} alt="team" />
      <div className="space-y-8">
        <h1 className="text-text-48">Meet The Team</h1>
        <p className="font-normal text-text-one">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy lorem dolor.
        </p>
        <button className="px-4 py-2 font-black border-4 text-whiteBlack-w text-text-one border-blue-dark hover:bg-blue-dark">
          MEEt THE TEAM
        </button>
      </div>
    </div>
  );
};
