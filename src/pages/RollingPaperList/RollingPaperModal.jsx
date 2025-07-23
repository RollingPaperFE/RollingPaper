import modalStyle from "./RollingPaperModal.module.css";
import jisoo from "../../assets/headerAvatar/Jisoo.jpeg";

const relationList = {
  가족: modalStyle["family"],
  친구: modalStyle["friend"],
  지인: modalStyle["acquaintance"],
  동료: modalStyle["coworker"],
};

const RollingPaperModal = ({ isOpen, handleModalClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "#00000099",
          zIndex: "1000",
        }}
      />
      <div className={modalStyle["modal-container"]}>
        <div className={modalStyle["sender-container"]}>
          <div className={modalStyle["img-and-text-container"]}>
            <img
              width={56}
              height={56}
              src={jisoo}
              alt="img"
              className={modalStyle["sender-img"]}
            />
            <div className={modalStyle["sender-text-container"]}>
              <h3 className={modalStyle["sender"]}>
                From. <b>김동훈</b>
              </h3>
              <span
                className={`${modalStyle["sender-relation"]} ${relationList["동료"]}`}
              >
                동료
              </span>
            </div>
          </div>
          <div className={modalStyle["card-create-date"]}>2023.12.12</div>
        </div>
        <div className={modalStyle["modal-content"]}>
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
          또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
          조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
          모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강,
          체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
          건강, 체력 모두 조심 또 하세요!
        </div>
        <button className={modalStyle["modal-btn"]} onClick={handleModalClose}>
          확인
        </button>
      </div>
    </>
  );
};

export default RollingPaperModal;
