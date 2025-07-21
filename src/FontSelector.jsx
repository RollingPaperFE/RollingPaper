import styles from "./FontSelector.module.css";

const FontSelector = () => {
  return (
    <div className={styles.FontSelector}>
      <h2>폰트 선택</h2>
      <select>
        <option selected>Noto Sans</option>
      </select>
    </div>
  );
};

export default FontSelector;
