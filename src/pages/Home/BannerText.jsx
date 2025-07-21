import bannerTextStyle from "./BannerText.module.css";

const BannerText = ({ point, title, subtitle, isReverse }) => {
  const marginStyle = isReverse
    ? bannerTextStyle["margin-right"]
    : bannerTextStyle["margin-left"];

  return (
    <div className={`${bannerTextStyle["text-container"]} ${marginStyle}`}>
      <span className={bannerTextStyle["point"]}>{point}</span>
      <p className={bannerTextStyle["title"]}>{title}</p>
      <p className={bannerTextStyle["subtitle"]}>{subtitle}</p>
    </div>
  );
};

export default BannerText;
