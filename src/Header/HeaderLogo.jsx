import globalStyle from "../Header/global.module.css";
import LogoImg from "../assets/header_logo_img.png";

const HeaderLogo = () => {
  return (
    <header className={globalStyle.header}>
      <div>
        <img className={globalStyle.logoImg} src={LogoImg} alt="롤링페이퍼" />
        <span className={globalStyle.logoText}>Rolling</span>
      </div>
    </header>
  );
};

export default HeaderLogo;
