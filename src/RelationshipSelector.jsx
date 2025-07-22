import styles from "./RelationshipSelector.module.css";

const RelationshipSelector = ({ value, onChange }) => {
  return (
    <div className={styles.RelationshipSelector}>
      <h2>관계 선택</h2>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="가족">가족</option>
        <option value="친구">친구</option>
        <option value="동료">동료</option>
        <option value="지인">지인</option>
      </select>
    </div>
  );
};

export default RelationshipSelector;
