import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    if (!indianPhoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    console.log("Phone number submitted:", phoneNumber);
    navigate("/bank-system");
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Get Started
          </h1>
          <p className="text-white/90 text-lg drop-shadow-sm">
            Enter your phone number or use alternative method to get started.
          </p>
        </div>

        {/* Phone Number Section */}
        <div className="mb-6">
          <label className="block text-white/90 text-sm font-medium mb-3 drop-shadow-sm">
            Phone Number
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhoneAlt className="h-4 w-4 text-white/60" />
            </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 outline-none transition-all duration-300 text-white placeholder-white/50 shadow-inner"
            />
          </div>
        </div>
        <div className="relative mb-6">
          <div className="flex items-center">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="px-3 text-white/90 text-sm">or</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>
        </div>
        <div className="mb-8">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-white/30 focus:border-white/40 outline-none shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="h-7 w-7 mr-3 bg-white rounded-full flex items-center justify-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <span className="font-medium text-white drop-shadow-sm">
              Continue with Google
            </span>
          </button>
        </div>
        <button
          onClick={handlePhoneSubmit}
          className="w-full bg-gradient-to-r from-green-500/80 to-green-600/80 backdrop-blur-sm hover:from-green-500 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent outline-none shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] border border-green-400/30 z-30"
        >
          Next
        </button>
        <div className="mt-8 text-center">
          <p className="text-sm text-white/70 drop-shadow-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
