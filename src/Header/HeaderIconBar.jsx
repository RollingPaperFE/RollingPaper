import PropTypes from "prop-types";
import AddEmoji from "../assets/header_add_img.png";
import ShareImg from "../assets/header_share_img.png";
import IconBarStyles from "./HeaderIconBar.module.css";

const HeaderIconBar = ({ name, writers, emojis, addEmoji, share }) => {
  const sortedEmojis = [...emojis].sort((a, b) => b.count - a.count);
  return (
    <div className={IconBarStyles.iconHeader}>
      {/* 1. 당사자 이름 */}
      <div className={IconBarStyles.name}>
        <strong>To. {name}</strong>
      </div>
      {/* 2. 몇 명이 작성했는지 */}
      <div className={IconBarStyles.right}>
        <div className={IconBarStyles.writers}>
          <div className={IconBarStyles.writersAvatar}>
            {writers.slice(0, 3).map(
              (
                user
                // id // id를 설정해두었는데 왜 오류가 나는지 모르겠음
              ) => (
                <img
                  key={user.id}
                  src={user.avatar}
                  alt={user.name}
                  className="avatar"
                />
              )
            )}
            <div className={IconBarStyles.writersCount}>
              {writers.length > 3 && (
                <span className={IconBarStyles.writersPlus}>
                  + {writers.length - 3}
                </span>
              )}
              <span className={IconBarStyles.writersText}>
                <strong>{writers.length}</strong>명이 작성했어요!
              </span>
            </div>
          </div>
        </div>
        {/* 3. 이모티콘 별 받은 수 표시 (내림차순)*/}
        <div className={IconBarStyles.emojis}>
          {sortedEmojis.map((emoji) => (
            <span key={emoji.symbol} className={IconBarStyles.emojiItems}>
              {emoji.symbol} {emoji.count}
            </span>
          ))}
        </div>
        {/* 4. 이모지 추가 기능 */}
        <div>
          <button className={IconBarStyles.addEmoji} onClick={addEmoji}>
            <img src={AddEmoji} alt="추가하기" />
            추가
          </button>
        </div>
        {/* 5. 공유 기능 */}
        <div>
          <button className={IconBarStyles.share} onClick={share}>
            <img src={ShareImg} alt="공유하기" />
          </button>
        </div>
      </div>
    </div>
  );
};

//타입 안전성 추가
HeaderIconBar.propTypes = {
  name: PropTypes.string.isRequired,
  // 다른 항목도 추가를 하고 싶은데 공부가 필요 ..
};

export default HeaderIconBar;
