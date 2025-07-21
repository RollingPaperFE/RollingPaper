import { Link } from "react-router-dom";
import globalStyle from "./global.module.css";
import headerButtonStyle from "./HeaderButton.module.css";
import LogoImg from "../assets/header_logo_img.png";

const HeaderButton = () => {
  // 1. 로그인 완료 - 롤링페이퍼 만들기 페이지 (post 경로로 이동) - 완료
  // 2. 로그인 x - 로그인 페이지? or 현재 페이지? (Navigate 활용) - 논의 필요

  return (
    <header className={globalStyle.header}>
      <div>
        <Link to="/" className={globalStyle.logoLink}>
          <div className={globalStyle.logoBox}>
            <img
              className={globalStyle.logoImg}
              src={LogoImg}
              alt="롤링페이퍼 로고"
            />
            <span className={globalStyle.logoText}>Rolling</span>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/post">
          <button className={headerButtonStyle.createButton}>
            롤링 페이퍼 만들기
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderButton;
