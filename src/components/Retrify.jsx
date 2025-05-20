// import { useEffect, useState } from "react";
// import { AiFillTool } from "react-icons/ai";
// import { FaTruckFast } from "react-icons/fa6";
// import { IoSearch, IoSpeedometerSharp } from "react-icons/io5";
// import { useLocation } from "react-router-dom";

// const Retrify = () => {
//   const [form, setForm] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     city: "",
//     pincode: "",
//     vehicleType: "",
//     makeModel: "",
//     fuelType: "Petrol",
//     notes: "",
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", form);
//   };

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div
//       className="pt-10 text-white p-4 bg-gray-950 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
//       aria-labelledby="retrofitting-section-title" // Accessibility: Label the section
//     >
//       <div>
//         <div
//           className="mb-12 flex justify-center items-center flex-col"
//           aria-labelledby="retrofitting-intro"
//         >
//           {" "}
//           {/* Accessibility */}
//           <div className="text-blue-400 text-sm font-semibold uppercase mb-4">
//             <span className="bg-gray-900 px-4 py-2 rounded-full">
//               RETROFICATION
//             </span>
//           </div>
//           <h2
//             id="retrofitting-section-title"
//             className="text-2xl sm:text-4xl font-bold mb-3 text-center"
//           >
//             Don't Buy New. <span className="text-green-400">Reinvent</span> What
//             You Have.
//           </h2>
//           <p className="text-gray-400 max-w-3xl text-center  text-base font-semibold sm:text-lg">
//             Convert your bicycle,two-wheeler,car, or even heavy vehicles into a
//             certified electric drive,cost-efficient,low-maintainance,and built
//             for a cleaner tomorrow.
//           </p>
//         </div>
//         <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-950 p-4 sm:p-8 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 rounded-md">
//           <form
//             onSubmit={handleSubmit}
//             className="w-full max-w-2xl bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6"
//             aria-labelledby="retrofitting-registration-title" // Accessibility
//           >
//             <div className="text-center">
//               <h1
//                 id="retrofitting-registration-title"
//                 className="text-3xl font-bold text-white"
//               >
//                 Retrofitting Registration
//               </h1>
//               <p className="text-sm text-gray-300 mt-1">
//                 Let’s Electrify Your Ride ⚡
//               </p>
//             </div>

//             {/* Personal Info */}
//             <div
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               aria-label="Personal information"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="flex flex-col">
//                 <label htmlFor="fullName" className="text-white mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={form.fullName}
//                   onChange={handleChange}
//                   placeholder="e.g. Rahul Sharma"
//                   required
//                   className="input"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="mobile" className="text-white mb-1">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   placeholder="10-digit number"
//                   pattern="[0-9]{10}"
//                   required
//                   className="input"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-white mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="example@gmail.com"
//                 required
//                 className="input"
//               />
//             </div>

//             <div
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               aria-label="Location information"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="flex flex-col">
//                 <label htmlFor="city" className="text-white mb-1">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   value={form.city}
//                   onChange={handleChange}
//                   placeholder="e.g. Pune"
//                   required
//                   className="input"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="pincode" className="text-white mb-1">
//                   Pincode
//                 </label>
//                 <input
//                   type="text"
//                   id="pincode"
//                   name="pincode"
//                   value={form.pincode}
//                   onChange={handleChange}
//                   placeholder="6-digit pincode"
//                   pattern="[0-9]{6}"
//                   required
//                   className="input"
//                 />
//               </div>
//             </div>

