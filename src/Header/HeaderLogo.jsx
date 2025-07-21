import { Link } from "react-router-dom";
import globalStyle from "../Header/global.module.css";
import LogoImg from "../assets/header_logo_img.png";

const HeaderLogo = () => {
  return (
    <header className={globalStyle.header}>
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
    </header>
  );
};

export default HeaderLogo;
