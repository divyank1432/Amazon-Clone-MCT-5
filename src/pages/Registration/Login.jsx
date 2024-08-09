import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../firebase/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import amazonImg from "./../../assets/images/Amazon/Amzon.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setIsLoggedIn(true);
      navigate("/");
      toast.success("Successfully logged in!");
      console.log("User logged in:", user);
    } catch (error) {
      setError("Invalid email or password.");
      toast.error("Invalid email or password.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      {isLoggedIn ? (
        <div className="text-center"></div>
      ) : (
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-4">
            <img className="w-32 mb-1" src={amazonImg} alt="Amazon Logo" />
          </div>
          <div className="border border-gray-300 p-6 rounded-md bg-white shadow-md">
            <h2 className="text-3xl font-bold mb-5 text-center">Sign In</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="font-bold text-sm">
                Email (phone for mobile accounts)
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control w-full border-gray-300 p-2 mt-2 rounded-md"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  className="form-control w-full border-gray-300 p-2 mt-2 rounded-md pr-10"
                  placeholder="Password"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="mb-4">
              <button
                onClick={loginHandler}
                className="bg-yellow-500 text-black w-full py-2 rounded-md mb-2"
              >
                Sign In
              </button>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input ml-1 mt-2"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ml-6 text-sm"
                  htmlFor="exampleCheck1"
                >
                  Keep me signed in.{" "}
                  <a href="" className="text-blue-500">
                    Details
                  </a>
                </label>
              </div>
            </div>
            <div className="mb-4 text-center">
              <Link to="/forgerpassotp" className="text-blue-500">
                Forgot your password?
              </Link>
            </div>
            <Link to="/signup">
              <button
                type="button"
                className="btn bg-gray-300 w-full py-2 rounded-md"
                id="grey-button"
              >
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
