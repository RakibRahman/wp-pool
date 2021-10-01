import { Link } from "./Link";

export const Menu = () => {
  return (
    <ul className="flex flex-col gap-4 laptop:flex-row laptop:gap-10 text-blue-light laptop:text-blue-dark">
      <Link text="Home" />
      <Link text="about" />
      <Link text="meet the team" />
      <Link text="blog" />
      <Link text="contact" />
    </ul>
  );
};
