import { useContext } from "react";
import CDN_URL from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
//import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg size-[450px] bg-gray-50 hover:bg-gray-300">
      <img
        className="rounded-lg size-[250px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-wrap">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
      <h4>User: {loggedInUser}</h4>

    </div>
  );
};

//Higher order Component

//input Restaurant card => Restaurant card Rating

export const withAvgRatingLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-4 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
