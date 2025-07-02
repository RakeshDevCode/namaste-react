import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch()

  const handleAddItem=(item)=>{
        //dispatch an action
    dispatch(addItem(item))
  }    
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="shadow-lg m-2 p-2 border-b-2 border-gray-900 flex justify-between"
        >
          <div className="w-3/4 ">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="font-bold ">
                {"- ₹"}
                {item.card.info.price ? Math.floor(item.card.info.price / 100): item.card.info.DefaultPrice}
              </span>  

              <p className="text-xs"> {item.card.info.description} </p>
          </div>
          <div className="w-1/4 p-4">
          <div className="absolute">
            <button className="py-2 mx-2 rounded-lg bg-black text-white shadow-lg hover:cursor-pointer"
            onClick={()=>handleAddItem(item)}
            >
              Add +
            </button>
          </div>
            <img
              src={MENU_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="rounded-lg size-[130px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
