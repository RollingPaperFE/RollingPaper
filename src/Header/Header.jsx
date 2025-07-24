import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";

const Header = ({
  name,
  writers,
  profileImgUrls,
  emojis,
  handleUpdateReactions,
}) => {
  return (
    <header>
      <HeaderButton isMake={false} />
      <HeaderIconBar
        name={name}
        writers={writers}
        profileImgUrls={profileImgUrls}
        emojis={emojis}
        handleUpdateReactions={handleUpdateReactions}
      />
    </header>
  );
};

export default Header;
