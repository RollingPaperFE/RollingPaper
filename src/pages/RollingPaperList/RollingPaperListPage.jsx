import { Link, useParams } from "react-router-dom";
import { useRecipientById } from "../../Header/HeaderIconBarContainer";
import { useRollingPaper } from "./useRollingPaper";
import RollingPaperCard from "./RollingPaperCard";
import rollingListStyle from "./RollingPaperListPage.module.css";
import HeaderContainer from "../../Header/HeaderApi";

const backgroundColorList = {
  beige: "var(--beige-200)",
  purple: "var(--purple-200)",
  blue: "var(--blue-200)",
  green: "var(--green-200)",
};

const RollingPaperListPage = () => {
  const { id } = useParams();
  const data = useRollingPaper(id);
  const { rollingPaper, error } = data;
  const { results } = rollingPaper;
  const { recipients } = useRecipientById(id);
  const { backgroundColor, backgroundImageURL } = recipients;

  return (
    <>
      <HeaderContainer id={id} />
      <div
        className={rollingListStyle["background-wrapped"]}
        style={{
          background:
            backgroundImageURL &&
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImageURL}) `,
          backgroundColor:
            !backgroundImageURL && backgroundColorList[backgroundColor],
          objectFit: "cover",
          backgroundRepeat: backgroundImageURL && "no-repeat",
          backgroundSize: backgroundImageURL && "100vw 100vh",
          backgroundAttachment: backgroundImageURL && "fixed",
          minHeight: "100vh",
        }}
      >
        <Link to={""} className={rollingListStyle["editor-link-btn"]}>
          <span className="material-icons">delete</span>
        </Link>
        <div className={rollingListStyle["card-list-container"]}>
          <Link to={`/post/${id}/message`}>
            <RollingPaperCard isCreate={true} />
          </Link>
          {results &&
            results.map((result) => (
              <RollingPaperCard key={result.id} error={error} result={result} />
            ))}
        </div>
      </div>
    </>
  );
};

export default RollingPaperListPage;
