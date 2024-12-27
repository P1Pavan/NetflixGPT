import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

useEffect(() => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
      // ...
    } else {
      dispatch(removeUser());
    }
  });
},[])



  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
