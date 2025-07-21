import bannerImageStyle from "./BannerImage.module.css";

const BannerImage = ({image,title}) => {
  return <img src={image} alt={title} className={bannerImageStyle["banner-img"]}/>;
};

export default BannerImage;
