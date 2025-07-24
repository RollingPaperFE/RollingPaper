import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./SendMessageContent.module.css";

const SendMessageContent = ({ value, onChange }) => {
  return (
    <div className={styles.SendMessageContent}>
      <h2>내용을 입력해 주세요</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="custom-editor"
      />
    </div>
  );
};

export default SendMessageContent;
