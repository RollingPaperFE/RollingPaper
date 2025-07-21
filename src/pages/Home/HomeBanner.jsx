import BannerImage from "./BannerImage";
import BannerText from "./BannerText";
import bannerStyle from "./HomeBanner.module.css";

const HomeBanner = ({ point, title, subtitle, image, isReverse }) => {
  const bannerText = { point, title, subtitle, isReverse };
  const bannerImage = { image, isReverse };

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
