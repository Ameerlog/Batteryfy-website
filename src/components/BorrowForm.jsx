// import { useEffect, useState } from "react";
// import {
//   FaBatteryHalf,
//   FaCar,
//   FaChargingStation,
//   FaListAlt,
//   FaMapMarkerAlt,
//   FaSearch,
// } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// function BorrowForm() {
//   const [yourVehicleModel, setYourVehicleModel] = useState("");
//   const [currentChargingLevel, setCurrentChargingLevel] = useState(50);
//   const [yourLocation, setYourLocation] = useState("");

//   const [availableBatteries, setAvailableBatteries] = useState([]);

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

//   const mockAllAvailableBatteries = [
//     {
//       id: "BORROW-001",
//       model: "Tesla Model 3",
//       charge: 95,
//       location: "San Francisco, CA",
//       owner: "Alice",
//     },
//     {
//       id: "BORROW-002",
//       model: "Nissan Leaf",
//       charge: 80,
//       location: "San Francisco, CA",
//       owner: "Bob",
//     },
//     {
//       id: "BORROW-003",
//       model: "Tesla Model 3",
//       charge: 70,
//       location: "New York, NY",
//       owner: "Charlie",
//     },
//     {
//       id: "BORROW-004",
//       model: "Chevrolet Bolt EV",
//       charge: 90,
//       location: "Austin, TX",
//       owner: "David",
//     },
//     {
//       id: "BORROW-005",
//       model: "Hyundai Kona Electric",
//       charge: 88,
//       location: "Seattle, WA",
//       owner: "Eve",
//     },
//     {
//       id: "BORROW-006",
//       model: "Tesla Model 3",
//       charge: 65,
//       location: "San Francisco, CA",
//       owner: "Frank",
//     },
//     {
//       id: "BORROW-007",
//       model: "Porsche Taycan",
//       charge: 98,
//       location: "Los Angeles, CA",
//       owner: "Grace",
//     },
//     {
//       id: "BORROW-008",
//       model: "Nissan Leaf",
//       charge: 75,
//       location: "New York, NY",
//       owner: "Heidi",
//     },
//   ];

//   const handleFindAvailable = (e) => {
//     e.preventDefault();

//     if (!yourVehicleModel || !yourLocation) {
//       toast.error("Please select your vehicle model and location.");
//       setAvailableBatteries([]);
//       return;
//     }
//     const findBatteriesPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const foundBatteries = mockAllAvailableBatteries.filter(
//           (battery) =>
//             battery.model === yourVehicleModel &&
//             battery.location === yourLocation &&
//             battery.charge > currentChargingLevel
//         );

//         if (foundBatteries.length > 0) {
//           setAvailableBatteries(foundBatteries);
//           resolve(
//             `Found ${foundBatteries.length} available batteries for your ${yourVehicleModel}.`
//           );
//         } else {
//           setAvailableBatteries([]);
//           reject("No matching batteries found. Try adjusting your criteria.");
//         }
//       }, 1000);
//     });

//     toast.promise(findBatteriesPromise, {
//       pending: "Searching for available batteries...",
//       success: (message) => message,
//       error: (error) => error,
//     });
//   };

//   const handleBorrowBattery = (batteryId) => {
//     const borrowPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const batteryToBorrow = availableBatteries.find(
//           (b) => b.id === batteryId
//         );
//         if (batteryToBorrow) {
//           setAvailableBatteries((prev) =>
//             prev.filter((b) => b.id !== batteryId)
//           );
//           resolve(
//             `Battery with ID ${batteryId} (${batteryToBorrow.model}) borrowed successfully!`
//           );
//         } else {
//           reject(
//             `Failed to borrow battery with ID ${batteryId}. It might no longer be available.`
//           );
//         }
//       }, 800);
//     });

