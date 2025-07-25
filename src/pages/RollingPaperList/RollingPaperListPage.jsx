import { Link, useParams } from "react-router-dom";
import { useRecipientById } from "../../Header/HeaderIconBarContainer";
import { useRollingPaper } from "./useRollingPaper";
import { useState, useEffect } from "react";
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
  const { rollingPaper, error, ref } = data;
  // const { results } = rollingPaper; // #37 생성된 롤링페이퍼 페이지 삭제
  const { recipients } = useRecipientById(id);
  const { backgroundColor, backgroundImageURL } = recipients;

  const [showCreateCard, setShowCreateCard] = useState(true); // #37 생성된 롤링페이퍼 페이지 삭제

  // #37 생성된 롤링페이퍼 페이지 삭제
  const handleDeleteButton = (e) => {
    e.preventDefault();
    setShowCreateCard((prev) => !prev);
  };

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (rollingPaper) {
      setResults(rollingPaper);
    }
  }, [rollingPaper]);

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
        <Link
          to={""}
          className={rollingListStyle["editor-link-btn"]}
          onClick={handleDeleteButton} // #37 생성된 롤링페이퍼 페이지 삭제
        >
          <span className="material-icons">delete</span>
        </Link>
        <div className={rollingListStyle["card-list-container"]}>
          {showCreateCard && ( // #37 생성된 롤링페이퍼 페이지 삭제
            <Link to={`/post/${id}/message`}>
              <RollingPaperCard isCreate={true} />
            </Link>
          )}
          {results &&
            results.map((result) => (
              <RollingPaperCard
                key={result.id}
                isDelete={!showCreateCard} // #37 생성된 롤링페이퍼 페이지 삭제
                error={error}
                result={result}
                setMessages={setResults}
              />
            ))}
        </div>
        <div ref={ref}></div>
      </div>
    </>
  );
};

export default RollingPaperListPage;
