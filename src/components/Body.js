import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  // Conditional rendering
  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
          data-testid='searchInput'
            className="border-solid border-black border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt caards and update the UI
              // searchText

              const filteredRestro = listOfRestaurants.filter((restro) => {
                return restro.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setFilteredRestaurant(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            onClick={() => {
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredListOfRestaurants);
            }}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label className="pr-2">User Name</label>
          <input
            value={loggedInUser}
            onChange={handleChange}
            className="border border-black p-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
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
