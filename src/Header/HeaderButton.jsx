import { Link } from "react-router-dom";
import globalStyle from "./global.module.css";
import headerButtonStyle from "./HeaderButton.module.css";
import LogoImg from "/assets/header_logo_img.png";

const HeaderButton = ({ isMake, isShow = false }) => {
  return (
    <header
      className={`${globalStyle.header} ${
        !isShow && globalStyle["header-show"]
      }`}
    >
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
      {isMake && (
        <div>
          <Link to="/post">
            <button className={headerButtonStyle.createButton}>
              롤링 페이퍼 만들기
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderButton;
