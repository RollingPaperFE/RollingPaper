// SendMessageContent.jsx
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./SendMessageContent.module.css"; // 모듈 CSS import

const SendMessageContent = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.SendMessageContent}>
      <h2>내용을 입력해 주세요</h2>
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="custom-editor" // 글로벌 클래스명
        />
      </div>
    </div>
  );
};

export default SendMessageContent;
