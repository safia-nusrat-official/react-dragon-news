import { Navbar } from "./components/Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const Login = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setshowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { LogIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const [email, password] = [form.get("email"), form.get("password")];
    setshowError(false);
    setErrorMsg(false);
    setShowSuccess(false);

    LogIn(email, password)
      .then((result) => {
        console.log(result.user);
        setShowSuccess(true);
        setTimeout(navigate("/"), 2000);
      })
      .catch((error) => {
        console.log(error);
        setshowError(true);
        setErrorMsg(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto my-12 p-12 rounded-sm flex items-center flex-col bg-white w-[600px]">
        <h1 className="text-3xl font-bold text-secondary">
          Login to your account
        </h1>
        <hr className="my-8 h-[0.75px] w-full text-secondary bg-secondary" />
        <form className="p-4 w-full text-center" onSubmit={handleFormSubmit}>
          <div className="field mb-4 items-start flex flex-col">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              id="email"
              required
              className="p-4  w-full text-lg bg-[#f3f3f3]"
            />
          </div>
          <div className="field mb-4 items-start flex flex-col relative">
            <label
              htmlFor="password"
              className="block mb-2 font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              id="password"
              className="p-4 w-full text-lg bg-[#f3f3f3]"
            />
            <button
              className="absolute top-12 right-5 text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </button>
          </div>
          <button
            className="
          text-center
          bg-secondary
          rounded-sm
          text-white
          font-semibold
          p-4
          text-xl
          w-full
          my-4"
          >
            Login
          </button>

          {showSuccess && (
            <p
              className="p-4
          font-medium text-green-600"
            >
              Logged in Successfully
            </p>
          )}
          {showError && (
            <p
              className="p-4
          font-medium text-red-600"
            >
              {errorMsg}
            </p>
          )}

          <span>
            Do not Have An Account ?{" "}
            <Link className="text-primary font-semibold" to="/signup">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
