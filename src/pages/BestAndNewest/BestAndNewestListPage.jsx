import { Link } from "react-router-dom";
import RecipientCardList from "./RecipientCardList";
import bestAndNewestStyle from "./BestAndNewestListPage.module.css";
import HeaderButton from "../../Header/HeaderButton";
import { useAllRecipients } from "./useRecipient";

const BestAndNewestListPage = () => {
  const { bestData, newestData, error, handleMoveBest, handleMoveNewest } =
    useAllRecipients();
  return (
    <>
      <HeaderButton isMake={true} isShow={true} />
      <div className={bestAndNewestStyle["list-page"]}>
        <RecipientCardList
          title={"인기 롤링 페이퍼 🔥"}
          recipients={bestData.recipients}
          isLoading={bestData.isLoading}
          error={error}
          onMovePrevious={() => handleMoveBest("prev")}
          onMoveNext={() => handleMoveBest("next")}
        />
        <RecipientCardList
          title={"최근에 만든 롤링 페이퍼 ⭐️"}
          recipients={newestData.recipients}
          isLoading={newestData.isLoading}
          error={error}
          onMovePrevious={() => handleMoveNewest("prev")}
          onMoveNext={() => handleMoveNewest("next")}
        />
        <div className={bestAndNewestStyle["btn-container"]}>
          <Link to={"/post"} className={bestAndNewestStyle["create-btn"]}>
            나도 만들어보기
          </Link>
        </div>
      </div>
    </>
  );
};

export default BestAndNewestListPage;
