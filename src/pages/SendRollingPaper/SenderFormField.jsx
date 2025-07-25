import { useRef, useEffect } from "react";
import styles from "./SenderFormField.module.css";

const SenderFormField = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.SenderFormField}>
      <h2>From.</h2>
      <input
        ref={inputRef}
        placeholder="이름을 입력해 주세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SenderFormField;
