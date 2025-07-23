import styles from "./FontSelector.module.css";

const FontSelector = ({ value, onChange }) => {
  return (
    <div className={styles.FontSelector}>
      <h2>폰트 선택</h2>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="Noto Sans">Noto Sans</option>
        <option value="Pretendard">Pretendard</option>
        <option value="나눔명조">나눔명조</option>
        <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
      </select>
    </div>
  );
};

export default FontSelector;
