import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

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
        
          style={{width:'30%'}}
          className="absolute bg-opacity-65  bg-black text-white right-0 rounded-lg left-0 mx-auto    bottom-0  py-14  px-20"
          
        >
          <h3 className="text-white mb-9 text-4xl font-bold">{isSignInForm ? 'Sign In ' : 'Sign Up ' }</h3>
          {isSignInForm ? null : <input
            className="border-2  bg-transparent rounded-lg p-5 w-full mb-4 text-xl " 
            type="email"
            placeholder="Name"
          />}
          <input
            className="border-2  bg-transparent rounded-lg p-5 w-full text-xl " 
            type="email"
            placeholder="Email or mobile number"
          />
          <input
            className="border-2  bg-transparent border-gray-400 rounded-lg p-5 w-full mt-4 text-xl"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md mt-4 text-xl w-full">
          {isSignInForm ? 'Sign In ' : 'Sign Up ' }
          </button>
          
          <p className="text-center mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 text-center  mt-2 text-xl "
            >
              Forgot Password?
            </a>
          </p>
          <div className="flex text-white mt-5 text-xl">
            <input className="rounded-md w-6 mr-4 cursor-pointer mb-5 h-6" type="checkbox" />
            <h3>Remember me</h3>
          </div>
          <h3 className="text-xl mb-6">
          {isSignInForm ? 'New to Netflix?' : 'Already a Registered User - ' }{" "}
            <a href="#" className="cursor-pointer font-bold" onClick={ToggleSignInForm} >
              {isSignInForm ? 'Sign up now.' : 'Sign In ' }
            </a>
          </h3>
          <h4 className="text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="cursor-pointer text-blue-700">
              Learn more.
            </a>
          </h4>
        </form>
      </div>
   
  );
};

export default Login;
