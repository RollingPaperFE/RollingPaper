import HeaderLogo from "./HeaderButton";
import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";

const Header = ({ type }) => {
  return (
    <>
      {type === "Logo" && <HeaderLogo />}
      {type === "rolling" && <HeaderButton />}
      <HeaderIconBar />
    </>
  );
};

export default Header;
