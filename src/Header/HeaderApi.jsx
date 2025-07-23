import { useRecipientById } from "./HeaderIconBarContainer";
import Header from "./Header";

const HeaderContainer = ({ id }) => {
  const { recipients, error } = useRecipientById(id);
  if (error) {
    return <div>error</div>;
  }

  return recipients.id ? (
    <Header
      name={recipients.name}
      writers={recipients.messageCount}
      profileImgUr={recipients.profileImgUrl}
      emojis={recipients.topReactions}
      // addEmoji={() => {}}
    />
  ) : null;
};

export default HeaderContainer;
