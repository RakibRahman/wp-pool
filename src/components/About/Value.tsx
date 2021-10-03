import Culture from "../../assets/teamwork.svg";
import Respect from "../../assets/handshake.svg";
import Quality from "../../assets/quality.svg";
import Honesty from "../../assets/honesty.svg";
import Knowledge from "../../assets/idea.svg";
import Community from "../../assets/community.svg";
import { Team } from "./Team";
type ValueProps = {
  title: string;
  img: string;
};
export const Value = () => {
  const MiniCard = ({ title, img }: ValueProps) => (
    <div className="grid font-black place-items-center ">
      <img src={img} alt="card mini" />
      <h1 className="text-whiteBlack-w text-text-36">{title}</h1>
    </div>
  );
  return (
    <div className="px-20 bg-blue-dark value">
      <div className="flex flex-col items-center justify-between gap-4 pt-10 mx-auto laptop:flex-row">
        <MiniCard title="Honesty" img={Honesty} />
        <MiniCard title="Quality" img={Quality} />
        <MiniCard title="Knowledge" img={Knowledge} />
        <MiniCard title="Respect" img={Respect} />
        <MiniCard title="Culture" img={Culture} />
        <MiniCard title="Community" img={Community} />
      </div>

      <button className="flex px-4 py-2 mx-auto mt-20 mb-10 font-black border-4 text-whiteBlack-w text-text-one border-blue-light hover:bg-blue-light">
        MISSION + VALUES
      </button>
      <Team />
    </div>
  );
};
