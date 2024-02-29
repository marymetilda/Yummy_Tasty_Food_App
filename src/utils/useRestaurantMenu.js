import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // add hhttps://proxy.cors.sh/ before api to avoid cors error
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    // console.log({json});
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
