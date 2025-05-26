// import { useEffect, useState } from "react";
// import { AiFillTool } from "react-icons/ai";
// import { FaTruckFast } from "react-icons/fa6";
// import { IoSearch, IoSpeedometerSharp } from "react-icons/io5";
// import { useLocation } from "react-router-dom";

// const Retrify = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const location = useLocation();
//   const vehicleType = location.state?.vehicleType || "Bicycle";

//   const [formData, setFormData] = useState({
//     typeOfCycle: "",
//     wheelSize: "",
//     brakeType: "",
//     dailyUsage: "",
//     rideStyle: "",

//     vehicleSubType: "",
//     makeModel: "",
//     fuelType: "",
//     engineCC: "",
//     usageType: "",
//     transmissionType: "",
//     loadCapacity: "",
//     seatingOrLoad: "",

//     machineType: "",
//     primaryUsage: "",
//     approxDailyOperationHours: "",

//     fullName: "",
//     phoneNumber: "",
//     cityPincode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", { vehicleType, ...formData });
//     alert("Form submitted successfully!");
//   };
//   return (
//     <div className="pt-10 text-white p-4 bg-gray-950 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl">
//       <div className="mb-12 flex justify-center items-center flex-col">
//         <div className="text-blue-400 text-sm font-semibold uppercase mb-4">
//           <span className="bg-gray-900 px-4 py-2 rounded-full">
//             RETROFICATION
//           </span>
//         </div>
//         <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
//           Don't Buy New. <span className="text-green-400">Reinvent</span> What
//           You Have.
//         </h2>
//         <p className="text-gray-400 max-w-3xl text-center text-base font-semibold sm:text-lg">
//           Convert your bicycle,two-wheeler,car, or even heavy vehicles into a
//           certified electric drive, cost-efficient, low-maintainance, and built
//           for a cleaner tomorrow.
//         </p>
//       </div>

//       <div className="min-h-screen flex items-center justify-center px-4 py-10">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-2xl bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6"
//         >
//           <div className="text-center">
//             <h1
//               id="retrofitting-registration-title"
//               className="text-3xl font-bold text-white"
//             >
//               Retrofitting Registration
//             </h1>
//             <p className="text-sm text-gray-300 mt-1">
//               Let’s Electrify Your {vehicleType} ⚡
//             </p>
//           </div>

//           {vehicleType === "Bicycle" && (
//             <>
//               <div>
//                 <label className="block mb-1 font-medium">Type of Cycle</label>
//                 <select
//                   name="typeOfCycle"
//                   value={formData.typeOfCycle}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Road Bike</option>
//                   <option>Mountain Bike</option>
//                   <option>Hybrid</option>
//                   <option>Folding</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Wheel Size</label>
//                 <input
//                   type="text"
//                   name="wheelSize"
//                   value={formData.wheelSize}
//                   onChange={handleChange}
//                   placeholder="e.g., 26 inches"
//                   className="input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Brake Type</label>
//                 <select
//                   name="brakeType"
//                   value={formData.brakeType}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Disc</option>
//                   <option>V-Brake</option>
//                   <option>Drum</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">
//                   Expected Daily Usage (km)
//                 </label>
//                 <input
//                   type="number"
//                   name="dailyUsage"
//                   value={formData.dailyUsage}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">
//                   Preferred Riding Style
//                 </label>
//                 <select
//                   name="rideStyle"
//                   value={formData.rideStyle}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Commuter</option>
//                   <option>Off-Road</option>
//                   <option>Touring</option>
//                   <option>Performance</option>
//                 </select>
//               </div>
//             </>
//           )}

