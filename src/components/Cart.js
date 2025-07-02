import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // const store= useSelector((store)=>store);
  // const cartItems= store.cart.items;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log({cartItems});

  return (
    <div className="  text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="font-bold p-2 m-2 bg-black text-white rounded-lg hover:cursor-pointer"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty. add items to cart </h1>}
        <ItemList items={cartItems} />
        {cartItems.quantity && <p>Quantity: {CartItems.quantity}</p>}

      </div>
    </div>
  );
};

export default Cart;
