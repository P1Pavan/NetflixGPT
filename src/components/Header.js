import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/Store/userSlice";
import { Netflix_LOGO } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = useSelector((store) => store?.user);

  console.log(user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("*");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 w-screen flex justify-between items-center bg-gradient-to-b from-black "> 
      <div>
        <img
          className=" w-56  ml-36 mt-6"
          src= {Netflix_LOGO}
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className="opacity-80  right-8 top-4 p-6 mr-6 cursor-pointer mt-6 gap-4 flex justify-between  ">
          <img className="rounded-md h-12 w-12 " src={user?.photoURL} alt="" />
          <button
            onClick={handleSignOut}
            className="font-bold  text-red-500 text-base hover:text-red-300"
          >
            <p className="text-base px-3 bg-white rounded-lg text-red-500 hover:text-red-300">
              {user?.displayName === null ? "User" : user?.displayName}
            </p>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
