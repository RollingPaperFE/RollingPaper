import ProfileImageStyle from "./WriterProfileImageList.module.css";

const styleList = [
  ProfileImageStyle["first-img"],
  ProfileImageStyle["second-img"],
  ProfileImageStyle["third-img"],
];

const ProfileImage = ({ className, profileImageURL, relationship }) => {
  return (
    <img
      className={`${ProfileImageStyle["profile-img"]} ${className}`}
      src={profileImageURL}
      alt={relationship}
    />
  );
};

const WriterProfileImageList = ({ recentMessages, messageCount }) => {
  return (
    <div className={ProfileImageStyle["wrapped-profiles"]}>
      {recentMessages &&
        recentMessages.map((rm, idx) => (
          <ProfileImage
            key={rm.id}
            profileImageURL={rm.profileImageURL}
            relationship={rm.relationship}
            className={styleList[idx]}
          />
        ))}
      {messageCount > 3 && (
        <div
          className={`${ProfileImageStyle["profile-img"]} ${ProfileImageStyle["profile-count"]}`}
        >{`+${messageCount - 3}`}</div>
      )}
    </div>
  );
};

export default WriterProfileImageList;
