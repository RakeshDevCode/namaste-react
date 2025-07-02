import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    
    const handleClick=()=>{
        setShowIndex();

    }
    return (
    <div>
      {/* Header */}
      <div className="text-center mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {" "}
            {data.title}({data.itemCards.length})
          </span>
          <span className="font-extrabold ml-6 ">🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
