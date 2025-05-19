import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const sendOtp = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => sendOtp(),
        }
      );
    }

    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmation(result);
      alert("OTP sent!");
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmation.confirm(otp);
      alert("Login success!");

      // 👇 Redirect to intended route or fallback to homepage
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo);
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Login via Phone</h2>
      <input
        type="tel"
        placeholder="+91..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border border-gray-700 rounded mb-4 text-black"
      />
      <button
        onClick={sendOtp}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Send OTP
      </button>

      {confirmation && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border border-gray-700 rounded mb-4 text-black"
          />
          <button
            onClick={verifyOtp}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
