// import { useEffect, useState } from "react";
// import {
//   FaBatteryFull,
//   FaCar,
//   FaCheckCircle,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// function DepositForm() {
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [chargePercentage, setChargePercentage] = useState(50);
//   const [location, setLocation] = useState("");
//   const [depositedData, setDepositedData] = useState(null);

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const evModels = [
//     "Tata Motors",
//     "Mahindra (Mahindra Electric)",
//     "MG Motor India",
//     "Hyundai Motor India",
//     "BYD (Build Your Dreams)",
//     "Kia",
//     "Maruti Suzuki",
//     "Audi",
//     "Skoda",
//     "Toyota",
//     "Ford",
//     "Nissan",
//     "Ather Energy",
//     "Ola Electric",
//     "TVS Motors",
//     "Hero Electric",
//     "Bajaj Auto",
//     "BMW",
//     "Rolls-Royce",
//     "Mercedes-Benz",
//     "Porsche",
//     "Volvo",
//     "Mini",
//     "Lotus",
//     "VinFast",
//     "Revolt Motors",
//     "Tesla",
//     "Volkswagen (VW)",
//     "General Motors (GM)",
//   ];

//   const locations = [
//     "Bengaluru",
//     "Hubli",
//     "Pune",
//     "Mumbai",
//     "Delhi",
//     "Chennai",
//     "Kolkata",
//     "Hyderabad",
//     "Ahmedabad",
//     "Surat",
//     "Jaipur",
//     "Lucknow",
//     "Chandigarh",
//     "Kochi",
//     "Thiruvananthapuram",
//     "Coimbatore",
//     "Indore",
//   ];

//   const handleDeposit = (e) => {
//     e.preventDefault();

//     if (!vehicleModel || !location || chargePercentage === 0) {
//       toast.error("Please fill out all deposit details accurately.");
//       return;
//     }

//     const depositPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const newDeposit = {
//           vehicleModel,
//           chargePercentage,
//           location,
//           depositTime: new Date().toLocaleString(),
//           // In a real app, you'd get an ID from the backend
//           id: `DEP-${Date.now().toString().slice(-5)}`,
//         };

//         const success = Math.random() > 0.1;

//         if (success) {
//           setDepositedData(newDeposit);
//           setVehicleModel("");
//           setChargePercentage(50);
//           setLocation("");
//           resolve(
//             `Successfully deposited ${newDeposit.chargePercentage}% charge from your ${newDeposit.vehicleModel}.`
//           );
//         } else {
//           reject("Failed to deposit battery charge. Please try again.");
//         }
//       }, 1500);
//     });

//     toast.promise(depositPromise, {
//       pending: "Depositing your battery charge...",
//       success: (message) => message,
//       error: (error) => error,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
//         <div className="text-center">
//           <FaBatteryFull className="mx-auto h-16 w-16 text-green-400 mb-4" />
//           <h2 className="mt-6 text-3xl font-extrabold text-white">
//             Deposit Your EV Battery
//           </h2>
//           <p className="mt-2 text-sm text-gray-300">
//             Securely deposit your vehicle's excess charge to the grid.
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleDeposit}>
//           <div>
//             <label
//               htmlFor="vehicle-model"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaCar className="inline-block mr-2" /> Vehicle Model
//             </label>
//             <select
//               id="vehicle-model"
//               name="vehicle-model"
//               required
//               className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
//                           bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
//                           transition-colors duration-200"
//               value={vehicleModel}
//               onChange={(e) => setVehicleModel(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select your EV model
//               </option>
//               {evModels.map((model, index) => (
//                 <option key={index} value={model}>
//                   {model}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label
//               htmlFor="charge-percentage"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaBatteryFull className="inline-block mr-2" /> Charge Percentage:{" "}
//               <span className="font-bold text-green-400">
//                 {chargePercentage}%
//               </span>
//             </label>
//             <input
//               type="range"
//               id="charge-percentage"
//               name="charge-percentage"
//               min="0"
//               max="100"
//               value={chargePercentage}
//               onChange={(e) => setChargePercentage(parseInt(e.target.value))}
//               className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
//                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
//                           [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-lg"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="location"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaMapMarkerAlt className="inline-block mr-2" /> Location
//             </label>
//             <select
//               id="location"
//               name="location"
//               required
//               className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
//                           bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
//                           transition-colors duration-200"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select your location
//               </option>
//               {locations.map((loc, index) => (
//                 <option key={index} value={loc}>
//                   {loc}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Deposit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
//                           bg-green-600 hover:bg-green-700 text-white
//                           focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
//                           transition-all duration-200 ease-in-out
//                           transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
//             >
//               <FaCheckCircle className="mr-2 -ml-1 w-5 h-5" /> Deposit Battery
//             </button>
//           </div>
//         </form>
//         {depositedData && (
//           <div className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4">
//             <div className="flex-shrink-0">
//               <FaBatteryFull className="w-10 h-10 text-green-400" />
//             </div>
//             <div className="flex-grow">
//               <h3 className="font-semibold text-white mb-1">
//                 Last Deposited Details:
//               </h3>
//               <p>
//                 <span className="font-medium text-gray-300">
//                   Vehicle Model:
//                 </span>{" "}
//                 {depositedData.vehicleModel}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-300">
//                   Charge Percentage:
//                 </span>{" "}
//                 {depositedData.chargePercentage}%
//               </p>
//               <p>
//                 <span className="font-medium text-gray-300">Location:</span>{" "}
//                 {depositedData.location}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-300">Deposit Time:</span>{" "}
//                 {depositedData.depositTime}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DepositForm;