//             {/* Vehicle Info */}
//             <div aria-label="Vehicle information">
//               {" "}
//               {/* Accessibility */}
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Vehicle Information
//               </h3>
//               <div className="flex flex-col space-y-4">
//                 <div className="flex flex-col">
//                   <label htmlFor="vehicleType" className="text-white mb-1">
//                     Vehicle Type
//                   </label>
//                   <select
//                     id="vehicleType"
//                     name="vehicleType"
//                     value={form.vehicleType}
//                     onChange={handleChange}
//                     required
//                     className="input"
//                   >
//                     <option value="" className="text-black">
//                       Select Vehicle Type
//                     </option>
//                     <option value="Bike" className="text-black">
//                       Bike
//                     </option>
//                     <option value="Auto" className="text-black">
//                       Auto
//                     </option>
//                     <option value="Car" className="text-black">
//                       Car
//                     </option>
//                     <option value="Truck" className="text-black">
//                       Truck
//                     </option>
//                     <option value="Other" className="text-black">
//                       Other
//                     </option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="makeModel" className="text-white mb-1">
//                     Make & Model
//                   </label>
//                   <input
//                     type="text"
//                     id="makeModel"
//                     name="makeModel"
//                     placeholder="e.g. Hero Splendor 2015"
//                     value={form.makeModel}
//                     onChange={handleChange}
//                     required
//                     className="input"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="fuelType" className="text-white mb-1">
//                     Fuel Type
//                   </label>
//                   <select
//                     id="fuelType"
//                     name="fuelType"
//                     value={form.fuelType}
//                     onChange={handleChange}
//                     required
//                     className="input"
//                   >
//                     <option value="" className="text-black">
//                       Select Fuel Type
//                     </option>
//                     <option value="Petrol" className="text-black">
//                       Petrol
//                     </option>
//                     <option value="Diesel" className="text-black">
//                       Diesel
//                     </option>
//                     <option value="LPG" className="text-black">
//                       LPG
//                     </option>
//                     <option value="CNG" className="text-black">
//                       CNG
//                     </option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="notes" className="text-white mb-1">
//                     Additional Notes (Optional)
//                   </label>
//                   <textarea
//                     id="notes"
//                     name="notes"
//                     placeholder="Any custom request or vehicle condition..."
//                     value={form.notes}
//                     onChange={handleChange}
//                     className="input h-24 resize-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Agreement */}
//             <div className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 name="agree"
//                 checked={form.agree}
//                 onChange={handleChange}
//                 className="mt-1 accent-[#26C72D]"
//                 required
//               />
//               <label htmlFor="agree" className="text-sm text-gray-300">
//                 I agree to the Terms & Conditions and Privacy Policy.
//               </label>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={!form.agree}
//               className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
//             >
//               Request My Conversion
//             </button>
//           </form>
//         </div>

