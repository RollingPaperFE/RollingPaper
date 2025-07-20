import { useState } from "react";
import PropTypes from "prop-types";
import AddEmoji from "../assets/header_add_img.png";
import ShowEmoji from "../assets/header_show_img.png";
import ShareImg from "../assets/header_share_img.png";
import IconBarStyles from "./HeaderIconBar.module.css";

const HeaderIconBar = ({ name, writers, emojis, addEmoji, share }) => {
  const sortedEmojis = [...emojis].sort((a, b) => b.count - a.count);
  const [showEmojis, setShowEmojis] = useState(false);
  const ToggleEmojis = () => {
    setShowEmojis((prev) => !prev);
  };

  return (
    <div className={IconBarStyles.iconHeader}>
      <div className={IconBarStyles.name}>
        <strong>To. {name}</strong>
      </div>
      <div className={IconBarStyles.right}>
        <div className={IconBarStyles.writers}>
          <div className={IconBarStyles.writersAvatar}>
            {writers.slice(0, 3).map((user) => (
              <img
                key={user.id}
                src={user.avatar}
                alt={user.name}
                className={IconBarStyles.avatar}
              />
            ))}
            <div className={IconBarStyles.writersCount}>
              {writers.length > 3 && (
                <span className={IconBarStyles.writersPlus}>
                  + {writers.length - 3}
                </span>
              )}
            </div>
          </div>
          <span className={IconBarStyles.writersText}>
            <strong>{writers.length}</strong>명이 작성했어요!
          </span>
        </div>
        <div className={IconBarStyles.dividerFirst}></div>
        <div className={IconBarStyles.emojis}>
          {sortedEmojis.map((emoji) => (
            <span key={emoji.symbol} className={IconBarStyles.emojiItems}>
              {emoji.symbol} {emoji.count}
            </span>
          ))}
        </div>
        <div className={IconBarStyles.toggleEmojiWrapper}>
          <img src={ShowEmoji} alt="이모티콘 보기" onClick={ToggleEmojis} />
          {showEmojis ? (
            <div className={IconBarStyles.toggleEmojiBox}>
              {sortedEmojis.slice(0, 8).map((emojis) => (
                <span
                  key={emojis.symbol}
                  className={IconBarStyles.toggleEmojiItems}
                >
                  {emojis.symbol} {emojis.count}
                </span>
              ))}
            </div>
          ) : null}
          {/* 토글 클릭하면 클릭 이미지(아이콘)가 사라지고 고정됨 ㅠㅠ */}
        </div>
      </div>
      <div>
        <button className={IconBarStyles.addEmoji} onClick={addEmoji}>
          <img src={AddEmoji} alt="추가하기" />
          추가
        </button>
      </div>
      <div className={IconBarStyles.dividerSecond}></div>
      <div>
        <button className={IconBarStyles.share} onClick={share}>
          <img src={ShareImg} alt="공유하기" />
        </button>
      </div>
    </div>
  );
};

//타입 안전성 추가
HeaderIconBar.propTypes = {
  name: PropTypes.string.isRequired,
  // 다른 항목은 기능 구현하면서 추가 예정
};

export default HeaderIconBar;
