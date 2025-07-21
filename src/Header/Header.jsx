import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";
import HeaderIconBar from "./HeaderIconBar";
import Jenny from "../assets/headerAvatar/Jenny.jpeg";
import Rose from "../assets/headerAvatar/Rose.jpeg";
import Jisoo from "../assets/headerAvatar/Jisoo.jpeg";
import Lisa from "../assets/headerAvatar/Lisa.jpeg";

const writersGroup = [
  { id: "a1", name: "Jenny", avatar: Jenny },
  { id: "a2", name: "Rose", avatar: Rose },
  { id: "a3", name: "Jisoo", avatar: Jisoo },
  { id: "a4", name: "Lisa", avatar: Lisa },
];

const emojisGroup = [
  { symbol: "👍", count: 24 },
  { symbol: "😍", count: 16 },
  { symbol: "🎉", count: 10 },
  { symbol: "😂", count: 9 },
  { symbol: "🔥", count: 4 },
  { symbol: "🍀", count: 5 },
  { symbol: "👾", count: 8 },
  { symbol: "⭐️", count: 1 },
  { symbol: "💪🏻", count: 3 },
];

const addEmojiGroup = () => {
  //이모지 추가
};

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <HeaderButton />
      {/* {type === "Logo" && <HeaderLogo />}
      {type === "rolling" && <HeaderButton />} */}
      <HeaderIconBar
        name="Ashely Kim"
        writers={writersGroup}
        emojis={emojisGroup}
        addEmoji={addEmojiGroup}
      />
    </header>
  );
};

export default Header;
