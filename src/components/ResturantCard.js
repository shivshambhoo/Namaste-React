import {CDN_URL} from "../utils/constant";
const ResturantCard = (props) => {
  // object disturcturing=
  const { resData } = props;
//   console.log(resData)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
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
      <h4>R{costForTwo}</h4>
      <h4>{sla?.deliveryTime}minutes</h4>
    </div>
  );
};
export default ResturantCard;