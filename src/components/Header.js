import { useState, useContext } from "react";
// import logo from "../../assets/FinalBg.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg mb-2 px-4 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container w-32">
        <img className="w-32 h-auto rounded-full" src='https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png' alt="logo" />
      </div>
      <div className="nav-items flex">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold pl-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
