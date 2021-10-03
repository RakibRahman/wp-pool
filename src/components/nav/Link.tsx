type LinkProps = {
  text: string;
};
export const Link = ({ text }: LinkProps) => {
  return (
    <li>
      <a
        className="uppercase transition-colors ease-in hover:text-whiteBlack-w laptop:hover:text-blue-light"
        href={`#${text.toLocaleLowerCase().split(" ").join("-")}`}
      >
        {text}
      </a>
    </li>
  );
};