//           {(vehicleType === "Two-Wheeler" ||
//             vehicleType === "Three-Wheeler" ||
//             vehicleType === "Four-Wheeler" ||
//             vehicleType === "Six-Wheeler / Commercial Vehicle") && (
//             <>
//               <div>
//                 <label className="block mb-1 font-medium">Vehicle Type</label>
//                 <select
//                   name="vehicleSubType"
//                   value={formData.vehicleSubType}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Scooter</option>
//                   <option>Motorcycle</option>
//                   <option>Auto-Rickshaw</option>
//                   <option>Van</option>
//                   <option>Car</option>
//                   <option>Pickup Truck</option>
//                   <option>Commercial Truck</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Make & Model</label>
//                 <input
//                   type="text"
//                   name="makeModel"
//                   value={formData.makeModel}
//                   onChange={handleChange}
//                   placeholder="Optional"
//                   className="input"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Fuel Type</label>
//                 <select
//                   name="fuelType"
//                   value={formData.fuelType}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Petrol</option>
//                   <option>Diesel</option>
//                   <option>CNG</option>
//                   <option>LPG</option>
//                 </select>
//               </div>

//               {vehicleType !== "Two-Wheeler" && (
//                 <div>
//                   <label className="block mb-1 font-medium">Usage Type</label>
//                   <select
//                     name="usageType"
//                     value={formData.usageType}
//                     onChange={handleChange}
//                     className="input"
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option>Personal</option>
//                     <option>Passenger</option>
//                     <option>Goods</option>
//                     <option>Mixed</option>
//                   </select>
//                 </div>
//               )}

//               <div>
//                 <label className="block mb-1 font-medium">
//                   Expected Daily Usage (km)
//                 </label>
//                 <input
//                   type="number"
//                   name="dailyUsage"
//                   value={formData.dailyUsage}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 />
//               </div>

//               {vehicleType !== "Two-Wheeler" && (
//                 <>
//                   <div>
//                     <label className="block mb-1 font-medium">
//                       Transmission Type
//                     </label>
//                     <select
//                       name="transmissionType"
//                       value={formData.transmissionType}
//                       onChange={handleChange}
//                       className="input"
//                     >
//                       <option value="">Select</option>
//                       <option>Manual</option>
//                       <option>Automatic</option>
//                       <option>Semi-Automatic</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block mb-1 font-medium">
//                       {vehicleType === "Four-Wheeler"
//                         ? "Seating Capacity or Load"
//                         : "Typical Load Capacity"}
//                     </label>
//                     <input
//                       type="text"
//                       name="loadCapacity"
//                       value={formData.loadCapacity}
//                       onChange={handleChange}
//                       className="input"
//                       placeholder="e.g., 5000 kg"
//                       required
//                     />
//                   </div>
//                 </>
//               )}
//             </>
//           )}

//           {vehicleType === "Heavy-Duty Machinery" && (
//             <>
//               <div>
//                 <label className="block mb-1 font-medium">Machine Type</label>
//                 <select
//                   name="machineType"
//                   value={formData.machineType}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Excavator</option>
//                   <option>Bulldozer</option>
//                   <option>Crane</option>
//                   <option>Loader</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Primary Usage</label>
//                 <select
//                   name="primaryUsage"
//                   value={formData.primaryUsage}
//                   onChange={handleChange}
//                   className="input"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option>Construction</option>
//                   <option>Mining</option>
//                   <option>Agriculture</option>
//                   <option>Logistics</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">
//                   Approx. Daily Operation Hours
//                 </label>
//                 <input
//                   type="number"
//                   name="approxDailyOperationHours"
//                   value={formData.approxDailyOperationHours}
//                   onChange={handleChange}
//                   className="input"
//                   min="0"
//                   max="24"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Load Capacity</label>
//                 <input
//                   type="text"
//                   name="loadCapacity"
//                   value={formData.loadCapacity}
//                   onChange={handleChange}
//                   className="input"
//                   placeholder="e.g., 10 tons"
//                   required
//                 />
//               </div>
//             </>
//           )}

//           {/* Common Contact Info */}
//           <hr className="my-6" />
//           <h3 className="text-xl font-semibold mb-4">
//             Your Contact Information
//           </h3>

