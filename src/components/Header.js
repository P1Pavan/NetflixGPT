import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = getAuth();
  const user = useSelector(store => store?.user);
  
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

  return (
    <div className="  flex  justify-between items-center">
      <div>
      <img
        className="absolute w-72 z-10 ml-36 mt-6"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      </div>
      {user && (
        <div className=" z-10 absolute right-8 top-4 p-6 mr-6 cursor-pointer mt-6 gap-4 flex justify-between">
          <img className="rounded-md h-20 w-20 " src={user?.photoURL} alt="" />
          <button
            onClick={handleSignOut}
            className="font-bold  text-red-500 text-xl hover:text-red-300"
          >
          <p className="text-2xl px-3 bg-white rounded-lg text-red-500 hover:text-red-300">{user?.displayName === null ? "User" : user?.displayName}</p>
            Sign Out
          </button>

        </div>
      )}
    </div>
  );
};

export default Header;
