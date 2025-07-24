import { Link } from "react-router-dom";
import HomeBanner from "./HomeBanner";
import HeaderButton from "../../Header/HeaderButton";
import homeStyle from "./HomePage.module.css";

const bannerList = [
  {
    point: "Point. 01",
    title: "누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요",
    subtitle: "로그인 없이 자유롭게 만들어요.",
    image: "/assets/top_banner_image.png",
    isReverse: false,
  },
  {
    point: "Point. 02",
    title: "서로에게 이모지로 감정을 표현해보세요",
    subtitle: "롤링 페이퍼에 이모지를 추가할 수 있어요.",
    image: "/assets/bottom_banner_image.png",
    isReverse: true,
  },
];

const HomePage = () => {
  return (
    <>
      <HeaderButton isMake={true} isShow={true} />
      <div className={homeStyle["homepage"]}>
        <HomeBanner {...bannerList[0]} />
        <HomeBanner {...bannerList[1]} />
        <Link to={"/list"} className={homeStyle["link-btn"]}>
          구경해보기
        </Link>
      </div>
    </>
  );
};

export default HomePage;