//     toast.promise(borrowPromise, {
//       pending: `Attempting to borrow battery ${batteryId}...`,
//       success: (message) => message,
//       error: (error) => error,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
//         <div className="text-center">
//           <FaChargingStation className="mx-auto h-16 w-16 text-purple-400 mb-4" />
//           <h2 className="mt-6 text-3xl font-extrabold text-white">
//             Borrow EV Battery Charge
//           </h2>
//           <p className="mt-2 text-sm text-gray-300">
//             Find and borrow charge from other electric vehicles.
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleFindAvailable}>
//           <div>
//             <label
//               htmlFor="your-vehicle-model"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaCar className="inline-block mr-2" /> Your Vehicle Model
//             </label>
//             <select
//               id="your-vehicle-model"
//               name="your-vehicle-model"
//               required
//               className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
//                           bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm
//                           transition-colors duration-200"
//               value={yourVehicleModel}
//               onChange={(e) => setYourVehicleModel(e.target.value)}
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
//               htmlFor="current-charging-level"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaBatteryHalf className="inline-block mr-2" /> Current Charging
//               Level:{" "}
//               <span className="font-bold text-purple-400">
//                 {currentChargingLevel}%
//               </span>
//             </label>
//             <input
//               type="range"
//               id="current-charging-level"
//               name="current-charging-level"
//               min="0"
//               max="100"
//               value={currentChargingLevel}
//               onChange={(e) =>
//                 setCurrentChargingLevel(parseInt(e.target.value))
//               }
//               className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
//                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
//                           [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-lg"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="your-location"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaMapMarkerAlt className="inline-block mr-2" /> Your Location
//             </label>
//             <select
//               id="your-location"
//               name="your-location"
//               required
//               className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
//                           bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm
//                           transition-colors duration-200"
//               value={yourLocation}
//               onChange={(e) => setYourLocation(e.target.value)}
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
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
//                           bg-purple-600 hover:bg-purple-700 text-white
//                           focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
//                           transition-all duration-200 ease-in-out
//                           transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
//             >
//               <FaSearch className="mr-2 -ml-1 w-5 h-5" /> Find Available
//               Batteries
//             </button>
//           </div>
//         </form>

//         {availableBatteries.length > 0 && (
//           <div className="mt-8 pt-6 border-t border-gray-700">
//             <h3 className="text-xl font-extrabold text-white mb-4 flex items-center">
//               <FaListAlt className="mr-2 text-gray-400" /> Available Batteries
//             </h3>
//             <div className="space-y-4">
//               {availableBatteries.map((battery) => (
//                 <div
//                   key={battery.id}
//                   className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4 cursor-pointer hover:bg-gray-600/50 transition-colors duration-200"
//                 >
//                   <div className="flex-shrink-0">
//                     <FaBatteryHalf className="w-10 h-10 text-purple-400" />
//                   </div>
//                   <div className="flex-grow">
//                     <p>
//                       <span className="font-medium text-gray-300">ID:</span>{" "}
//                       {battery.id}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">Model:</span>{" "}
//                       {battery.model}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">Charge:</span>{" "}
//                       {battery.charge}%
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">
//                         Location:
//                       </span>{" "}
//                       {battery.location}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">Owner:</span>{" "}
//                       {battery.owner}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleBorrowBattery(battery.id)}
//                     className="flex-shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-md transition-colors duration-200"
//                   >
//                     Borrow
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BorrowForm;

