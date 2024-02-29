import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://foodapp-backend-node.onrender.com/api/restaurants"
    );
    const restroData = await res.json();

    setListOfRestaurants(restroData);
    setFilteredRestaurant(restroData);
  };

  const onlineStatus = useOnlineStatus();
  console.log({listOfRestaurants});

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  // Conditional rendering
  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="bg-pink-50 sm:bg-yellow-50 md:bg-blue-50 lg:bg-green-50">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="md:px-8 py-4 bg-pink-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100 flex items-center justify-center shadow-xl">
          <input
            placeholder="search your favorite"
            data-testid="searchInput"
            className="border-solid border-pink-200 sm:border-yellow-200 md:border-blue-200 lg:border-green-200 border outline-none p-2 w-1/2 md:w-full"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-pink-200 sm:bg-yellow-200 md:bg-blue-200 lg:bg-green-200 m-4 rounded-lg text-lg font-semibold"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText

              const filteredRestro = listOfRestaurants.filter((restro) => {
                return restro.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setFilteredRestaurant(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 shadow-xl bg-pink-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100 md:w-[20vw]">
          <button
            onClick={() => {
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setFilteredRestaurant(filteredListOfRestaurants);
            }}
            className="p-4 rounded-lg text-xl font-bold"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restObj) => (
          <Link to={"/restaurants/" + restObj.id} key={restObj.id}>
            <RestaurantCard restData={restObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
