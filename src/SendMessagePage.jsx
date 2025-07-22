import SenderFormField from "./SenderFormField";
import RelationshipSelector from "./RelationshipSelector";
import SendMessageContent from "./SendMessageContent";
import FontSelector from "./FontSelector";
import SendMessageButton from "./SendMessageButton";
import styles from "./SendMessagePage.module.css";
import React, { useState, useEffect, useRef } from "react";

const SendMessagePage = ({ externalData, onSubmit }) => {
  const idRef = useRef(Date.now()); // 고정된 메시지 ID 생성
  const recipientId = 2; // 로그인된 사용자 ID

  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    if (externalData) {
      setMessageData(externalData);
    } else {
      // externalData가 없을 경우 기본값 설정
      setMessageData({
        sender: "",
        profileImageURL: "https://fastly.picsum.photos/id/311/200/200.jpg",
        relationship: "가족",
        content: "",
        font: "Pretendard",
      });
    }
  }, [externalData]);

  const handleChange = (field, value) => {
    setMessageData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const completeMessage = {
      ...messageData,
      id: idRef.current,
      recipientId,
      createdAt: new Date().toISOString(),
    };

    console.log("최종 저장 데이터:", completeMessage);
    onSubmit?.(completeMessage); // App 컴포넌트로 전달
  };

  if (!messageData) return <div>로딩 중...</div>;

  return (
    <div className={styles.SendMessagePage}>
      <div>
        <SenderFormField
          value={messageData.sender}
          onChange={(value) => handleChange("sender", value)}
        />
      </div>
      <div>프로필 이미지</div>
      <div>
        <RelationshipSelector
          value={messageData.relationship}
          onChange={(value) => handleChange("relationship", value)}
        />
      </div>
      <div>
        <SendMessageContent
          value={messageData.content}
          onChange={(value) => handleChange("content", value)}
        />
      </div>
      <div>
        <FontSelector
          value={messageData.font}
          onChange={(value) => handleChange("font", value)}
        />
      </div>
      <div>
        <SendMessageButton onClick={handleSave} />
      </div>
    </div>
  );
};

export default SendMessagePage;
