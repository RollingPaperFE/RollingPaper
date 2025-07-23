import CardEmojiItem from "./CardEmojiItem";
import WriterProfileImageList from "./WriterProfileImageList";
import cardStyle from "./RecipientCard.module.css";
import { Link } from "react-router-dom";

const backgroundColorList = {
  beige: cardStyle["bg-beige"],
  purple: cardStyle["bg-purple"],
  blue: cardStyle["bg-blue"],
  green: cardStyle["bg-green"],
};

const colorDesignImage = {
  beige: "src/assets/pattern_beige.png",
  purple: "src/assets/pattern_purple.png",
  blue: "src/assets/pattern_blue.png",
  green: "src/assets/pattern_green.png",
};

const RecipientCard = ({
  id,
  name,
  messageCount,
  recentMessages,
  topReactions,
  reactionCount,
  next,
  previous,
  backgroundImageURL,
  backgroundColor,
  isLoading,
  onClickNextButton,
  onClickPreviousButton,
}) => {
  const nameTextClassName = backgroundImageURL
    ? cardStyle["name-text-img-version"]
    : cardStyle["name-text-color-version"];

  const postedCountTextClassName = backgroundImageURL
    ? cardStyle["posted-count-text-img-version"]
    : cardStyle["posted-count-text-color-version"];

  return (
    <div className={cardStyle["wrapped-card"]}>
      <div className={cardStyle["btn-container"]}>
        {previous && (
          <button
            className={cardStyle["previous-btn"]}
            disabled={isLoading}
            onClick={onClickPreviousButton}
          >
            {"<"}
          </button>
        )}
        {next && (
          <button
            className={cardStyle["next-btn"]}
            disabled={isLoading}
            onClick={onClickNextButton}
          >
            {">"}
          </button>
        )}
      </div>
      {backgroundImageURL ? (
        <img
          className={cardStyle["bg-img"]}
          src={backgroundImageURL}
          alt={name}
        />
      ) : (
        <>
          <div
            className={`${cardStyle["bg-color"]} ${backgroundColorList[backgroundColor]}`}
          ></div>
          <img
            src={colorDesignImage[backgroundColor]}
            style={{
              position: "absolute",
              width: "142px",
              height: "142px",
              zIndex: "1",
              borderBottomRightRadius: "16px",
              top: "118px",
              left: "133px",
            }}
          ></img>
        </>
      )}
      <Link to={`/post/${id}`} className={cardStyle["card-link"]}>
        <div className={cardStyle["card-container"]}>
          <div className={cardStyle["card-content"]}>
            <h3
              className={`${cardStyle["name-text"]} ${nameTextClassName}`}
            >{`To. ${name}`}</h3>
            {messageCount !== 0 && (
              <WriterProfileImageList
                recentMessages={recentMessages}
                messageCount={messageCount}
              />
            )}
            <p
              className={`${cardStyle["posted-count-text"]} ${postedCountTextClassName}`}
            >
              <b>{messageCount}</b>명이 작성했어요!
            </p>
          </div>
          {reactionCount !== 0 && (
            <div className={cardStyle["card-emoji-container"]}>
              {topReactions &&
                topReactions.map((tr) => <CardEmojiItem key={tr.id} {...tr} />)}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default RecipientCard;
