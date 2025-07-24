import React, { useEffect, useState } from "react";
import styles from "./ProfileImageSelector.module.css";

const API_URL = "https://rolling-api.vercel.app/profile-images/";
const DEFAULT_IMAGE_URL =
  "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png";

const ProfileImageSelector = ({ value = "", onChange }) => {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(
    value || DEFAULT_IMAGE_URL
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImageList(data.imageUrls);
        if (!value && data.imageUrls.length > 0) {
          setSelectedImage(DEFAULT_IMAGE_URL);
          onChange?.(DEFAULT_IMAGE_URL);
        }
      } catch (error) {
        console.error("이미지 목록 불러오기 실패:", error);
      }
    };

    fetchImages();
  }, []);

  const handleSelect = (url) => {
    setSelectedImage(url);
    onChange?.(url);
  };

  const filteredImageList = imageList.filter(
    (url) => url !== DEFAULT_IMAGE_URL
  );

  return (
    <div className={styles.ProfileImageSelector}>
      <h2 className={styles.title}>프로필 이미지</h2>
      <div className={styles.selectorWrapper}>
        <img className={styles.selectedImage} src={selectedImage} />

        <div className={styles.imageArea}>
          <div className={styles.description}>
            프로필 이미지를 선택해주세요!
          </div>
          <div className={styles.thumbnailList}>
            {filteredImageList.map((url) => (
              <img
                key={url}
                src={url}
                alt="썸네일"
                className={`${styles.thumbnail} ${
                  selectedImage === url ? styles.selected : ""
                }`}
                onClick={() => handleSelect(url)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageSelector;
