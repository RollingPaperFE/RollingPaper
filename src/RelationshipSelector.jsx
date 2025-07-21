import styles from "./RelationshipSelector.module.css";

const RelationshipSelector = () => {
  return (
    <div className={styles.RelationshipSelector}>
      <h2>상대와의 관계</h2>
      <select>
        <option>친구</option>
        <option selected>지인</option>
        <option>동료</option>
        <option>가족</option>
      </select>
    </div>
  );
};

export default RelationshipSelector;
