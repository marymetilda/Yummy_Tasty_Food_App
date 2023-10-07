import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import LoginPopup from "./components/LoginPopup";
import classNames from "classnames";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const [shouldShowPopup, setShouldShowPopup] = useState(true);

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Guest User",
    };
    setUserName(data.name);
  }, []);

  const handleLogin = () => {
    setShouldShowPopup(false);
  };

  const onLoginClick = () => {
    setShouldShowPopup(true);
  };

  const containerStyle = classNames(
    "elative bg-pink-50 sm:bg-yellow-50 md:bg-blue-50 lg:bg-green-50",
    {
      "h-screen overflow-hidden": shouldShowPopup,
    }
  );

  return (
    // provider used for redux
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className={containerStyle}>
          <UserContext.Provider value={{ loggedInUser: userName }}>
            <Header onLoginClick={onLoginClick} />
          </UserContext.Provider>
          <Outlet />
          {shouldShowPopup && <LoginPopup handleLogin={handleLogin} />}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
