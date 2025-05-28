import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);

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
  };

  if(resData.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = resData.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setResData(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
