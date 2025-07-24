import SenderFormField from "./SenderFormField";
import RelationshipSelector from "./RelationshipSelector";
import SendMessageContent from "./SendMessageContent";
import FontSelector from "./FontSelector";
import SendMessageButton from "./SendMessageButton";
import styles from "./SendMessagePage.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderButton from "../../Header/HeaderButton";
import ProfileImageSelector from "./ProfileImageSelector";
import axios from "axios";

const SendMessagePage = ({ externalData, onSubmit }) => {
  const [messageData, setMessageData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
    };
    axios.post(
      `https://rolling-api.vercel.app/17-2/recipients/${id}/messages/`,
      completeMessage,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate(`/post/${id}`);
  };

  if (!messageData) return <div>로딩 중...</div>;

  return (
    <>
      <HeaderButton isMake={false} />
      <div className={styles.SendMessagePage}>
        <div>
          <SenderFormField
            value={messageData.sender}
            onChange={(value) => handleChange("sender", value)}
          />
        </div>
        <div>
          <ProfileImageSelector
            value={messageData.profileImageURL}
            onChange={(value) => handleChange("profileImageURL", value)}
          />
        </div>
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
    </>
  );
};

export default SendMessagePage;