//         <div
//           className="mb-16 max-w-6xl mx-auto text-white pt-14 px-6"
//           aria-labelledby="retrofitting-process-title"
//         >
//           {" "}
//           {/* Accessibility */}
//           <h3
//             id="retrofitting-process-title"
//             className="text-center text-3xl font-bold mb-8"
//           >
//             Our Retrofitting Process
//           </h3>
//           <div
//             className="grid grid-cols-1 md:grid-cols-4 gap-4"
//             aria-label="Retrofitting process steps"
//           >
//             {" "}
//             {/* Accessibility */}
//             {/* Process Step 1 */}
//             <div
//               className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//               aria-labelledby="process-step-1-title"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//                 1
//               </div>
//               <h4 id="process-step-1-title" className="text-2xl font-bold mb-2">
//                 Assessment
//               </h4>
//               <p className="text-gray-400 text-base mb-4 flex-grow">
//                 Our experts evaluate your vehicle's specifications to suggest
//                 the ideal electric conversion package.
//               </p>
//               <div className="mt-auto">
//                 <button
//                   className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                   aria-label="Learn more about the assessment process"
//                 >
//                   {" "}
//                   {/* Accessibility */}
//                   <IoSearch size={20} aria-hidden="true" />{" "}
//                   {/* Accessibility */}
//                 </button>
//               </div>
//             </div>
//             {/* Process Step 2 */}
//             <div
//               className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//               aria-labelledby="process-step-2-title"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//                 2
//               </div>
//               <h4 id="process-step-2-title" className="text-2xl font-bold mb-2">
//                 Conversion
//               </h4>
//               <p className="text-gray-400 text-base mb-4 flex-grow">
//                 We remove the combustion engine and install a high-performance
//                 electric motor and battery system.
//               </p>
//               <div className="mt-auto">
//                 <button
//                   className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                   aria-label="Learn more about the conversion process"
//                 >
//                   {" "}
//                   {/* Accessibility */}
//                   <AiFillTool size={20} aria-hidden="true" />{" "}
//                   {/* Accessibility */}
//                 </button>
//               </div>
//             </div>
//             {/* Process Step 3 */}
//             <div
//               className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//               aria-labelledby="process-step-3-title"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//                 3
//               </div>
//               <h4 id="process-step-3-title" className="text-2xl font-bold mb-2">
//                 Testing
//               </h4>
//               <p className="text-gray-400 text-base mb-4 flex-grow">
//                 Rigorous quality checks and road tests ensure optimal
//                 performance and safety.
//               </p>
//               <div className="mt-auto">
//                 <button
//                   className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                   aria-label="Learn more about the testing process"
//                 >
//                   {" "}
//                   {/* Accessibility */}
//                   <IoSpeedometerSharp size={20} aria-hidden="true" />{" "}
//                   {/* Accessibility */}
//                 </button>
//               </div>
//             </div>
//             {/* Process Step 4 */}
//             <div
//               className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
//               aria-labelledby="process-step-4-title"
//             >
//               {" "}
//               {/* Accessibility */}
//               <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
//                 4
//               </div>
//               <h4 id="process-step-4-title" className="text-2xl font-bold mb-2">
//                 Delivery
//               </h4>
//               <p className="text-gray-400 text-base mb-4 flex-grow">
//                 Get your upgraded vehicle, complete with documentation and
//                 warranty certification.
//               </p>
//               <div className="mt-auto">
//                 <button
//                   className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400"
//                   aria-label="Learn more about the delivery process"
//                 >
//                   {" "}
//                   {/* Accessibility */}
//                   <FaTruckFast size={20} aria-hidden="true" />{" "}
//                   {/* Accessibility */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Retrify;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const Retrify = () => {
// const location = useLocation();
// const vehicleType = location.state?.vehicleType || "";

// const [formData, setFormData] = useState({
//   typeOfCycle: "",
//   wheelSize: "",
//   brakeType: "",
//   dailyUsage: "",
//   rideStyle: "",

//   vehicleSubType: "",
//   makeModel: "",
//   fuelType: "",
//   engineCC: "",
//   usageType: "",
//   transmissionType: "",
//   loadCapacity: "",
//   seatingOrLoad: "",

//   machineType: "",
//   primaryUsage: "",
//   approxDailyOperationHours: "",

//   fullName: "",
//   phoneNumber: "",
//   cityPincode: "",
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Submitted Data:", { vehicleType, ...formData });
//   alert("Form submitted successfully!");
// };

//   return (
// <form
//   onSubmit={handleSubmit}
//   className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
// >
//   <h2 className="text-2xl font-bold mb-2">
//     Retrofit Request - {vehicleType}
//   </h2>

//   {/* --- Conditional Sections Based on vehicleType --- */}

//   {vehicleType === "Bicycle" && (
//     <>
//       <div>
//         <label className="block mb-1 font-medium">Type of Cycle</label>
//         <select
//           name="typeOfCycle"
//           value={formData.typeOfCycle}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Road Bike</option>
//           <option>Mountain Bike</option>
//           <option>Hybrid</option>
//           <option>Folding</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Wheel Size</label>
//         <input
//           type="text"
//           name="wheelSize"
//           value={formData.wheelSize}
//           onChange={handleChange}
//           placeholder="e.g., 26 inches"
//           className="w-full border rounded px-3 py-2"
//           required
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Brake Type</label>
//         <select
//           name="brakeType"
//           value={formData.brakeType}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Disc</option>
//           <option>V-Brake</option>
//           <option>Drum</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">
//           Expected Daily Usage (km)
//         </label>
//         <input
//           type="number"
//           name="dailyUsage"
//           value={formData.dailyUsage}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">
//           Preferred Riding Style
//         </label>
//         <select
//           name="rideStyle"
//           value={formData.rideStyle}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Commuter</option>
//           <option>Off-Road</option>
//           <option>Touring</option>
//           <option>Performance</option>
//         </select>
//       </div>
//     </>
//   )}

