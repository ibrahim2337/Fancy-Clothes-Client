/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const { profileUpdate, logInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    logInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "student",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setError("");
            }
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const profile = {
        displayName: data.name,
        email: data.email,
        photoURL: data.photo,
      };

      profileUpdate(profile)
        .then(() => {
          const saveUser = {
            displayName: data.name,
            email: data.email,
            photoURL: data.photo,
            role: "student",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <div className=" login-item hero min-h-screen bg-base-200">
        <div className="hero-content border  flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full items-center max-w-sm shadow-2xl bg-base-100">
            <div>
              <div className="p-8 space-y-3 rounded-xl items-center   text-neutral">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm"
                        required
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        name="name"
                        placeholder="Name"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="email"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                      {errors.email && (
                        <span className="text-red-600">Email is required</span>
                      )}
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern:
                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        placeholder="password"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">Password is required</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">
                          Password must be 6 characters
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-red-600">
                          Password must be less than 20 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          Password must have one Uppercase one lower case, one
                          number and one special character.
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        {...register("confirmPassword", {
                          required: true,
                          validate: (value) => value === watch("password"),
                        })}
                        placeholder="confirm password"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                      {errors.confirmPassword?.type === "required" && (
                        <p className="text-red-600">
                          Confirm Password is required
                        </p>
                      )}
                      {errors.confirmPassword?.type === "validate" && (
                        <p className="text-red-600">Passwords do not match</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="photo" className="block mb-2 text-sm">
                        Photo Link
                      </label>
                      <input
                        type="text"
                        {...register("photo", { required: true })}
                        placeholder="Photo URL"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                      {errors.photo && (
                        <span className="text-red-600">
                          Photo URL is required
                        </span>
                      )}
                    </div>
                  </div>

                  <small>
                    <p className="text-error -mt-2">
                      {error.split("Firebase:")}
                    </p>
                  </small>
                  <button
                   
                    type="submit"
                    className="block w-full p-3 text-center px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
                  >
                    REGISTER NOW
                  </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  <p className="px-3 text-sm">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
                  <button  onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
                <p className="text-xs text-center sm:px-6">
                  Do not have an account? <br />
                  <Link
                    rel="noopener noreferrer"
                    to="/login"
                    className="underline hover:text-primary"
                  >
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
