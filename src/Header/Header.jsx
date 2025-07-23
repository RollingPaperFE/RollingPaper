import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";

const Header = ({ name, writers, profileImgUrls, emojis }) => {
  return (
    <header>
      <HeaderButton isMake={true} />
      <HeaderIconBar
        name={name}
        writers={writers}
        profileImgUrls={profileImgUrls}
        emojis={emojis}
      />
    </header>
  );
};

export default Header;
