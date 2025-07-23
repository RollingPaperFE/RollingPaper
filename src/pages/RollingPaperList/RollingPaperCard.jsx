import { changeDate } from "../../utils/changeDate";
import cardStyle from "./RollingPaperCard.module.css";
import createBtn from "../../assets/newMessageButton.png";

const relationList = {
  가족: cardStyle["family"],
  친구: cardStyle["friend"],
  지인: cardStyle["acquaintance"],
  동료: cardStyle["coworker"],
};

const RollingPaperCard = ({
  isCreate,
  error,
  result = {},
  handleModalOpen,
}) => {
  const { profileImageURL, sender, relationship, createdAt, content } = result;

  return (
    <>
      {isCreate ? (
        <div className={cardStyle["create-btn-container"]}>
          <img src={createBtn} alt="Create new message" />
        </div>
      ) : (
        <>
          {error?.message ? (
            <div>Error</div>
          ) : (
            <div onClick={handleModalOpen}>
              <div className={cardStyle["card-container"]}>
                <div className={cardStyle["sender-container"]}>
                  <img
                    width={56}
                    height={56}
                    src={profileImageURL}
                    alt={sender}
                    className={cardStyle["sender-img"]}
                  />
                  <div className={cardStyle["sender-text-container"]}>
                    <h3 className={cardStyle["sender"]}>
                      From. <b>{sender}</b>
                    </h3>
                    <span
                      className={`${cardStyle["sender-relation"]} ${relationList[relationship]}`}
                    >
                      {relationship}
                    </span>
                  </div>
                </div>
                <div
                  className={cardStyle["card-content"]}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className={cardStyle["card-create-date"]}>
                  {changeDate(createdAt)}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RollingPaperCard;
