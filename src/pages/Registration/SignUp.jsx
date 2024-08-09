import { useState } from 'react';
import amazonimg from "./../../assets/images/Amazon/Amzon.png";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../firebase/Config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SignUpHandler = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      toast.success('Account created successfully!');
      navigate("/login");
    } catch (error) {
      setError(error.message);
      toast.error("Invalid email or password.");
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer /> {/* Add the ToastContainer here */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-1">
          <img className="w-32 mb-1" src={amazonimg} alt="Amazon Logo" />
        </div>
        <form className="border border-gray-300 p-6 rounded-md bg-white shadow-md" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl font-bold mb-5 text-center">Sign Up</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="exampleInputName" className="font-bold text-sm">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control w-full border-gray-300 p-2 mt-2 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="font-bold text-sm">
              Email (phone for mobile accounts)
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control w-full border-gray-300 p-2 mt-2 rounded-md"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="font-bold text-sm">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                className="form-control w-full border-gray-300 p-2 mt-2 rounded-md pr-10"
                id="exampleInputPassword1"
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
              onClick={SignUpHandler}
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500 w-full py-2 rounded-md mb-2"
              id="sign-in"
            >
              Sign Up
            </button>
          </div>
          <Link to="/login">
            <button
              type="button"
              className="btn bg-gray-300 w-full py-2 rounded-md"
              id="grey-button"
            >
              Already Have an Account?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
