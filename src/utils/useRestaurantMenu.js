import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // add https://corsproxy.io/? before api to avoid cors error
    const data = await fetch('https://corsproxy.io/?' + MENU_API_URL + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
