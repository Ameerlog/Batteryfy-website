// import { useState } from "react";
// import {
//   IoBatteryFullOutline,
//   IoFlashOutline,
//   IoArrowForward,
//   IoInformationCircleOutline,
//   IoCloudDoneOutline,
//   IoShieldCheckmarkOutline,
//   IoSettingsOutline,
// } from "react-icons/io5";
// // import Batteryfy from "../assets/Batteryfy.gif";
// import Batteryfy from "../assets/Batteryfy1.gif";

// export default function BatteryBank() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl flex items-center p-6 lg:p-12">
//       <div className="container mx-auto max-w-6xl">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start sm:gap-16 ">
//           {/* Left Content - Text */}
//           <div className="order-2 lg:order-1 flex-1 text-white space-y-8 sm:space-y-8">
//             <div className="flex items-center gap-2">
//               <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 border border-white/20">
//                 <IoFlashOutline className="text-white" size={16} />
//                 Clean Energy Storage
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//               Energy Freedom
//               <span className="block font-light text-3xl md:text-4xl lg:text-5xl pt-2">
//                 For your everyday life
//               </span>
//             </h1>

//             <p className="text-lg text-white/90 max-w-xl leading-relaxed font-light">
//               Store solar energy during the day and use it at night. Our
//               advanced battery bank technology makes sustainable living simple,
//               with industry-leading capacity and intelligent power management.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-5 pt-4">
//               <button
//                 className="px-6 py-3 bg-white text-blue-900 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 font-medium"
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//               >
//                 Buy Now
//                 <IoArrowForward
//                   size={18}
//                   className={`transition-transform duration-300 ${
//                     hovered ? "translate-x-1" : ""
//                   }`}
//                 />
//               </button>

//               <button className="px-6 py-3 text-white rounded-full hover:bg-white/10 transition-all font-medium">
//                 Learn More
//               </button>
//             </div>

//             <div className="pt-6 flex flex-wrap gap-6 text-sm text-white/80">
//               <div className="flex items-center gap-2">
//                 <IoShieldCheckmarkOutline size={20} className="text-white" />
//                 <span>10-Year Warranty</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <IoCloudDoneOutline size={20} className="text-white" />
//                 <span>Smart App Integration</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <IoSettingsOutline size={20} className="text-white" />
//                 <span>Easy Installation</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Image/Visual in Apple style */}
//           <div className="order-1 lg:order-2 flex-1 relative flex justify-center lg:justify-end -ml-5 sm:-mt-32 -mt-24">
//             <img src={Batteryfy} alt="Batteryfy" className="h-3/4 w-3/4 " />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import {
  IoFlashOutline,
  IoArrowForward,
  IoCloudDoneOutline,
  IoShieldCheckmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Batteryfy from "../assets/Batteryfy1.gif";

export default function BatteryBank() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen sm:min-h-full w-full bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-x flex items-center p-4 pt-1 pb-6 lg:p-6">
      <div className="container mx-auto max-w-6xl flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start sm:gap-16 gap-0">
          {/* Image - Appears first on mobile */}
          <div className="order-1 lg:order-2 sm:flex-1 relative flex justify-center  lg:justify-end sm:-ml-5 sm:-mt-32 -mt-24">
            <img src={Batteryfy} alt="Batteryfy" className="h-3/4 w-3/4" />
          </div>

          {/* Text - Appears below image on mobile, left on desktop */}
          <div className="order-2 lg:order-1 flex-1 text-white space-y-2 sm:space-y-8 -mt-36 sm:mt-0">

            <h1 className="text-3xl md:text-5xl lg:text-6xl  tracking-tight text-center capitalize">
              Open your Batteryfy Bank Account for a greener planet.
            </h1>

            <div className="flex justify-center items-center">
              <button className="border-2 border-green-500  text-white px-4 py-2 rounded-full text-sm font-medium hover:text-green-400">
                Open Now
              </button>
            </div>

            <p className="text-lg text-white/90 max-w-xl leading-relaxed font-light text-center">
              {/* Your energy Your bank Your control */}
              Be the Change, Bank your Battery Today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
