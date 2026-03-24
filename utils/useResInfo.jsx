import { useEffect, useState } from "react";

const useResInfo = () => {
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.22480&lng=79.53130&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const data = await response.json();

      setUpdateList(
        // optional chaining
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );    
    };

    fetchData();
  }, []);

  return updateList;
};

export default useResInfo;
