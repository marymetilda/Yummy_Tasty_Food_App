import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // add hhttps://proxy.cors.sh/ before api to avoid cors error
    const data = await fetch("https://proxy.cors.sh/" + MENU_API_URL + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
