import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((state) => state.user.userData); // Access user state
  console.log("🚀 ~ Body ~ user:", user);
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
