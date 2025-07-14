import HeaderLogo from "./HeaderButton";
import HeaderButton from "./HeaderButton";

const Header = ({ type }) => {
  return (
    <>
      {type === "Logo" && <HeaderLogo />}
      {type === "rolling" && <HeaderButton />}
    </>
  );
};

export default Header;
