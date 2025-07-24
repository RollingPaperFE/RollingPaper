import modalStyle from "./RollingPaperModal.module.css";
import { changeDate } from "../../utils/changeDate";
// import jisoo from "../../assets/headerAvatar/Jisoo.jpeg";

const relationList = {
  가족: modalStyle["family"],
  친구: modalStyle["friend"],
  지인: modalStyle["acquaintance"],
  동료: modalStyle["coworker"],
};

const RollingPaperModal = ({ isOpen, handleModalClose, result }) => {
  const { profileImageURL, sender, relationship, createdAt, content } = result;

  if (!isOpen) return null;
  return (
    <>
      <div className={modalStyle["overlay"]} />
      <div className={modalStyle["modal-container"]}>
        <div className={modalStyle["sender-container"]}>
          <div className={modalStyle["img-and-text-container"]}>
            <img
              width={56}
              height={56}
              src={profileImageURL}
              alt="img"
              className={modalStyle["sender-img"]}
            />
            <div className={modalStyle["sender-text-container"]}>
              <h3 className={modalStyle["sender"]}>
                From. <b>{sender}</b>
              </h3>
              <span
                className={`${modalStyle["sender-relation"]} ${relationList[relationship]}`}
              >
                {relationship}
              </span>
            </div>
          </div>
          <div className={modalStyle["card-create-date"]}>
            {changeDate(createdAt)}
          </div>
        </div>
        <div
          className={modalStyle["modal-content"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button className={modalStyle["modal-btn"]} onClick={handleModalClose}>
          확인
        </button>
      </div>
    </>
  );
};

export default RollingPaperModal;
