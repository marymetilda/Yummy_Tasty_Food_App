import { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [indexToShow, setIndexToShow] = useState();
  const [shouldShowList, setShouldShowList] = useState(false);

  const resInfo = useRestaurantMenu(resId);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center bg-pink-50 sm:bg-yellow-50 md:bg-blue-50 lg:bg-green-50 w-screen min-h-screen h-full">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories?.map((category, index) => {
        const handleClick = () => {
          setIndexToShow(index);
          if (index === indexToShow) {
            setShouldShowList(!shouldShowList);
          }
        };

        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            shouldShowItems={
              index === indexToShow && shouldShowList ? true : false
            }
            handleButtonClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
