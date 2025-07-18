import { Link } from "react-router-dom";
import globalStyle from "../../src/global.module.css";
import headerButtonStyle from "./HeaderButton.module.css";
import LogoImg from "../assets/LogoImg.png";
import Button from "../assets/Button.jsx";

const HeaderButton = () => {
  // 1. 로그인 완료 - 롤링페이퍼 만들기 페이지 (post 경로로 이동) - 완료
  // 2. 로그인 x - 로그인 페이지? or 현재 페이지? (Navigate 활용) - 논의 필요

  return (
    <header className={globalStyle.header}>
      <div>
        <img className={globalStyle.logoImg} src={LogoImg} alt="롤링페이퍼" />
        <span className={globalStyle.logoText}>Rolling</span>
      </div>
      <div>
        {/* Router로 감싸야 함 - main 컴포넌트에서 감쌌는데, merge 할 때는 어떻게 되는거지..? */}
        <Link to="/post">
          <Button className={headerButtonStyle.createButton}>
            롤링 페이퍼 만들기
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderButton;
