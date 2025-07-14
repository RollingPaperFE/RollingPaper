import globalStyle from "../../src/global.module.css";
import headerButtonStyle from "./HeaderButton.module.css";
import LogoImg from "../assets/LogoImg.png";

const HeaderButton = () => {
  return (
    <header className={globalStyle.header}>
      <div>
        <img className={globalStyle.logoImg} src={LogoImg} alt="롤링페이퍼" />
        <span className={globalStyle.logoText}>Rolling</span>
      </div>
      <div>
        <button className={headerButtonStyle.createButton}>
          롤링 페이퍼 만들기
        </button>
      </div>
    </header>
  );
};

export default HeaderButton;
