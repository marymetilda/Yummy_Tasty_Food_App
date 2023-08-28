import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional chaning
    const restroData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restroData);
    setFilteredRestaurant(restroData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  // Conditional rendering
  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt caards and update the UI
              // searchText
              console.log(listOfRestaurants);

              const filteredRestro = listOfRestaurants.filter((restro) => {
                return restro.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
                // console.log(restro.info.name.includes(searchText));
              });
              console.log(filteredRestro);
              setFilteredRestaurant(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredListOfRestaurants);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restObj) => (
          <Link to={"/restaurants/" + restObj.info.id} key={restObj.info.id}>
            <RestaurantCard restData={restObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
