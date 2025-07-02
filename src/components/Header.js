import { LOGO_URL } from "../utils/constants";
import { useState, useEffect ,useContext} from "react";
import { Link } from "react-router"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  const onlineStatus= useOnlineStatus();
  const {loggedInUser}= useContext(UserContext)
  //console.log({loggedInUser});
  //subscribing to the store using Selector

  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
  
  useEffect(() => {
    //console.log("useEffect");
  }, [btnNameReact]);
  return (    
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-300 lg:bg-green-300">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus?"✅":"❌" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to= "/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart({cartItems.length}{" "}items)</Link>
            </li>
          <button
            className="Login cursor-pointer"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          > {btnNameReact}
          </button>
        <li className="px-4 fond-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
