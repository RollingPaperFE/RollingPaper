import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";

const Header = ({ name, writers, profileImgUrl, emojis }) => {
  return (
    <header>
      <HeaderButton isMake={false} />
      <HeaderIconBar
        name={name}
        writers={writers}
        profileImgUrl={profileImgUrl}
        emojis={emojis}
        // addEmoji={addEmoji}
      />
    </header>
  );
};

export default Header;
