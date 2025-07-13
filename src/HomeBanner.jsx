import bannerStyle from "./HomeBanner.module.css";

const BannerText = ({ point, title, subtitle }) => {
  return (
    <div className={bannerStyle["point-txt-wrapper"]}>
      <span className={bannerStyle["banner-point-txt"]}>{point}</span>
      <div className={bannerStyle["banner-txt-container"]}>
        <p className={bannerStyle["banner-title-txt"]}>{title}</p>
        <p className={bannerStyle["banner-subtitle-txt"]}>{subtitle}</p>
      </div>
    </div>
  );
};

const BannerImage = ({ image, title }) => {
  return <img className={bannerStyle["banner-img"]} src={image} alt={title} />;
};

const HomeBanner = ({ point, title, subtitle, image, isReverse }) => {
  const bannerText = { point, title, subtitle };
  const bannerImage = { image, title };

  const className = !isReverse
    ? `${bannerStyle["banner-container"]}`
    : `${bannerStyle["banner-container-even"]}`;

  return (
    <div className={className}>
      <BannerText {...bannerText} />
      <BannerImage {...bannerImage} />
    </div>
  );
};

export default HomeBanner;
