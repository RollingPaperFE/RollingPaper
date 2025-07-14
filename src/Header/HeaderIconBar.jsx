import PropTypes from "prop-types";
import ShareImg from "../assets/header_share_img.png";

//1. name 을 전달받으면 해당 이름이 표시되도록 설정

const HeaderIconBar = ({ name, writers, emojis, addEmoji, share }) => {
  const sortedEmojis = [...emojis].sort((a, b) => b.count - a.count);
  return (
    <div>
      {/* 1. 당사자 이름 */}
      <div>
        <strong>To. {name}</strong>
      </div>
      {/* 2. 몇 명이 작성했는지 */}
      <div>
        {writers.slice(0, 3).map((user, idx) => (
          <img key={idx} src={user.avatar} alt={user.name} className="avatar" />
        ))}
        {writers.length > 3 && <span>+{writers.length - 3}</span>}
        <strong>{writers.length}명이 작성했어요!</strong>
      </div>
      {/* 3. 이모티콘 별 받은 수 표시 (내림차순)*/}
      <div>
        {sortedEmojis.map((emoji) => (
          <span key={emoji.symbol}>
            {emoji.symbol} {emoji.count}
          </span>
        ))}
      </div>
      {/* 4. 이모지 추가 기능 */}
      <div>
        <button onClick={addEmoji}>추가</button>
      </div>
      {/* 5. 공유 기능 */}
      <div>
        <button onClick={share}>
          <img src={ShareImg} alt="공유하기" />
        </button>
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
