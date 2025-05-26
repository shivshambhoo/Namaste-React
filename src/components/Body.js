import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">serach</div>
      <div className="res-container">
        {/* <ResturantCard resName="Meghna Food" cuisin="Biryani, North 
                 Indian, Asian "/>
                 <ResturantCard resName="Kfc," cuisin="Burger, Fast Food, indian"/> */}
        {/* <ResturantCard resData={resObj[0]}/>;
                <ResturantCard resData={resObj[1]}/>;
                <ResturantCard resData={resObj[2]}/>;
                <ResturantCard resData={resObj[3]}/>; */}
        {/*for loop in   */}
        
        {resObj.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;