import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filterResturant, setFilterResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5908&lng=85.1348&collection=83"
    );
    const json = await response.json();
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // its also call conditional randring
  //   if (resData.length === 0) {
  //     return <Shimmer />;
  //   }

  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterData = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResturant(filterData);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = resData.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilterResturant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterResturant.map((restaurant) => (
          <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
