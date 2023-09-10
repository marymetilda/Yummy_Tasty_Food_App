import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    restData?.info;

  return (
    <div data-testid='resCard' className="m-4 p-4 w-[250px] h-[350px] bg-gray-200 rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg h-32 w-full"
        src={CDN_LINK + cloudinaryImageId}
        alt="resturant logo"
      />
      <div className="restuarant-content-container">
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <p className="overflow-hidden h-12 ">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <div className="rating-time-container">
          <h4>{avgRating} Stars</h4>
          <h4>{sla.deliveryTime} Minutes</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
