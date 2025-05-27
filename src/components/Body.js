import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";

import { useState } from "react";

const Body = () => {

  const [resData, setResData] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = resData.filter(
              (res) => res.info.avgRating >= 4
            );
            console.log(filterData);
            setResData(filterData)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <ResturantCard resName="Meghna Food" cuisin="Biryani, 
                 Indian, Asian "/>
                 <ResturantCard resName="Kfc," cuisin="Burger, Fast Food, indian"/> */}
        {/* <ResturantCard resData={resObj[0]}/>;
                <ResturantCard resData={resObj[1]}/>;
                <ResturantCard resData={resObj[2]}/>;
                <ResturantCard resData={resObj[3]}/>; */}
        {/*for loop in   */}
        {resData.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
