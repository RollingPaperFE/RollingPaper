import styles from "./FontSelector.module.css";

const FontSelector = () => {
  return (
    <div className={styles.FontSelector}>
      <h2>폰트 선택</h2>
      <select>
        <option selected>Noto Sans</option>
        <option>Pretendard</option>
        <option>나눔명조</option>
        <option>나눔손글씨 손편지체</option>
      </select>
    </div>
  );
};

export default FontSelector;