//           <div>
//             <label className="block mb-1 font-medium">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="John Doe"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="input"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Phone Number</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="+91 9876543210"
//               className="input"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">City and Pincode</label>
//             <input
//               type="text"
//               name="cityPincode"
//               value={formData.cityPincode}
//               onChange={handleChange}
//               placeholder="e.g., Bangalore 560001"
//               className="input"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       <div
//         className="mb-16 max-w-6xl mx-auto text-white pt-14 px-6"
//         aria-labelledby="retrofitting-process-title"
//       >
//         <h3
//           id="retrofitting-process-title"
//           className="text-center text-3xl font-bold mb-8"
//         >
//           Our Retrofitting Process
//         </h3>
//         <div
//           className="grid grid-cols-1 md:grid-cols-4 gap-4"
//           aria-label="Retrofitting process steps"
//         >
//           {" "}
//           {/* Accessibility */}
//           {/* Process Step 1 */}
//           <div
//             className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//             aria-labelledby="process-step-1-title"
//           >
//             {" "}
//             {/* Accessibility */}
//             <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//               1
//             </div>
//             <h4 id="process-step-1-title" className="text-2xl font-bold mb-2">
//               Assessment
//             </h4>
//             <p className="text-gray-400 text-base mb-4 flex-grow">
//               Our experts evaluate your vehicle's specifications to suggest the
//               ideal electric conversion package.
//             </p>
//             <div className="mt-auto">
//               <button
//                 className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                 aria-label="Learn more about the assessment process"
//               >
//                 {" "}
//                 {/* Accessibility */}
//                 <IoSearch size={20} aria-hidden="true" /> {/* Accessibility */}
//               </button>
//             </div>
//           </div>
//           {/* Process Step 2 */}
//           <div
//             className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//             aria-labelledby="process-step-2-title"
//           >
//             {" "}
//             {/* Accessibility */}
//             <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//               2
//             </div>
//             <h4 id="process-step-2-title" className="text-2xl font-bold mb-2">
//               Conversion
//             </h4>
//             <p className="text-gray-400 text-base mb-4 flex-grow">
//               We remove the combustion engine and install a high-performance
//               electric motor and battery system.
//             </p>
//             <div className="mt-auto">
//               <button
//                 className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                 aria-label="Learn more about the conversion process"
//               >
//                 {" "}
//                 {/* Accessibility */}
//                 <AiFillTool size={20} aria-hidden="true" />{" "}
//                 {/* Accessibility */}
//               </button>
//             </div>
//           </div>
//           {/* Process Step 3 */}
//           <div
//             className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//             aria-labelledby="process-step-3-title"
//           >
//             {" "}
//             {/* Accessibility */}
//             <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//               3
//             </div>
//             <h4 id="process-step-3-title" className="text-2xl font-bold mb-2">
//               Testing
//             </h4>
//             <p className="text-gray-400 text-base mb-4 flex-grow">
//               Rigorous quality checks and road tests ensure optimal performance
//               and safety.
//             </p>
//             <div className="mt-auto">
//               <button
//                 className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                 aria-label="Learn more about the testing process"
//               >
//                 {" "}
//                 {/* Accessibility */}
//                 <IoSpeedometerSharp size={20} aria-hidden="true" />{" "}
//                 {/* Accessibility */}
//               </button>
//             </div>
//           </div>
//           {/* Process Step 4 */}
//           <div
//             className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//             aria-labelledby="process-step-4-title"
//           >
//             {" "}
//             {/* Accessibility */}
//             <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//               4
//             </div>
//             <h4 id="process-step-4-title" className="text-2xl font-bold mb-2">
//               Delivery
//             </h4>
//             <p className="text-gray-400 text-base mb-4 flex-grow">
//               Get your upgraded vehicle, complete with documentation and
//               warranty certification.
//             </p>
//             <div className="mt-auto">
//               <button
//                 className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                 aria-label="Learn more about the delivery process"
//               >
//                 {" "}
//                 {/* Accessibility */}
//                 <FaTruckFast size={20} aria-hidden="true" />{" "}
//                 {/* Accessibility */}
//               </button>
//             </div>
//             {/* </div> */}
//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Retrify;