import { useEffect, useState } from "react";
import {
  FaBatteryFull,
  FaCar,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";
import { auth, db } from "../firebase"; // Import auth and db
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions

function DepositForm() {
  const [vehicleModel, setVehicleModel] = useState("");
  const [chargePercentage, setChargePercentage] = useState(50);
  const [location, setLocation] = useState("");
  const [depositedData, setDepositedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state for the form submission

  const { pathname } = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const evModels = [
    "Tata Motors",
    "Mahindra (Mahindra Electric)",
    "MG Motor India",
    "Hyundai Motor India",
    "BYD (Build Your Dreams)",
    "Kia",
    "Maruti Suzuki",
    "Audi",
    "Skoda",
    "Toyota",
    "Ford",
    "Nissan",
    "Ather Energy",
    "Ola Electric",
    "TVS Motors",
    "Hero Electric",
    "Bajaj Auto",
    "BMW",
    "Rolls-Royce",
    "Mercedes-Benz",
    "Porsche",
    "Volvo",
    "Mini",
    "Lotus",
    "VinFast",
    "Revolt Motors",
    "Tesla",
    "Volkswagen (VW)",
    "General Motors (GM)",
  ];

  const locations = [
    "Bengaluru",
    "Hubli",
    "Pune",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Kochi",
    "Thiruvananthapuram",
    "Coimbatore",
    "Indore",
  ];

  const handleDeposit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser; // Get the current authenticated user

    // --- Authentication Check ---
    if (!user) {
      toast.info("Please log in to deposit battery charge.", {
        toastId: "login-prompt-deposit",
      });
      // Redirect to login page, passing the current path to return after login
      navigate("/login", { state: { redirectTo: pathname } });
      return;
    }

    if (!vehicleModel || !location || chargePercentage === 0) {
      toast.error("Please fill out all deposit details accurately.", {
        toastId: "deposit-form-error",
      });
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      // Use toast.promise for integrated loading, success, and error feedback
      await toast.promise(
        addDoc(collection(db, "depositRequests"), {
          // 'depositRequests' is the new collection name
          userId: user.uid, // Store the authenticated user's ID
          userEmail: user.email, // Store user's email for easy reference
          vehicleModel,
          chargePercentage,
          location,
          depositTime: serverTimestamp(), // Use server timestamp for accuracy
        }),
        {
          pending: "Depositing your battery charge...",
          success: `Successfully deposited ${chargePercentage}% charge from your ${vehicleModel}!`,
          error: "Failed to deposit battery charge. Please try again.",
        }
      );

      // Reset form on successful submission
      setDepositedData({
        vehicleModel,
        chargePercentage,
        location,
        depositTime: new Date().toLocaleString(), // Use client-side for display if needed, but Firestore has server timestamp
      });
      setVehicleModel("");
      setChargePercentage(50);
      setLocation("");
    } catch (error) {
      console.error("Error depositing battery charge to Firestore:", error);
      // toast.promise handles the error message, no need for explicit toast.error here
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
        <div className="text-center">
          <FaBatteryFull className="mx-auto h-16 w-16 text-green-400 mb-4" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Deposit Your EV Battery
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Securely deposit your vehicle's excess charge to the grid.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleDeposit}>
          <div>
            <label
              htmlFor="vehicle-model"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaCar className="inline-block mr-2" /> Vehicle Model
            </label>
            <select
              id="vehicle-model"
              name="vehicle-model"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
                  bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                  transition-colors duration-200"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              disabled={isLoading} // Disable while submitting
            >
              <option value="" disabled>
                Select your EV model
              </option>
              {evModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="charge-percentage"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaBatteryFull className="inline-block mr-2" /> Charge Percentage:{" "}
              <span className="font-bold text-green-400">
                {chargePercentage}%
              </span>
            </label>
            <input
              type="range"
              id="charge-percentage"
              name="charge-percentage"
              min="0"
              max="100"
              value={chargePercentage}
              onChange={(e) => setChargePercentage(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
                  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-lg"
              disabled={isLoading} // Disable while submitting
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaMapMarkerAlt className="inline-block mr-2" /> Location
            </label>
            <select
              id="location"
              name="location"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
                  bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                  transition-colors duration-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isLoading} // Disable while submitting
            >
              <option value="" disabled>
                Select your location
              </option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Deposit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
                  bg-green-600 hover:bg-green-700 text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                  transition-all duration-200 ease-in-out
                  transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                "Depositing..."
              ) : (
                <>
                  <FaCheckCircle className="mr-2 -ml-1 w-5 h-5" /> Deposit
                  Battery
                </>
              )}
            </button>
          </div>
        </form>
        {depositedData && (
          <div className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaBatteryFull className="w-10 h-10 text-green-400" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-white mb-1">
                Last Deposited Details:
              </h3>
              <p>
                <span className="font-medium text-gray-300">
                  Vehicle Model:
                </span>{" "}
                {depositedData.vehicleModel}
              </p>
              <p>
                <span className="font-medium text-gray-300">
                  Charge Percentage:
                </span>{" "}
                {depositedData.chargePercentage}%
              </p>
              <p>
                <span className="font-medium text-gray-300">Location:</span>{" "}
                {depositedData.location}
              </p>
              <p>
                <span className="font-medium text-gray-300">Deposit Time:</span>{" "}
                {depositedData.depositTime}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepositForm;
