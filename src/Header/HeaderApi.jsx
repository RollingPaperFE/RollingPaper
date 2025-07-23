import { useRecipientById } from "./HeaderIconBarContainer";
import { useRecipientByReactions } from "./topReactionsContainer";
import Header from "./Header";

const HeaderContainer = ({ id }) => {
  const { recipients, error } = useRecipientById(id);
  const { reactions } = useRecipientByReactions(id);

  if (error) {
    return <div>error</div>;
  }

  const profileImgUrls = recipients.recentMessages?.map(
    (msg) => msg.profileImageURL
  );

  return recipients.id ? (
    <Header
      name={recipients.name}
      writers={recipients.messageCount}
      profileImgUrls={profileImgUrls}
      emojis={reactions.results}
    />
  ) : null;
};

export default HeaderContainer;
