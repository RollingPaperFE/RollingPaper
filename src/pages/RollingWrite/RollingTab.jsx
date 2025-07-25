import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./RollingTab.module.css";

function RollingTab({ onColorSelect, onImageSelect }) {
  const [tabIndex, setTabIndex] = useState(0); // 컬러/이미지 탭 전환용
  const [images, setImages] = useState([]);
  const [activeColor, setActiveColor] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const colors = ["beige", "purple", "blue", "green"];

  useEffect(() => {
    if (colors.length > 0) {
      setActiveColor(colors[0]);
      onColorSelect(colors[0]);
    }
  }, []);

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.imageUrls);
        if (data.imageUrls.length > 0) {
          /*
          setActiveImageIndex(0);
          onImageSelect(data.imageUrls[0]);*/
          setImages(data.imageUrls);
        }
      })
      .catch((err) => console.error("이미지 불러오기 실패:", err));
  }, []);

  const data = [
    {
      id: 0,
      title: "컬러",
      description: (
        <ul className={styles.RollingTabFirst}>
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveColor(color);
                onColorSelect(color);
              }}
              className={`${styles.btnColor} ${activeColor === color ? styles.activeItem : ""}`}
            >
              <FaCheckCircle />
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 1,
      title: "이미지",
      description: (
        <ul className={styles.RollingTabSecond}>
          {images.map((url, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveImageIndex(index);
                onImageSelect(url);
              }}
              className={`${styles.btnImage} ${activeImageIndex === index ? styles.activeItem : ""}`}
              style={{
                backgroundImage:
                  activeImageIndex === index
                    ? `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${url})`
                    : `url(${url})`,
              }}
            >
              <FaCheckCircle />
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section>
      <ul className={styles.RollingTab}>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => setTabIndex(item.id)}
            className={`${tabIndex === item.id ? styles.activeTab : ""}`}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {data[tabIndex].description}
    </section>
  );
}

export default RollingTab;
