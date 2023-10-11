import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ({ onLoginClick }) => {
  const [btnName, setBtnName] = useState("Logout");
  const [shouldShowList, setShouldShowList] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const handleButtonClick = () => {
    setShouldShowList(!shouldShowList);
  };

  const handleClick = () => {
    setShouldShowList(false);
  };

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-lg mb-2 px-4 bg-pink-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100">
      <div className="ml-4 sm:ml-8 md:ml-10 lg:ml-12 w-32">
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto rounded-full"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png"
          alt="logo"
        />
      </div>
      <div className="nav-items flex">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4 hidden lg:flex">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 hidden lg:flex">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hidden lg:flex">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hidden lg:flex">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hidden lg:flex">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="login hidden lg:flex"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              onLoginClick();
            }}
          >
            {btnName}
          </button>
          <li className="font-bold pl-4 hidden lg:flex">{loggedInUser}</li>
          <div className="relative flex flex-col lg:hidden bg-pink-200 sm:bg-yellow-200 md:bg-blue-200 outline-none p-4 md:pr-6 rounded-lg shadow-md">
            <button
              onClick={handleButtonClick}
              className="w-full flex justify-between"
            >
              <span className="font-bold hidden sm:flex">{loggedInUser}</span>
              <span>⬇️</span>
            </button>
            {shouldShowList && (
              <div className="absolute z-30 bg-pink-200 sm:bg-yellow-200 md:bg-blue-200 top-12 left-1/2 -translate-x-1/2 w-[200%] sm:w-full flex flex-col items-start px-4 pb-4">
                <button onClick={handleClick} className="font-bold">
                  Online: {onlineStatus ? "🟢" : "🔴"}
                </button>
                <button onClick={handleClick} className="font-bold">
                  <Link to="/">Home</Link>
                </button>
                <button onClick={handleClick} className="font-bold">
                  <Link to="/about">About Us</Link>
                </button>
                <button onClick={handleClick} className="font-bold">
                  <Link to="/contact">Contact Us</Link>
                </button>
                <button onClick={handleClick} className="font-bold">
                  <Link to="/grocery">Grocery</Link>
                </button>
                <button
                  className="font-bold"
                  onClick={() => {
                    btnName === setBtnName("Logout");
                    onLoginClick();
                    setShouldShowList(false);
                  }}
                >
                  <Link to="/">{btnName}</Link>
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
