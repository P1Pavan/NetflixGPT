import React, { useRef, useState } from "react";
import Header from "./Header";
import Checkvalidate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Store/userSlice";
import { PHOTO_URL } from "../utils/Constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMSG, setErrorMSG] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const Message = Checkvalidate(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMSG(Message);
    if (Message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL:PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth?.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log(error?.message);

              // An error occurred
              // ...
            });

          console.log(user);
          
          console.log(auth);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMSG(errorCode, " - ", errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BZOF3Q_7W2eWVbzKRnl5dJa2j0G8xsw5adjy__VZR4Qqmk7fNHVEmkCoux47oMGyOBc&usqp=CAU",
          })
            .then(() => {
              navigate("/browse");
              console.log(user);

              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log(error?.message);

              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMSG(errorCode, " - ", errorMessage);
        });
    }
  };

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className="w-screen h-screen "
          style={{ filter: "grayscale(40%) brightness(0.6)" }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="Background photo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ width: "38%" }}
        className="absolute bg-opacity-65  bg-black text-white right-0 rounded-lg left-0 mx-auto  h-3/4  bottom-0  py-12  px-16"
      >
        <h3 className="text-white mb-6 text-2xl font-bold">
          {isSignInForm ? "Sign In " : "Sign Up "}
        </h3>
        {isSignInForm ? null : (
          <input
            required
            ref={name}
            className="border-2  bg-transparent rounded-lg p-3 w-full mb-6 text-sm "
            type="name"
            placeholder="Name"
          />
        )}
        <input
          required
          ref={email}
          className="border-2  bg-transparent rounded-lg p-3 w-full text-sm "
          type="email"
          placeholder="Email Id"
        />
        <input
          required
          ref={password}
          className="border-2  bg-transparent border-gray-400 rounded-lg p-3 w-full mt-6 mb-5 text-sm"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg">{errorMSG}</p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md mt-5 text-base w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In " : "Sign Up "}
        </button>

        <p className="text-center mt-2">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 text-center  mt-3 mb-3 text-small "
          >
            Forgot Password?
          </a>
        </p>
        {/* <div className="flex text-white mt-5 text-base">
          <input
            className="rounded-md w-6 mr-4 cursor-pointer mb-5 h-6"
            type="checkbox"
          />
          <h3>Remember me</h3>
        </div> */}
        <h3 className="text-base text-center mb-5 mt-3">
          {isSignInForm ? "New to Netflix?" : "Already a Registered User?  "}{" "}
          <a
            href="#"
            className="cursor-pointer font-bold"
            onClick={ToggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In "}
          </a>
        </h3>
        {/* <p className="text-gray-500 text-base ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="cursor-pointer text-blue-700">
            Learn more.
          </a>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
