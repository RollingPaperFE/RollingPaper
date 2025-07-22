import SenderFormField from "./SenderFormField";
import RelationshipSelector from "./RelationshipSelector";
import styles from "./SendMessagePage.module.css";

const SendMessagePage = () => {
  return (
    <div className={styles.SendMessagePage}>
      <div>
        <SenderFormField />
      </div>
      <div>프로필 이미지</div>
      <div>
        <RelationshipSelector />
      </div>
      <div>내용을 입력해 주세요</div>
      <div>폰트 선택</div>
      <div>생성하기</div>
    </div>
  );
};

export default SendMessagePage;