//   {(vehicleType === "Two-Wheeler" ||
//     vehicleType === "Three-Wheeler" ||
//     vehicleType === "Four-Wheeler" ||
//     vehicleType === "Six-Wheeler / Commercial Vehicle") && (
//     <>
//       <div>
//         <label className="block mb-1 font-medium">Vehicle Type</label>
//         <select
//           name="vehicleSubType"
//           value={formData.vehicleSubType}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Scooter</option>
//           <option>Motorcycle</option>
//           <option>Auto-Rickshaw</option>
//           <option>Van</option>
//           <option>Car</option>
//           <option>Pickup Truck</option>
//           <option>Commercial Truck</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Make & Model</label>
//         <input
//           type="text"
//           name="makeModel"
//           value={formData.makeModel}
//           onChange={handleChange}
//           placeholder="Optional"
//           className="w-full border rounded px-3 py-2"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Fuel Type</label>
//         <select
//           name="fuelType"
//           value={formData.fuelType}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Petrol</option>
//           <option>Diesel</option>
//           <option>CNG</option>
//           <option>LPG</option>
//         </select>
//       </div>

//       {vehicleType !== "Two-Wheeler" && (
//         <div>
//           <label className="block mb-1 font-medium">Usage Type</label>
//           <select
//             name="usageType"
//             value={formData.usageType}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           >
//             <option value="">Select</option>
//             <option>Personal</option>
//             <option>Passenger</option>
//             <option>Goods</option>
//             <option>Mixed</option>
//           </select>
//         </div>
//       )}

//       <div>
//         <label className="block mb-1 font-medium">
//           Expected Daily Usage (km)
//         </label>
//         <input
//           type="number"
//           name="dailyUsage"
//           value={formData.dailyUsage}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         />
//       </div>

//       {vehicleType !== "Two-Wheeler" && (
//         <>
//           <div>
//             <label className="block mb-1 font-medium">
//               Transmission Type
//             </label>
//             <select
//               name="transmissionType"
//               value={formData.transmissionType}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="">Select</option>
//               <option>Manual</option>
//               <option>Automatic</option>
//               <option>Semi-Automatic</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">
//               {vehicleType === "Four-Wheeler"
//                 ? "Seating Capacity or Load"
//                 : "Typical Load Capacity"}
//             </label>
//             <input
//               type="text"
//               name="loadCapacity"
//               value={formData.loadCapacity}
//               onChange={handleChange}
//               className="w-full border rounded px-3 py-2"
//               placeholder="e.g., 5000 kg"
//               required
//             />
//           </div>
//         </>
//       )}
//     </>
//   )}

//   {vehicleType === "Heavy-Duty Machinery" && (
//     <>
//       <div>
//         <label className="block mb-1 font-medium">Machine Type</label>
//         <select
//           name="machineType"
//           value={formData.machineType}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Excavator</option>
//           <option>Bulldozer</option>
//           <option>Crane</option>
//           <option>Loader</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Primary Usage</label>
//         <select
//           name="primaryUsage"
//           value={formData.primaryUsage}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           required
//         >
//           <option value="">Select</option>
//           <option>Construction</option>
//           <option>Mining</option>
//           <option>Agriculture</option>
//           <option>Logistics</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">
//           Approx. Daily Operation Hours
//         </label>
//         <input
//           type="number"
//           name="approxDailyOperationHours"
//           value={formData.approxDailyOperationHours}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           min="0"
//           max="24"
//           required
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Load Capacity</label>
//         <input
//           type="text"
//           name="loadCapacity"
//           value={formData.loadCapacity}
//           onChange={handleChange}
//           className="w-full border rounded px-3 py-2"
//           placeholder="e.g., 10 tons"
//           required
//         />
//       </div>
//     </>
//   )}

//   {/* Common Contact Info */}
//   <hr className="my-6" />
//   <h3 className="text-xl font-semibold mb-4">Your Contact Information</h3>

