import styles from "./SendMessagePage.module.css";

const SendMessagePage = () => {
  return (
    <div className={styles.SendMessagePage}>
      <div>From. 이름을 입력해 주세요.</div>
      <div>프로필 이미지</div>
      <div>상대와의 관계</div>
      <div>내용을 입력해 주세요</div>
      <div>폰트 선택</div>
      <div>생성하기</div>
    </div>
  );
};

export default SendMessagePage;
