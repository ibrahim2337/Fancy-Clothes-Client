/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./LoginPage.css";

const LoginPage = () => {
  const { signIn, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    logInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="image px-5 pt-28 pb-8">
      <div className="image container mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-300">
        <h1 className="text-2xl font-bold text-center">
          Login to your account
        </h1>
        <form
          onSubmit={handleSignIn}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label className="block text-black">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-md text-black "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-black "
            />
            <div className="flex justify-end text-xs">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <small>
            <p className="text-error -mt-2">{error.split("Firebase:")}</p>
          </small>
          <button className="block w-full p-3 text-center rounded-md text-white bg-gradient-to-r from-gray-600 to-gray-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            className="py-2 px-4 flex items-center justify-center gap-3 bg-slate-200 rounded-md w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <span className="font-bold">Log in with Google</span>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-black">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline hover:text-primary text-sm text-blue-700"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
