import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const {resId}= useParams();
    
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);

  if (resInfo === null) return <h1 className="font-extrabold">{""}Loading.....</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)    

  const categories= resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 // console.log(categories)
    if (!itemCards) return <Shimmer/> ;
 
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* category Accordions */}
        {categories.map((category,index)=>(
         <RestaurantCategory key={category?.card?.card?.title || index}
          data={category?.card?.card}
          showItems={index=== showIndex? true : false}
          setShowIndex={()=> setShowIndex(prevIndex => prevIndex===index? null: index   )}
          />
        ))}
      {/* <h2 className="font-bold py-2 text-lg">Menu</h2>
      <ul>
          {itemCards?.map((item) => (  
          <li key={item.card.info.id}>{item.card.info.name} -{"Rs."} 
          {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
