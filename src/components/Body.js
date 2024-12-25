import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { clearUser, setUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
