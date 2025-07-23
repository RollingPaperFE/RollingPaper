import { Link, useParams } from "react-router-dom";
import { useRollingPaper } from "./useRollingPaper";
import RollingPaperCard from "./RollingPaperCard";
import rollingListStyle from "./RollingPaperListPage.module.css";
import HeaderContainer from "../../Header/HeaderApi";
import { useEffect } from "react";
import { useRecipientById } from "../../Header/HeaderIconBarContainer";

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

  useEffect(() => {
    if (backgroundImageURL) {
      document.querySelector("body").style.backgroundImage = `url(
        "${backgroundImageURL}"
      )`;
      document.querySelector("body").style.backgroundSize = "cover";
    } else {
      document.querySelector("body").style.background =
        backgroundColorList[backgroundColor];
    }

    return () => {
      document.querySelector("body").style.background = "white";
    };
  }, [backgroundColor, backgroundImageURL]);

  return (
    <>
      <HeaderContainer id={id} />
      <div className={rollingListStyle["card-list-container"]}>
        <Link to={`/post/${id}/message`}>
          <RollingPaperCard isCreate={true} />
        </Link>
        {results &&
          results.map((result) => (
            <RollingPaperCard key={result.id} error={error} result={result} />
          ))}
      </div>
    </>
  );
};

export default RollingPaperListPage;
