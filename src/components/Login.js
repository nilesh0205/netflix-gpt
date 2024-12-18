import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const email = useRef();
  const password = useRef();
  const [isError,setIsError]=useState(null);
  console.log("isError",isError)
  console.log("email,password", email, password);

  const handleSubmit=()=>{
    console.log("yes")
    const showError=validate(email.current.value,password.current.value);
    console.log("showError",showError)
    setIsError(showError); 

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="bgImg"
        />
      </div>
      <form  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit(); 
  }} className="w-3/12 absolute bg-black py-12 px-5 my-36 mx-auto right-0 left-0 flex flex-col gap-6 opacity-80">
        <h4 className="text-white font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h4>
        {isSignIn && (
          <input
            type="text"
            id="name"
            className=" p-2 bg-slate-600 w-full text-white font-medium"
            placeholder="Name"
            required
          />
        )}
        <input
          ref={email}
          type="email"
          id="Email"
          className=" p-2 bg-slate-600 w-full text-white font-medium"
          placeholder="Email"
          required
        />
        <input
        ref={password}
          type="password"
          id="password"
          className=" p-2 bg-slate-600 w-full text-white font-medium"
          placeholder="password"
          required
        />
        {isSignIn && (
          <input
            type="password"
            id="confirmpassword"
            className=" p-2 bg-slate-600 w-full text-white font-medium"
            placeholder="Confirm password"
            required
          /> 
        )}
        <button type="submit" className="bg-red-500 p-2 text-white font-medium w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
       <div>
       {isError && <p className="text-red-600 font-medium">{isError}</p>}
       <p className="text-white">
          {" "}
          {isSignIn ? (
            <>
              New here?{" "}
              <span
                className="text-blue-500 font-bold cursor-pointer hover:text-blue-700"
                onClick={() => setSignIn(false)}
              >
                Sign Up
              </span>{" "}
              to get started!
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-500 font-bold cursor-pointer hover:text-blue-700"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </span>
              .
            </>
          )}
        </p>
       </div>
       
      </form>
    </div>
  );
};

export default Login;
