import emojiStyle from "./CardEmojiItem.module.css";

const CardEmojiItem = ({ emoji, count }) => {
  return (
    <div className={emojiStyle["emoji-container"]}>
      <div className={emojiStyle["emoji"]}>{emoji}</div>
      <div className={emojiStyle["count"]}>{count}</div>
    </div>
  );
};

export default CardEmojiItem;
