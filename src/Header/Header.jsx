import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";

const writersGroup = [
  { id: "a1", name: "Jennie", avatar: "url1" },
  { id: "a2", name: "Rose", avatar: "url2" },
  { id: "a3", name: "Jisoo", avatar: "url3" },
  { id: "a4", name: "Lisa", avatar: "url4" },
];

const emojisGroup = [
  { symbol: "👍", count: 24 },
  { symbol: "😍", count: 16 },
  { symbol: "🎉", count: 10 },
];

const addEmojiGroup = () => {
  //이모지 추가
};

const shareGroup = () => {
  //공유 기능
};

const Header = ({ type }) => {
  return (
    <header>
      {type === "Logo" && <HeaderLogo />}
      {type === "rolling" && <HeaderButton />}
      <HeaderIconBar
        name="Ashely Kim"
        writers={writersGroup}
        emojis={emojisGroup}
        addEmoji={addEmojiGroup}
        share={shareGroup}
      />
    </header>
  );
};

export default Header;
