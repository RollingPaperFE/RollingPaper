import { useState } from "react";
import EmojiPickerLib from "emoji-picker-react";
import AddEmoji from "/assets/header_add_img.png";
import ShowEmoji from "/assets/header_showEmojis_img.png";
import ShareImg from "/assets/header_share_img2.png";
import toastImg from "/assets/toast_img.png";
import IconBarStyles from "./HeaderIconBar.module.css";

const HeaderIconBar = ({
  name,
  writers,
  profileImgUrls,
  emojis,
  handleUpdateReactions,
}) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [shareUrl, setShareUrl] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const sortedEmojis = Array.isArray(emojis)
    ? [...emojis].sort((a, b) => b.count - a.count)
    : [];

  const ToggleEmojis = () => {
    setShowEmojis((prev) => !prev);
  };

  const ToggleShare = () => {
    setShareUrl((prev) => !prev);
  };

  const ToggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 5000);
  };

  const handleClickShareKakao = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: "http://localhost:5173", // 스크랩 할 URL 입력
    });
  };

  return (
    <div className={IconBarStyles.iconHeader}>
      <div className={IconBarStyles.name}>
        <strong>To. {name}</strong>
      </div>
      <div className={IconBarStyles.right}>
        <div className={IconBarStyles.writers}>
          <div className={IconBarStyles.writersAvatar}>
            {profileImgUrls.slice(0, 3).map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`writer-${idx}`}
                className={IconBarStyles.avatar}
              />
            ))}
            <div className={IconBarStyles.writersCount}>
              {writers > 3 && (
                <span className={IconBarStyles.writersPlus}>
                  + {writers - 3}
                </span>
              )}
            </div>
          </div>
          <div className={IconBarStyles.writersText}>
            <span className={IconBarStyles.writersNum}>{writers}</span>
            명이 작성했어요!
          </div>
        </div>
        <div className={IconBarStyles.dividerFirst}></div>
        <div className={IconBarStyles.emojis}>
          {sortedEmojis.slice(0, 3).map((emojis) => (
            <span key={emojis.emoji} className={IconBarStyles.emojiItems}>
              {emojis.emoji} {emojis.count}
            </span>
          ))}
        </div>
        <div className={IconBarStyles.toggleEmojiWrapper}>
          <img src={ShowEmoji} alt="이모티콘 보기" onClick={ToggleEmojis} />
          {showEmojis && (
            <div className={IconBarStyles.toggleEmojiBox}>
              {sortedEmojis.slice(0, 8).map((emojis) => (
                <span
                  key={emojis.emoji}
                  className={IconBarStyles.toggleEmojiItems}
                >
                  {emojis.emoji} {emojis.count}
                </span>
              ))}
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <button
            type="button"
            className={IconBarStyles.addEmoji}
            onClick={ToggleEmojiPicker}
          >
            <img src={AddEmoji} alt="추가하기" />
            <span className={IconBarStyles.addText}>추가</span>
          </button>

          <EmojiPickerLib
            open={showEmojiPicker}
            onClose={ToggleEmojiPicker}
            onEmojiClick={(emojiInfo) => handleUpdateReactions(emojiInfo.emoji)}
            className={IconBarStyles.emojiPicker}
            style={{ position: "absolute", top: "43px", left: "-270px" }}
          />
        </div>

        <div className={IconBarStyles.dividerSecond}></div>
        <div>
          <div>
            <img
              src={ShareImg}
              className={IconBarStyles.shareWrapper}
              onClick={ToggleShare}
              alt="공유하기"
            />
            {shareUrl && (
              <div className={IconBarStyles.shareUrl}>
                <div
                  className={IconBarStyles.shareUrlTitle}
                  onClick={handleClickShareKakao}
                >
                  카카오톡 공유
                </div>
                <div
                  className={IconBarStyles.shareUrlTitle}
                  onClick={handleClick}
                >
                  URL 공유
                </div>
                {isToastVisible && (
                  <div className={IconBarStyles.toast}>
                    <img src={toastImg} alt="URL주소복사" />
                    URL이 복사되었습니다.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIconBar;
