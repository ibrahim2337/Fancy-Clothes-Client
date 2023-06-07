/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import './registerPage.css'

const RegisterPage = () => {
  const { signUp, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password doesn't match");
      return;
    }
    setError("");

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUserProfile(name, photo);
        navigate("/login");
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    profileUpdate(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="image px-5 pt-28 pb-8">
      <div className="container mx-auto w-11/12 md:w-7/12 lg:w-5/12 rounded-md sm:p-10 text-neutral bg-gray-300">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm" required>
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md border-gray-600 text-neutral"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">
                Photo Link
              </label>
              <input
                type="photo"
                name="photo"
                id="photo"
                placeholder="Photo Link"
                className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com  "
                className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="confirm" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                required
              />
            </div>
          </div>
          <small>
            <p className="text-error mt-2"></p>
          </small>
          <div className="space-y-2 mt-0">
            <div className="flex items-center -mt-8">
              <input
                type="checkbox"
                onClick={handleAccepted}
                className="checkbox checkbox-neutral rounded cursor-pointer h-4 w-4 mr-2"
              />
              <span className="label-text pb-px">
                Accept our{" "}
                <Link className="text-primary hover:underline">
                  terms and conditions
                </Link>
              </span>
            </div>

            <div className="-mt-8">
              <button
                disabled={!accepted}
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md text-white border-md rounded-b-md bg-gradient-to-r from-gray-600 to-gray-400 bg-neutral  disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-neutral">
              Already have an account? <br />
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="underline text-sm text-blue-700"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
