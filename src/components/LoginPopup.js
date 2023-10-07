import { useContext } from "react";

import UserContext from "../utils/UserContext";

const LoginPopup = ({ handleLogin }) => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="backdrop-blur-xl flex flex-col justify-end absolute inset-0 z-50 h-full w-full">
      <div className="py-8 w-80 bg-pink-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-3xl">
        <div className="text-center px-6">
          <p className="text-5xl font-serif text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-950 font-semibold">
            LOGIN
          </p>
          <div className="m-4 py-4 flex flex-col items-center">
            <p className="pr-2 py-4 text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-950">
              Enter UserName
            </p>
            <input
              value={loggedInUser}
              onChange={handleChange}
              className="border border-pink-200 sm:border-yellow-200 md:border-blue-200 lg:border-green-200 p-2 outline-none text-lg text-green-950 text-center"
            />
          </div>
          <button
            className="bg-pink-300 sm:bg-yellow-300 md:bg-blue-300 lg:bg-green-300 py-2 px-4 rounded-lg text-xl font-serif font-semibold text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-950 w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
