import { useEffect, useState } from "react";
import {
  FaCarBattery,
  FaIdCard,
  FaListAlt,
  FaMinusCircle,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function WithdrawForm() {
  const [vehicleIdToWithdraw, setVehicleIdToWithdraw] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [recentDepositedVehicles, setRecentDepositedVehicles] = useState([
    {
      id: "EVB-001",
      vehicleModel: "Tesla Model 3",
      chargePercentage: 85,
      location: "San Francisco, CA",
      depositTime: "2025-05-22 10:30 AM",
    },
    {
      id: "EVB-002",
      vehicleModel: "Nissan Leaf",
      chargePercentage: 60,
      location: "New York, NY",
      depositTime: "2025-05-21 03:15 PM",
    },
    {
      id: "EVB-003",
      vehicleModel: "Chevrolet Bolt EV",
      chargePercentage: 92,
      location: "Austin, TX",
      depositTime: "2025-05-20 09:00 AM",
    },
  ]);

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!vehicleIdToWithdraw.trim()) {
      toast.error("Please enter a Vehicle ID.");
      return;
    }
    const withdrawalPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundVehicleIndex = recentDepositedVehicles.findIndex(
          (vehicle) => vehicle.id === vehicleIdToWithdraw.trim().toUpperCase()
        );

        if (foundVehicleIndex !== -1) {
          const foundVehicle = recentDepositedVehicles[foundVehicleIndex];
          const updatedVehicles = recentDepositedVehicles.filter(
            (vehicle) => vehicle.id !== vehicleIdToWithdraw.trim().toUpperCase()
          );
          setRecentDepositedVehicles(updatedVehicles);
          setVehicleIdToWithdraw(""); 
          resolve(
            `Withdrawal initiated for Vehicle ID: ${foundVehicle.id} (${foundVehicle.vehicleModel}).`
          );
        } else {
          reject(
            `Vehicle ID: "${vehicleIdToWithdraw}" not found in recent deposits.`
          );
        }
      }, 1500);
    });

    toast.promise(withdrawalPromise, {
      pending: "Processing withdrawal...",
      success: (message) => message,
      error: (error) => error, 
    });
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
            Enter the ID of the deposited vehicle to initiate a withdrawal.
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
                          transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <FaMinusCircle className="mr-2 -ml-1 w-5 h-5" /> Withdraw Battery
            </button>
          </div>
        </form>

        {/* Recent Deposited Vehicles Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-extrabold text-white mb-4 flex items-center">
            <FaListAlt className="mr-2 text-gray-400" /> Recent Deposited
            Vehicles
          </h3>
          {recentDepositedVehicles.length > 0 ? (
            <div className="space-y-4">
              {recentDepositedVehicles.map((vehicle) => (
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
                    <p>
                      <span className="font-medium text-gray-300">
                        Deposit Time:
                      </span>{" "}
                      {vehicle.depositTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No recent deposits found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WithdrawForm;