import { useEffect, useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { IoSearch, IoSpeedometerSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { db } from "../firebase"; // Import your Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const Retrify = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const vehicleType = location.state?.vehicleType || "Bicycle"; // Default to "Bicycle" if not passed

  const [formData, setFormData] = useState({
    typeOfCycle: "",
    wheelSize: "",
    brakeType: "",
    dailyUsage: "",
    rideStyle: "",

    vehicleSubType: "",
    makeModel: "",
    fuelType: "",
    engineCC: "",
    usageType: "",
    transmissionType: "",
    loadCapacity: "",
    seatingOrLoad: "",

    machineType: "",
    primaryUsage: "",
    approxDailyOperationHours: "",

    fullName: "",
    phoneNumber: "",
    cityPincode: "",
  });

  const [isLoading, setIsLoading] = useState(false); // New state for loading
  // const [error, setError] = useState(null); // No longer needed as toast handles errors
  // const [isSubmitted, setIsSubmitted] = useState(false); // No longer needed for visual feedback

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      // Basic client-side validation using toast
      if (
        !formData.fullName.trim() ||
        !formData.phoneNumber.trim() ||
        !formData.cityPincode.trim()
      ) {
        toast.error("Please fill in all required contact information fields.");
        setIsLoading(false);
        return;
      }

      if (
        vehicleType === "Bicycle" &&
        (!formData.typeOfCycle ||
          !formData.wheelSize ||
          !formData.brakeType ||
          !formData.dailyUsage ||
          !formData.rideStyle)
      ) {
        toast.error("Please fill in all required bicycle details.");
        setIsLoading(false);
        return;
      }

      if (
        (vehicleType === "Two-Wheeler" ||
          vehicleType === "Three-Wheeler" ||
          vehicleType === "Four-Wheeler" ||
          vehicleType === "Six-Wheeler / Commercial Vehicle") &&
        (!formData.vehicleSubType ||
          !formData.fuelType ||
          !formData.dailyUsage ||
          !formData.engineCC)
      ) {
        toast.error("Please fill in all required vehicle details.");
        setIsLoading(false);
        return;
      }

      if (
        vehicleType === "Heavy-Duty Machinery" &&
        (!formData.machineType ||
          !formData.primaryUsage ||
          !formData.approxDailyOperationHours ||
          !formData.loadCapacity)
      ) {
        toast.error("Please fill in all required machinery details.");
        setIsLoading(false);
        return;
      }

      // Prepare data to send to Firestore, including the determined vehicleType
      const dataToSave = {
        vehicleType, // This comes from location.state
        ...formData, // Spreads all current form field values
        timestamp: new Date().toISOString(), // Add a timestamp for when it was submitted
      };

      // Add a new document to the 'retrofittingRequests' collection
      await toast.promise(
        addDoc(collection(db, "retrofittingRequests"), dataToSave),
        {
          pending: "Submitting your request...",
          success: "Request submitted successfully! We'll be in touch soon.",
          error: "Failed to submit request. Please try again.",
        }
      );

      // Optionally, clear the form after successful submission
      setFormData({
        typeOfCycle: "",
        wheelSize: "",
        brakeType: "",
        dailyUsage: "",
        rideStyle: "",

        vehicleSubType: "",
        makeModel: "",
        fuelType: "",
        engineCC: "",
        usageType: "",
        transmissionType: "",
        loadCapacity: "",
        seatingOrLoad: "",

        machineType: "",
        primaryUsage: "",
        approxDailyOperationHours: "",

        fullName: "",
        phoneNumber: "",
        cityPincode: "",
      });
    } catch (err) {
      console.error("Error submitting retrofitting request:", err);
      // The toast.promise handles the error message, so we don't need a separate setError here.
    } finally {
      setIsLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <div className="pt-10 text-white p-4 bg-gray-950 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl">
      <div className="mb-12 flex justify-center items-center flex-col">
        <div className="text-blue-400 text-sm font-semibold uppercase mb-4">
          <span className="bg-gray-900 px-4 py-2 rounded-full">
            RETROFICATION
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
          Don't Buy New. <span className="text-green-400">Reinvent</span> What
          You Have.
        </h2>
        <p className="text-gray-400 max-w-3xl text-center text-base font-semibold sm:text-lg">
          Convert your bicycle,two-wheeler,car, or even heavy vehicles into a
          certified electric drive, cost-efficient, low-maintainance, and built
          for a cleaner tomorrow.
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6"
        >
          <div className="text-center">
            <h1
              id="retrofitting-registration-title"
              className="text-3xl font-bold text-white"
            >
              Retrofitting Registration
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Let’s Electrify Your {vehicleType} ⚡
            </p>
          </div>

          {/* Bicycle Specific Fields */}
          {vehicleType === "Bicycle" && (
            <>
              <div>
                <label className="block mb-1 font-medium">Type of Cycle</label>
                <select
                  name="typeOfCycle"
                  value={formData.typeOfCycle}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Road Bike</option>
                  <option>Mountain Bike</option>
                  <option>Hybrid</option>
                  <option>Folding</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Wheel Size</label>
                <input
                  type="text"
                  name="wheelSize"
                  value={formData.wheelSize}
                  onChange={handleChange}
                  placeholder="e.g., 26 inches"
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Brake Type</label>
                <select
                  name="brakeType"
                  value={formData.brakeType}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Disc</option>
                  <option>V-Brake</option>
                  <option>Drum</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Expected Daily Usage (km)
                </label>
                <input
                  type="number"
                  name="dailyUsage"
                  value={formData.dailyUsage}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Preferred Riding Style
                </label>
                <select
                  name="rideStyle"
                  value={formData.rideStyle}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Commuter</option>
                  <option>Off-Road</option>
                  <option>Touring</option>
                  <option>Performance</option>
                </select>
              </div>
            </>
          )}

          {/* Two, Three, Four, Six-Wheeler Specific Fields */}
          {(vehicleType === "Two-Wheeler" ||
            vehicleType === "Three-Wheeler" ||
            vehicleType === "Four-Wheeler" ||
            vehicleType === "Six-Wheeler / Commercial Vehicle") && (
            <>
              <div>
                <label className="block mb-1 font-medium">Vehicle Type</label>
                <select
                  name="vehicleSubType"
                  value={formData.vehicleSubType}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Scooter</option>
                  <option>Motorcycle</option>
                  <option>Auto-Rickshaw</option>
                  <option>Van</option>
                  <option>Car</option>
                  <option>Pickup Truck</option>
                  <option>Commercial Truck</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Make & Model</label>
                <input
                  type="text"
                  name="makeModel"
                  value={formData.makeModel}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="input"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Fuel Type</label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>LPG</option>
                </select>
              </div>

              {/* Engine CC for Two-Wheeler and other vehicles */}
              <div>
                <label className="block mb-1 font-medium">Engine CC</label>
                <input
                  type="number"
                  name="engineCC"
                  value={formData.engineCC}
                  onChange={handleChange}
                  placeholder="e.g., 150 (for bikes), 1200 (for cars)"
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              {vehicleType !== "Two-Wheeler" && (
                <div>
                  <label className="block mb-1 font-medium">Usage Type</label>
                  <select
                    name="usageType"
                    value={formData.usageType}
                    onChange={handleChange}
                    className="input"
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select</option>
                    <option>Personal</option>
                    <option>Passenger</option>
                    <option>Goods</option>
                    <option>Mixed</option>
                  </select>
                </div>
              )}

              {/* Daily Usage (km) for these vehicle types */}
              <div>
                <label className="block mb-1 font-medium">
                  Expected Daily Usage (km)
                </label>
                <input
                  type="number"
                  name="dailyUsage"
                  value={formData.dailyUsage}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              {vehicleType !== "Two-Wheeler" && (
                <>
                  <div>
                    <label className="block mb-1 font-medium">
                      Transmission Type
                    </label>
                    <select
                      name="transmissionType"
                      value={formData.transmissionType}
                      onChange={handleChange}
                      className="input"
                      disabled={isLoading}
                    >
                      <option value="">Select</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                      <option>Semi-Automatic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      {vehicleType === "Four-Wheeler"
                        ? "Seating Capacity" // Changed for clarity for four-wheeler
                        : "Typical Load Capacity"}
                    </label>
                    <input
                      type="text"
                      name="loadCapacity"
                      value={formData.loadCapacity}
                      onChange={handleChange}
                      className="input"
                      placeholder={
                        vehicleType === "Four-Wheeler"
                          ? "e.g., 5 passengers"
                          : "e.g., 5000 kg"
                      }
                      required
                      disabled={isLoading}
                    />
                  </div>
                </>
              )}
            </>
          )}

          {/* Heavy-Duty Machinery Specific Fields */}
          {vehicleType === "Heavy-Duty Machinery" && (
            <>
              <div>
                <label className="block mb-1 font-medium">Machine Type</label>
                <select
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Excavator</option>
                  <option>Bulldozer</option>
                  <option>Crane</option>
                  <option>Loader</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Primary Usage</label>
                <select
                  name="primaryUsage"
                  value={formData.primaryUsage}
                  onChange={handleChange}
                  className="input"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option>Construction</option>
                  <option>Mining</option>
                  <option>Agriculture</option>
                  <option>Logistics</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Approx. Daily Operation Hours
                </label>
                <input
                  type="number"
                  name="approxDailyOperationHours"
                  value={formData.approxDailyOperationHours}
                  onChange={handleChange}
                  className="input"
                  min="0"
                  max="24"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Load Capacity</label>
                <input
                  type="text"
                  name="loadCapacity"
                  value={formData.loadCapacity}
                  onChange={handleChange}
                  className="input"
                  placeholder="e.g., 10 tons"
                  required
                  disabled={isLoading}
                />
              </div>
            </>
          )}

          {/* Common Contact Info */}
          <hr className="my-6 border-white/20" />
          <h3 className="text-xl font-semibold mb-4">
            Your Contact Information
          </h3>

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="input"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">City and Pincode</label>
            <input
              type="text"
              name="cityPincode"
              value={formData.cityPincode}
              onChange={handleChange}
              className="input"
              placeholder="e.g., Bangalore 560001"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <div
        className="mb-16 max-w-6xl mx-auto text-white pt-14 px-6"
        aria-labelledby="retrofitting-process-title"
      >
        <h3
          id="retrofitting-process-title"
          className="text-center text-3xl font-bold mb-8"
        >
          Our Retrofitting Process
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          aria-label="Retrofitting process steps"
        >
          {/* Process Step 1 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-1-title"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h4 id="process-step-1-title" className="text-2xl font-bold mb-2">
              Assessment
            </h4>
            <p className="text-gray-400 text-base mb-4 flex-grow">
              Our experts evaluate your vehicle's specifications to suggest the
              ideal electric conversion package.
            </p>
            <div className="mt-auto">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                aria-label="Learn more about the assessment process"
              >
                <IoSearch size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Process Step 2 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-2-title"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h4 id="process-step-2-title" className="text-2xl font-bold mb-2">
              Conversion
            </h4>
            <p className="text-gray-400 text-base mb-4 flex-grow">
              We remove the combustion engine and install a high-performance
              electric motor and battery system.
            </p>
            <div className="mt-auto">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                aria-label="Learn more about the conversion process"
              >
                <AiFillTool size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Process Step 3 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-3-title"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h4 id="process-step-3-title" className="text-2xl font-bold mb-2">
              Testing
            </h4>
            <p className="text-gray-400 text-base mb-4 flex-grow">
              Rigorous quality checks and road tests ensure optimal performance
              and safety.
            </p>
            <div className="mt-auto">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                aria-label="Learn more about the testing process"
              >
                <IoSpeedometerSharp size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Process Step 4 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-4-title"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <h4 id="process-step-4-title" className="text-2xl font-bold mb-2">
              Delivery
            </h4>
            <p className="text-gray-400 text-base mb-4 flex-grow">
              Get your upgraded vehicle, complete with documentation and
              warranty certification.
            </p>
            <div className="mt-auto">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
                aria-label="Learn more about the delivery process"
              >
                <FaTruckFast size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrify;