//   <div>
//     <label className="block mb-1 font-medium">Full Name</label>
//     <input
//       type="text"
//       name="fullName"
//       value={formData.fullName}
//       onChange={handleChange}
//       className="w-full border rounded px-3 py-2"
//       required
//     />
//   </div>

//   <div>
//     <label className="block mb-1 font-medium">Phone Number</label>
//     <input
//       type="tel"
//       name="phoneNumber"
//       value={formData.phoneNumber}
//       onChange={handleChange}
//       placeholder="+91 9876543210"
//       className="w-full border rounded px-3 py-2"
//       required
//     />
//   </div>

//   <div>
//     <label className="block mb-1 font-medium">City and Pincode</label>
//     <input
//       type="text"
//       name="cityPincode"
//       value={formData.cityPincode}
//       onChange={handleChange}
//       placeholder="e.g., Bangalore 560001"
//       className="w-full border rounded px-3 py-2"
//       required
//     />
//   </div>

//   <button
//     type="submit"
//     className="bg-green-600 text-white font-semibold rounded px-6 py-3 mt-4 hover:bg-green-700 transition"
//   >
//     Submit
//   </button>
// </form>
//   );
// };

// export default Retrify;

import { useEffect, useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { IoSearch, IoSpeedometerSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Retrify = () => {
  // const [form, setForm] = useState({
  //   fullName: "",
  //   mobile: "",
  //   email: "",
  //   city: "",
  //   pincode: "",
  //   vehicleType: "",
  //   makeModel: "",
  //   fuelType: "Petrol",
  //   notes: "",
  //   agree: false,
  // });

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted", form);
  // };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const location = useLocation();
  const vehicleType = location.state?.vehicleType || "";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { vehicleType, ...formData });
    alert("Form submitted successfully!");
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
                >
                  <option value="">Select</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>LPG</option>
                </select>
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
                  >
                    <option value="">Select</option>
                    <option>Personal</option>
                    <option>Passenger</option>
                    <option>Goods</option>
                    <option>Mixed</option>
                  </select>
                </div>
              )}

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
                        ? "Seating Capacity or Load"
                        : "Typical Load Capacity"}
                    </label>
                    <input
                      type="text"
                      name="loadCapacity"
                      value={formData.loadCapacity}
                      onChange={handleChange}
                      className="input"
                      placeholder="e.g., 5000 kg"
                      required
                    />
                  </div>
                </>
              )}
            </>
          )}

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
                />
              </div>
            </>
          )}

          {/* Common Contact Info */}
          <hr className="my-6" />
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
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">City and Pincode</label>
            <input
              type="text"
              name="cityPincode"
              value={formData.cityPincode}
              onChange={handleChange}
              placeholder="e.g., Bangalore 560001"
              className="input"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50"
          >
            Submit
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
          {" "}
          {/* Accessibility */}
          {/* Process Step 1 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-1-title"
          >
            {" "}
            {/* Accessibility */}
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
                {" "}
                {/* Accessibility */}
                <IoSearch size={20} aria-hidden="true" /> {/* Accessibility */}
              </button>
            </div>
          </div>
          {/* Process Step 2 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-2-title"
          >
            {" "}
            {/* Accessibility */}
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
                {" "}
                {/* Accessibility */}
                <AiFillTool size={20} aria-hidden="true" />{" "}
                {/* Accessibility */}
              </button>
            </div>
          </div>
          {/* Process Step 3 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-3-title"
          >
            {" "}
            {/* Accessibility */}
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
                {" "}
                {/* Accessibility */}
                <IoSpeedometerSharp size={20} aria-hidden="true" />{" "}
                {/* Accessibility */}
              </button>
            </div>
          </div>
          {/* Process Step 4 */}
          <div
            className="bg-gray-800 rounded-lg p-6 relative flex flex-col h-[300px]"
            aria-labelledby="process-step-4-title"
          >
            {" "}
            {/* Accessibility */}
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
                {" "}
                {/* Accessibility */}
                <FaTruckFast size={20} aria-hidden="true" />{" "}
                {/* Accessibility */}
              </button>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrify;
