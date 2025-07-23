import { useRecipientById } from "./HeaderIconBarContainer";
import { useRecipientByReactions } from "./topReactionsContainer";
import Header from "./Header";

const HeaderContainer = ({ id }) => {
  const { recipients, error } = useRecipientById(id);
  const { reactions } = useRecipientByReactions(id);

  if (error) {
    return <div>error</div>;
  }

  return recipients.id ? (
    <Header
      name={recipients.name}
      writers={recipients.messageCount}
      profileImgUr={recipients.profileImgUrl}
      emojis={reactions.results}
      // addEmoji={() => {}}
    />
  ) : null;
};

export default HeaderContainer;