import { useEffect, useState } from "react";
import {
  FaBatteryHalf,
  FaCar,
  FaChargingStation,
  FaListAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase"; // Import auth and db
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore"; // Import Firestore functions

function BorrowForm() {
  const [yourVehicleModel, setYourVehicleModel] = useState("");
  const [currentChargingLevel, setCurrentChargingLevel] = useState(50);
  const [yourLocation, setYourLocation] = useState("");
  const [availableBatteries, setAvailableBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noBatteriesFound, setNoBatteriesFound] = useState(false); // New state for no batteries message

  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  const handleFindAvailable = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    // --- Authentication Check ---
    if (!user) {
      toast.info("Please log in to search for available batteries.", {
        toastId: "login-prompt-borrow",
      });
      navigate("/login", { state: { redirectTo: pathname } });
      return;
    }

    if (!yourVehicleModel || !yourLocation) {
      toast.error("Please select your vehicle model and location.", {
        toastId: "borrow-form-error",
      });
      setAvailableBatteries([]);
      setNoBatteriesFound(false); // Reset this state
      return;
    }

    setIsLoading(true);
    setNoBatteriesFound(false); // Reset on new search

    try {
      const q = query(
        collection(db, "depositRequests"),
        where("location", "==", yourLocation),
        where("vehicleModel", "==", yourVehicleModel),
        where("chargePercentage", ">", currentChargingLevel) // Find batteries with higher charge
        // You might want to add more filters, e.g., to exclude batteries deposited by the current user
        // where("userId", "!=", user.uid) // Uncomment if you don't want users to borrow from themselves
      );

      const querySnapshot = await toast.promise(getDocs(q), {
        pending: "Searching for available batteries...",
        success: "Search complete!",
        error: "Failed to search for batteries. Please try again.",
      });

      const foundBatteries = [];
      querySnapshot.forEach((doc) => {
        // Exclude batteries deposited by the current user
        if (doc.data().userId !== user.uid) {
          foundBatteries.push({ id: doc.id, ...doc.data() });
        }
      });

      if (foundBatteries.length > 0) {
        setAvailableBatteries(foundBatteries);
        toast.success(
          `Found ${foundBatteries.length} available batteries for your ${yourVehicleModel}.`
        );
      } else {
        setAvailableBatteries([]);
        setNoBatteriesFound(true); // Set to true to display the message
        toast.info("No matching batteries found. Try adjusting your criteria.");
      }
    } catch (error) {
      console.error("Error fetching available batteries:", error);
      setAvailableBatteries([]);
      setNoBatteriesFound(true); // Ensure message is shown on error as well
      // toast.promise handles the error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleBorrowBattery = async (batteryId) => {
    const user = auth.currentUser;
    if (!user) {
      toast.info("Please log in to borrow a battery.", {
        toastId: "login-prompt-borrow-action",
      });
      navigate("/login", { state: { redirectTo: pathname } });
      return;
    }

    try {
      await toast.promise(
        deleteDoc(doc(db, "depositRequests", batteryId)), // Remove the battery from deposits
        {
          pending: `Attempting to borrow battery ${batteryId}...`,
          success: `Battery borrowed successfully!`,
          error: `Failed to borrow battery. It might no longer be available.`,
        }
      );

      // Remove the borrowed battery from the local state
      setAvailableBatteries((prev) => prev.filter((b) => b.id !== batteryId));
      toast.success("Battery borrowed successfully!"); // Redundant due to toast.promise success, but harmless

      // Optionally, you might want to log this borrowing action to a new "borrowRequests" collection
      // For example:
      // await addDoc(collection(db, "borrowRequests"), {
      //   borrowerId: user.uid,
      //   borrowerEmail: user.email,
      //   borrowedBatteryId: batteryId,
      //   borrowTime: serverTimestamp(),
      //   // You might fetch more details about the battery if needed here
      // });
    } catch (error) {
      console.error("Error borrowing battery:", error);
      // toast.promise handles the error
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
        <div className="text-center">
          <FaChargingStation className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Borrow EV Battery Charge
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Find and borrow charge from other electric vehicles.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleFindAvailable}>
          <div>
            <label
              htmlFor="your-vehicle-model"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaCar className="inline-block mr-2" /> Your Vehicle Model
            </label>
            <select
              id="your-vehicle-model"
              name="your-vehicle-model"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
                  bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm
                  transition-colors duration-200"
              value={yourVehicleModel}
              onChange={(e) => setYourVehicleModel(e.target.value)}
              disabled={isLoading}
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
              htmlFor="current-charging-level"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaBatteryHalf className="inline-block mr-2" /> Current Charging
              Level:{" "}
              <span className="font-bold text-purple-400">
                {currentChargingLevel}%
              </span>
            </label>
            <input
              type="range"
              id="current-charging-level"
              name="current-charging-level"
              min="0"
              max="100"
              value={currentChargingLevel}
              onChange={(e) =>
                setCurrentChargingLevel(parseInt(e.target.value))
              }
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
                  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-lg"
              disabled={isLoading}
            />
          </div>
          <div>
            <label
              htmlFor="your-location"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaMapMarkerAlt className="inline-block mr-2" /> Your Location
            </label>
            <select
              id="your-location"
              name="your-location"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
                  bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm
                  transition-colors duration-200"
              value={yourLocation}
              onChange={(e) => setYourLocation(e.target.value)}
              disabled={isLoading}
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
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
                  bg-purple-600 hover:bg-purple-700 text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                  transition-all duration-200 ease-in-out
                  transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                "Searching..."
              ) : (
                <>
                  <FaSearch className="mr-2 -ml-1 w-5 h-5" /> Find Available
                  Batteries
                </>
              )}
            </button>
          </div>
        </form>

        {noBatteriesFound && availableBatteries.length === 0 && !isLoading && (
          <p className="mt-4 text-red-500 text-center">
            No matching batteries found. Try adjusting your criteria.
          </p>
        )}

        {availableBatteries.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-extrabold text-white mb-4 flex items-center">
              <FaListAlt className="mr-2 text-gray-400" /> Available Batteries
            </h3>
            <div className="space-y-4">
              {availableBatteries.map((battery) => (
                <div
                  key={battery.id}
                  className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4 cursor-pointer hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <FaBatteryHalf className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="flex-grow">
                    <p>
                      <span className="font-medium text-gray-300">Model:</span>{" "}
                      {battery.vehicleModel}
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">Charge:</span>{" "}
                      {battery.chargePercentage}%
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">
                        Location:
                      </span>{" "}
                      {battery.location}
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">
                        Deposited by:
                      </span>{" "}
                      {battery.userEmail || "N/A"}{" "}
                      {/* Display user email if available */}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBorrowBattery(battery.id)}
                    className="flex-shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-md transition-colors duration-200"
                  >
                    Borrow
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BorrowForm;
