import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RollingTab from "./RollingTab";
import "./RollingWriteReset.css";
import styles from "./RollingWrite.module.css";
import HeaderButton from "../../Header/HeaderButton";

function RollingWrite() {
  /*input 글자 입력시 버튼 활성화*/
  const [name, setText] = useState("");

  const [backgroundColor, setSelectedColor] = useState("");
  const [backgroundImageURL, setSelectedImage] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      backgroundColor,
      backgroundImageURL: backgroundImageURL || null,
    };

    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/17-2/recipients/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`서버 에러: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("서버 응답:", data);

      //성공 후 페이지 이동
      navigate("/list");

      // 서버 응답 성공 후 처리(예: 입력 초기화, 알림 등)
      setText("");
      setSelectedColor("");
      setSelectedImage("");
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };
  /*--------end-----------*/

  return (
    <>
      <HeaderButton isMake={false} />
      <div className={styles.RollingWriteMain}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.titleTo}>To.</h1>
          <input
            placeholder="받는 사람 이름을 입력해 주세요"
            value={name}
            onChange={handleTextChange}
            className={styles.input}
          ></input>
          <h1 className={styles.heading}>배경화면을 선택해 주세요.</h1>
          <p className={styles.subtext}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>

          <RollingTab
            onColorSelect={(color) => {
              setSelectedColor(color);
            }}
            onImageSelect={(imageUrl) => {
              setSelectedImage(imageUrl);
            }}
          />
          <button
            type="submit"
            disabled={!name}
            className={!name ? styles.disabledButton : styles.button}
          >
            생성하기
          </button>
        </form>
      </div>
    </>
  );
}

export default RollingWrite;
