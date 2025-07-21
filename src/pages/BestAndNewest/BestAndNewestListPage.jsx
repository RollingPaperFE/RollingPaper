import RecipientCardList from "./RecipientCardList";
import bestAndNewestStyle from "./BestAndNewestListPage.module.css";

const BestAndNewestListPage = () => {
  return (
    <div className={bestAndNewestStyle["list-page"]}>
      <RecipientCardList title={"인기 롤링 페이퍼 🔥"} sort={"like"} />
      <RecipientCardList title={"최근에 만든 롤링 페이퍼 ⭐️"} />
      <div className={bestAndNewestStyle["btn-container"]}>
        <div className={bestAndNewestStyle["create-btn"]}>나도 만들어보기</div>
      </div>
    </div>
  );
};

export default BestAndNewestListPage;
