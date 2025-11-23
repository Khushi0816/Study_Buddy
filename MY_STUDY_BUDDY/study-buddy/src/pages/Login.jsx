import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
  setSuccess(true);             
  setTimeout(() => {
    navigate("/Dashboard");       
  }, 1500);
};
const handleGoogleSignup = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/Dashboard");
    })
    .catch((err) => console.log(err));
};
  return (
     <div className="min-h-screen bg-[#0d0718] text-white flex flex-col items-center justify-center px-6 relative">
          
          <div className="w-full max-w-2xl flex justify-between items-center mt-[-40px]">
            <h1 className="text-3xl font-semibold text-[#EDE9FE] font-poppins">
              LOGIN
            </h1>
    
            {/* logo on the RIGHT */}
            <img
              src="/src/assets/logo/main-logo-rbg.png"
              alt="StudySathi"
              className="w-44"
            />
          </div>
          {/* Card Container */}
          <div className="w-full max-w-xl bg-transparent">
            {/* Email */}
            <label className="text-xl font-nunito">Email</label>
            <input
              type="email"
              className="w-full mb-4 px-4 py-3 rounded-md bg-[#1c0d2a] border border-white/10 focus:outline-none focus:border-[#A855F7]"
            />
    
            {/* Password */}
            <label className="text-xl font-nunito">Password</label>
            <input
              type="password"
              className="w-full mt-4 mb-8 px-4 py-3 rounded-md bg-[#1c0d2a] border border-white/10 focus:outline-none focus:border-[#A855F7]"
            />
            {/* Buttons Row */}
            <div className="flex items-center justify-between w-full">
              <button 
              className="px-12 py-2 bg-[#A855F7] rounded-lg text-lg font-poppins hover:bg-[#9333EA] transition"
              onClick={handleLogin}
              >
                Login
              </button>
    
              <Link
                to="/Signup"
                className="px-12 py-2 bg-[#A855F7] rounded-lg text-lg font-poppins hover:bg-[#9333EA] transition"
              >
                Sign Up
              </Link>
            </div>
            <p className="text-right text-sm mt-2 text-white/70">
              Don't have an account?
            </p>
    
            {/* Divider */}
            <div className="flex items-center gap-4 justify-center mt-2">
              <span className="text-white/60 text-sm">OR</span>
            </div>
    
            {/* Google Login */}
            <div className="flex items-center justify-center gap-3 mt-4 cursor-pointer">
              <img
                src="/src/assets/logo/google.png"
                className="w-7 h-7"
              />
              <p 
              className="text-md text-white font-nunito"
              onClick={handleGoogleSignup}
              >Continue with Google</p>
            </div>
          </div>
          {success && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-[#1C002A] border border-[#A855F7] px-10 py-6 rounded-lg text-center shadow-xl">
          <p className="text-[#D7A4FF] text-xl font-poppins font-semibold">
            Login Successful! Redirecting...
          </p>
        </div>
      </div>
    )}
        </div>
  );
}
