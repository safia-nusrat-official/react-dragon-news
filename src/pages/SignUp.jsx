import { Navbar } from "./components/Navbar";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const SignUp = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setshowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { SignUp, UpdateProfile } = useContext(AuthContext)


  const handleFormSubmit = (e) =>{
    e.preventDefault()
    setShowSuccess(false)
    setshowError(false)
    setErrorMsg('')
    const form = new FormData(e.currentTarget)
    const [email, name, password, photoURL] = [form.get("email"), form.get("name"), form.get("password"), form.get("photo")]
    
    console.log(email, password, name, photoURL)
    let passRegex = /^(?=.*[A-Z])(?=.*[&?#$%*!])(?=.*\d).+/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(password.length < 6){
      setshowError(true)
      setErrorMsg("Password must be 6 character long atleast")
      return
    }else if(!passRegex.test(password)){
      setshowError(true)
      setErrorMsg("Password should contain atleast 1 uppercase letter, 1 special Character/symbols, and numbers")
      return
    }else if(!emailRegex.test(email)){
      setshowError(true)
      setErrorMsg("Invalid Email")
      return
    }
    SignUp(email, password)
    .then(result=>{
      console.log(result.user)
      setShowSuccess(true)
      UpdateProfile({name, photoURL})

    }).catch(error=>{
      console.log(error)
      setshowError(true)      
      setErrorMsg(error.message)
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto my-12 p-12 rounded-sm flex items-center flex-col bg-white w-[600px]">
        <h1 className="text-3xl font-bold text-secondary">
          Register your account
        </h1>
        <hr className="my-8 h-[0.75px] w-full text-secondary bg-secondary" />
        <form className="p-4 w-full text-center" onSubmit={handleFormSubmit}>
          <div className="field mb-4 items-start flex flex-col">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-secondary"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
              required
              className="p-4  w-full text-lg bg-[#f3f3f3]"
            />
          </div>
          <div className="field mb-4 items-start flex flex-col">
            <label
              htmlFor="photo"
              className="block mb-2 font-semibold text-secondary"
            >
              Profile Photo
            </label>
            <input
              type="file"
              accept=".png"
              placeholder="Upload image"
              name="photo"
              id="photo"
              required
              className="p-4  w-full text-lg bg-[#f3f3f3]"
            />
          </div>
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
              type={showPassword?"text":"password"}
              placeholder="Enter your password"
              name="password"
              id="password"
              className="p-4 w-full text-lg bg-[#f3f3f3]"
            />
            <button className="absolute top-12 right-5 text-2xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword?
            <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</button>
          </div>
          <button className="
          text-center
          bg-secondary
          rounded-sm
          text-white
          font-semibold
          p-4
          text-xl
          w-full
          my-4">Register</button>

          {showSuccess && <p className="p-4
          font-medium text-green-600">Account Created Successfully</p>}
          {showError && <p className="p-4
          font-medium text-red-600">{errorMsg}</p>}

          <span>Already Have An Account ? <Link className="text-primary font-semibold" to="/login">Login</Link></span>
        </form>
      </div>
    </div>
  );
};
