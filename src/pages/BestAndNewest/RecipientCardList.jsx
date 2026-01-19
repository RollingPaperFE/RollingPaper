import cardListStyle from "./RecipientCardList.module.css";
import RecipientCard from "./RecipientCard";

const RecipientCardList = ({ title, recipients, isLoading, error, handleMovePrevious, handleMoveNext }) => {

  return (
    <div className={cardListStyle["card-list-container"]}>
      <h3 className={cardListStyle["card-list-title"]}>{title}</h3>
      {error?.message ? (
        <div>Error</div>
      ) : (
        <div className={cardListStyle["list-scrollable"]}>
          <div className={cardListStyle["card-list"]}>
            {recipients &&
              recipients.map((recipient) => {
                return (
                  <RecipientCard
                    key={recipient.id}
                    {...recipient}
                    isLoading={isLoading}
                    onClickPreviousButton={handleMovePrevious}
                    onClickNextButton={handleMoveNext}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipientCardList;
