import { Link, useParams } from "react-router-dom";
import { useRollingPaper } from "./useRollingPaper";
import RollingPaperCard from "./RollingPaperCard";
import rollingListStyle from "./RollingPaperListPage.module.css";

const RollingPaperListPage = () => {
  const { id } = useParams();
  const data = useRollingPaper(id);
  const { rollingPaper, error } = data;
  const { results } = rollingPaper;

  return (
    <div className={rollingListStyle["card-list-container"]}>
      <Link to={`/post/${id}/message`}>
        <RollingPaperCard isCreate={true} />
      </Link>
      {results &&
        results.map((result) => (
          <RollingPaperCard key={result.id} error={error} result={result} />
        ))}
    </div>
  );
};

export default RollingPaperListPage;
