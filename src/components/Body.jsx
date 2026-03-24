import { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from './Shimmer'
import useResInfo from "../../utils/useResInfo";

const Body = () => {  
  const updateList = useResInfo()
  const [filteredRes, setFilteredRes] = useState([]);
  const [filtered, setFiltered] = useState(true);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    setFilteredRes(updateList)
  }, [updateList])

  const filter = () => {
    if (filtered == true) {
      let filteredList = filteredRes.filter((res) => res.info.avgRating > 4.0);
      setFilteredRes(filteredList);
    } else setFilteredRes(updateList);
  };

  if (updateList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for food or restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const list = updateList.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText);
              });
              setFilteredRes(list);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              filter();
              filtered == true ? setFiltered(false) : setFiltered(true);
            }}
          >
            Top Rated Restaurants ⭐
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((resList) => {
          return <Cards key={resList.info.id} resData={resList} />;
        })}
      </div>
    </div>
  );
};

export default Body;
