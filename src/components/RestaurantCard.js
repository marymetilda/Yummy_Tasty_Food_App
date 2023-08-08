import CDN_LINK from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    restData?.info;

  return (
    <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src={CDN_LINK + cloudinaryImageId}
          alt="resturant logo"
        />
      <div className="restuarant-content-container">
        <h3 className="restuarant-name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <div className="rating-time-container">
          <h4>{avgRating} Stars</h4>
          <h4>{sla.deliveryTime} Minutes</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
