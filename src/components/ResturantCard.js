import {CDN_URL} from "../utils/constant";
const ResturantCard = (props) => {
  // object disturcturing=
  const { resData } = props;

  // also write like this const ResturantCard=({resName, cuisin})

  // console.log(props)   // props is object
  // optimize using distructuring
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
           CDN_URL+
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>R{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};
export default ResturantCard;