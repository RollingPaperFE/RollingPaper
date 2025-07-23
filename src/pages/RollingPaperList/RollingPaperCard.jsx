import { useState } from "react";
import { changeDate } from "../../utils/changeDate";
import RollingPaperModal from "../RollingPaperList/RollingPaperModal";
import cardStyle from "./RollingPaperCard.module.css";
import createBtn from "../../assets/newMessageButton.png";

const relationList = {
  가족: cardStyle["family"],
  친구: cardStyle["friend"],
  지인: cardStyle["acquaintance"],
  동료: cardStyle["coworker"],
};

const RollingPaperCard = ({ isCreate, error, result = {} }) => {
  const { profileImageURL, sender, relationship, createdAt, content } = result;
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

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
          <RollingPaperModal
            isOpen={isOpen}
            handleModalClose={handleModalClose}
            result={result}
          />
        </>
      )}
    </>
  );
};

export default RollingPaperCard;
