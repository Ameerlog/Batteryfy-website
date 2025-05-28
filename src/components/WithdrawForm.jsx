// import { useEffect, useState } from "react";
// import {
//   FaCarBattery,
//   FaIdCard,
//   FaListAlt,
//   FaMinusCircle,
// } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// function WithdrawForm() {
//   const [vehicleIdToWithdraw, setVehicleIdToWithdraw] = useState("");
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const [recentDepositedVehicles, setRecentDepositedVehicles] = useState([
//     {
//       id: "EVB-001",
//       vehicleModel: "Tesla Model 3",
//       chargePercentage: 85,
//       location: "San Francisco, CA",
//       depositTime: "2025-05-22 10:30 AM",
//     },
//     {
//       id: "EVB-002",
//       vehicleModel: "Nissan Leaf",
//       chargePercentage: 60,
//       location: "New York, NY",
//       depositTime: "2025-05-21 03:15 PM",
//     },
//     {
//       id: "EVB-003",
//       vehicleModel: "Chevrolet Bolt EV",
//       chargePercentage: 92,
//       location: "Austin, TX",
//       depositTime: "2025-05-20 09:00 AM",
//     },
//   ]);

//   const handleWithdraw = (e) => {
//     e.preventDefault();

//     if (!vehicleIdToWithdraw.trim()) {
//       toast.error("Please enter a Vehicle ID.");
//       return;
//     }
//     const withdrawalPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const foundVehicleIndex = recentDepositedVehicles.findIndex(
//           (vehicle) => vehicle.id === vehicleIdToWithdraw.trim().toUpperCase()
//         );

//         if (foundVehicleIndex !== -1) {
//           const foundVehicle = recentDepositedVehicles[foundVehicleIndex];
//           const updatedVehicles = recentDepositedVehicles.filter(
//             (vehicle) => vehicle.id !== vehicleIdToWithdraw.trim().toUpperCase()
//           );
//           setRecentDepositedVehicles(updatedVehicles);
//           setVehicleIdToWithdraw("");
//           resolve(
//             `Withdrawal initiated for Vehicle ID: ${foundVehicle.id} (${foundVehicle.vehicleModel}).`
//           );
//         } else {
//           reject(
//             `Vehicle ID: "${vehicleIdToWithdraw}" not found in recent deposits.`
//           );
//         }
//       }, 1500);
//     });

//     toast.promise(withdrawalPromise, {
//       pending: "Processing withdrawal...",
//       success: (message) => message,
//       error: (error) => error,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
//         <div className="text-center">
//           <FaCarBattery className="mx-auto h-16 w-16 text-blue-400 mb-4" />
//           <h2 className="mt-6 text-3xl font-extrabold text-white">
//             Withdraw Your EV Battery Charge
//           </h2>
//           <p className="mt-2 text-sm text-gray-300">
//             Enter the ID of the deposited vehicle to initiate a withdrawal.
//           </p>
//         </div>

//         {/* Withdraw Form */}
//         <form className="mt-8 space-y-6" onSubmit={handleWithdraw}>
//           {/* Vehicle ID Input */}
//           <div>
//             <label
//               htmlFor="vehicle-id"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               <FaIdCard className="inline-block mr-2" /> Vehicle Deposit ID
//             </label>
//             <input
//               type="text"
//               id="vehicle-id"
//               name="vehicle-id"
//               required
//               className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
//                           bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
//                           transition-colors duration-200"
//               placeholder="e.g., EVB-001"
//               value={vehicleIdToWithdraw}
//               onChange={(e) => setVehicleIdToWithdraw(e.target.value)}
//             />
//           </div>

//           {/* Withdraw Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
//                           bg-blue-600 hover:bg-blue-700 text-white
//                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
//                           transition-all duration-200 ease-in-out
//                           transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
//             >
//               <FaMinusCircle className="mr-2 -ml-1 w-5 h-5" /> Withdraw Battery
//             </button>
//           </div>
//         </form>

//         {/* Recent Deposited Vehicles Section */}
//         <div className="mt-8 pt-6 border-t border-gray-700">
//           <h3 className="text-xl font-extrabold text-white mb-4 flex items-center">
//             <FaListAlt className="mr-2 text-gray-400" /> Recent Deposited
//             Vehicles
//           </h3>
//           {recentDepositedVehicles.length > 0 ? (
//             <div className="space-y-4">
//               {recentDepositedVehicles.map((vehicle) => (
//                 <div
//                   key={vehicle.id}
//                   className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4"
//                 >
//                   <div className="flex-shrink-0">
//                     <FaCarBattery className="w-10 h-10 text-blue-400" />
//                   </div>
//                   <div className="flex-grow">
//                     <p>
//                       <span className="font-medium text-gray-300">ID:</span>{" "}
//                       {vehicle.id}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">
//                         Vehicle Model:
//                       </span>{" "}
//                       {vehicle.vehicleModel}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">
//                         Charge Percentage:
//                       </span>{" "}
//                       {vehicle.chargePercentage}%
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">
//                         Location:
//                       </span>{" "}
//                       {vehicle.location}
//                     </p>
//                     <p>
//                       <span className="font-medium text-gray-300">
//                         Deposit Time:
//                       </span>{" "}
//                       {vehicle.depositTime}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-400">No recent deposits found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WithdrawForm;

import { useEffect, useState } from "react";
import {
  FaCarBattery,
  FaIdCard,
  FaListAlt,
  FaMinusCircle,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";
import { auth, db } from "../firebase"; // Import auth and db
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  orderBy, // Added orderBy for consistent display
} from "firebase/firestore"; // Import Firestore functions

function WithdrawForm() {
  const [vehicleIdToWithdraw, setVehicleIdToWithdraw] = useState("");
  // Change state name to better reflect its actual content (Firebase data)
  const [userDepositedBatteries, setUserDepositedBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const { pathname } = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // --- New: Fetch user's deposited batteries ---
  useEffect(() => {
    const fetchUserDeposits = async () => {
      const user = auth.currentUser;
      if (!user) {
        // User not logged in, clear deposits and prompt login
        setUserDepositedBatteries([]);
        toast.info(
          "Please log in to view and withdraw your deposited batteries.",
          {
            toastId: "login-prompt-withdraw",
          }
        );
        navigate("/login", { state: { redirectTo: pathname } });
        return;
      }

      setIsLoading(true);
      try {
        const q = query(
          collection(db, "depositRequests"),
          where("userId", "==", user.uid), // Crucial: Fetch only *this user's* deposits
          orderBy("depositTime", "desc") // Order by deposit time (assuming you have this field)
        );

        const querySnapshot = await getDocs(q);
        const deposits = [];
        querySnapshot.forEach((document) => {
          deposits.push({ id: document.id, ...document.data() });
        });
        setUserDepositedBatteries(deposits);

        if (deposits.length === 0) {
          toast.info("You currently have no active battery deposits.", {
            toastId: "no-deposits",
          });
        }
      } catch (error) {
        console.error("Error fetching user deposits:", error);
        toast.error("Failed to load your deposits. Please try again.", {
          toastId: "fetch-deposits-error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDeposits();
    // Re-run this effect if the user changes (e.g., login/logout) or pathname changes
  }, [auth.currentUser, pathname, navigate]); // Add auth.currentUser to dependency array

  // --- Update handleWithdraw to use Firestore ---
  const handleWithdraw = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      toast.info("Please log in to withdraw a battery.", {
        toastId: "login-prompt-withdraw-action",
      });
      navigate("/login", { state: { redirectTo: pathname } });
      return;
    }

    if (!vehicleIdToWithdraw.trim()) {
      toast.error("Please enter a Vehicle Deposit ID.");
      return;
    }

    const batteryToWithdraw = userDepositedBatteries.find(
      (battery) => battery.id === vehicleIdToWithdraw.trim()
    );

    if (!batteryToWithdraw) {
      toast.error(
        `Vehicle Deposit ID: "${vehicleIdToWithdraw}" not found in your active deposits.`
      );
      return;
    }

    setIsLoading(true); // Set loading state for withdrawal
    try {
      // Delete the document from Firestore
      await toast.promise(
        deleteDoc(doc(db, "depositRequests", batteryToWithdraw.id)),
        {
          pending: `Initiating withdrawal for ID: ${batteryToWithdraw.id}...`,
          success: `Successfully withdrew Battery ID: ${batteryToWithdraw.id}.`,
          error: `Failed to withdraw battery. Please try again.`,
        }
      );

      // Update local state after successful deletion
      setUserDepositedBatteries((prev) =>
        prev.filter((battery) => battery.id !== batteryToWithdraw.id)
      );
      setVehicleIdToWithdraw(""); // Clear input field
      toast.success("Battery withdrawn successfully!"); // Redundant due to toast.promise success, but harmless
    } catch (error) {
      console.error("Error withdrawing battery:", error);
      // toast.promise handles the error message
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800/70 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700 backdrop-blur-sm">
        <div className="text-center">
          <FaCarBattery className="mx-auto h-16 w-16 text-blue-400 mb-4" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Withdraw Your EV Battery Charge
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Enter the ID of your deposited vehicle to initiate a withdrawal.
          </p>
        </div>

        {/* Withdraw Form */}
        <form className="mt-8 space-y-6" onSubmit={handleWithdraw}>
          {/* Vehicle ID Input */}
          <div>
            <label
              htmlFor="vehicle-id"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              <FaIdCard className="inline-block mr-2" /> Vehicle Deposit ID
            </label>
            <input
              type="text"
              id="vehicle-id"
              name="vehicle-id"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400
                          bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                          transition-colors duration-200"
              placeholder="e.g., EVB-001"
              value={vehicleIdToWithdraw}
              onChange={(e) => setVehicleIdToWithdraw(e.target.value)}
              disabled={isLoading} // Disable input during loading
            />
          </div>

          {/* Withdraw Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
                          bg-blue-600 hover:bg-blue-700 text-white
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                          transition-all duration-200 ease-in-out
                          transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  <FaMinusCircle className="mr-2 -ml-1 w-5 h-5" /> Withdraw
                  Battery
                </>
              )}
            </button>
          </div>
        </form>

        {/* Recent Deposited Vehicles Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-extrabold text-white mb-4 flex items-center">
            <FaListAlt className="mr-2 text-gray-400" /> Your Deposited Vehicles
          </h3>
          {isLoading ? (
            <p className="text-gray-400 text-center">
              Loading your deposits...
            </p>
          ) : userDepositedBatteries.length > 0 ? (
            <div className="space-y-4">
              {userDepositedBatteries.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-sm text-gray-200 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <FaCarBattery className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <p>
                      <span className="font-medium text-gray-300">ID:</span>{" "}
                      {vehicle.id}
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">
                        Vehicle Model:
                      </span>{" "}
                      {vehicle.vehicleModel}
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">
                        Charge Percentage:
                      </span>{" "}
                      {vehicle.chargePercentage}%
                    </p>
                    <p>
                      <span className="font-medium text-gray-300">
                        Location:
                      </span>{" "}
                      {vehicle.location}
                    </p>
                    {/* Display deposit time if available in your Firestore documents */}
                    {vehicle.depositTime && (
                      <p>
                        <span className="font-medium text-gray-300">
                          Deposit Time:
                        </span>{" "}
                        {new Date(
                          vehicle.depositTime.seconds * 1000
                        ).toLocaleString()}
                      </p>
                    )}
                  </div>
                  {/* Optional: Add an inline withdraw button for each item */}
                  <button
                    onClick={() => setVehicleIdToWithdraw(vehicle.id)} // Pre-fill ID
                    className="flex-shrink-0 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-md transition-colors duration-200"
                  >
                    Select to Withdraw
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No active deposits found for your account.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WithdrawForm;