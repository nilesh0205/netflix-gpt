import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setSignIn] = useState(false);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const [isError, setIsError] = useState(null);

  const handleSubmit = () => {
    const showError = validate(email.current.value, password.current.value);
    setIsError(showError);
    if (showError) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorMessage);
        });
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;  
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
          });
        })
        .then(() => {
          const { uid, email, displayName,photoURL } = auth.currentUser;
          dispatch(
            setUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorMessage);
          // ..
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="bgImg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-3/12 absolute bg-black py-12 px-5 my-36 mx-auto right-0 left-0 flex flex-col gap-6 opacity-80"
      >
        <h4 className="text-white font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h4>
        {!isSignIn && (
          <input
            ref={name}
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
        {!isSignIn && (
          <input
            type="password"
            id="confirmpassword"
            className=" p-2 bg-slate-600 w-full text-white font-medium"
            placeholder="Confirm password"
            required
          />
        )}
        <button
          type="submit"
          className="bg-red-500 p-2 text-white font-medium w-full"
        >
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
