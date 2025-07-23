import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./RollingTab.css";

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
          setActiveImageIndex(0);
          onImageSelect(data.imageUrls[0]);
        }
      })
      .catch((err) => console.error("이미지 불러오기 실패:", err));
  }, []);

  const data = [
    {
      id: 0,
      title: "컬러",
      description: (
        <ul className="RollingTabFirst">
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveColor(color);
                onColorSelect(color);
              }}
              className={"btn" + (activeColor === color ? " active" : "")}
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
        <ul className="RollingTabSecond">
          {images.map((url, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveImageIndex(index);
                onImageSelect(url);
              }}
              className={"btn2" + (activeImageIndex === index ? " active" : "")}
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
      <ul className="RollingTab">
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => setTabIndex(item.id)}
            className={tabIndex === item.id ? "active" : ""}
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
