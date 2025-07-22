import styles from "./SendMessageButton.module.css";

const SendMessageButton = ({ onClick }) => {
  return (
    <div className={styles.SendMessageButton}>
      <button onClick={onClick}>생성하기</button>
    </div>
  );
};

export default SendMessageButton;
