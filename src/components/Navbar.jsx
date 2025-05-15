// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-xl font-bold text-white">Batteryfy</span>
//           </div>
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-[#2e96ff] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               >
//                 Retrofit
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-[#2e96ff] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               >
//                 Charging
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-[#2e96ff] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               >
//                 Shop
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-[#2e96ff] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               >
//                 Impact
//               </a>
//               <button className="bg-[#2e96ff] hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-colors duration-200">
//                 Download App
//               </button>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             {/* Mobile menu button */}
//             <button
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Heroicon name: menu */}
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               {/* Heroicon name: x */}
//               <svg
//                 className="hidden h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state. */}
//       <div className="md:hidden">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a
//             href="#"
//             className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium "
//           >
//             Retrofit
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-[#2e96ff]  block px-3 py-2 rounded-md text-base font-medium "
//           >
//             Charging
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-[#2e96ff] block px-3 py-2 rounded-md text-base font-medium "
//           >
//             Shop
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-[#2e96ff] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Impact
//           </a>
//           <button className="bg-[#2e96ff] hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full block w-full text-center text-lg transition-colors duration-200">
//             Download App
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full py-4 
         fixed top-0 shadow-md bg-gray-800 text-white
       z-50 transition-all duration-300 sm:px-10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-10 w-auto">
            <a href="/">
              <img
                src={Logo}
                alt="Batteryfy Logo"
                className="max-h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/retrofit" className="text-white hover:text-[#2e96ff]">
              Retrofit
            </a>
            <a href="/charging" className="text-white hover:text-[#2e96ff]">
              Charging
            </a>
            <a href="/shop" className="text-white hover:text-[#2e96ff]">
              Shop
            </a>
            <a href="/impact" className="text-white hover:text-[#2e96ff]">
              Impact
            </a>
            <a
              href="/download"
              className="px-4 py-2 rounded-full font-medium text-white hover:bg-sky-700"
              style={{ backgroundColor: "#2e96ff" }}
            >
              Download App
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className=" hover:text-gray-900 focus:outline-none text-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a
              href="/retrofit"
              className="text-white hover:text-[#2e96ff] py-2"
            >
              Retrofit
            </a>
            <a
              href="/charging"
              className="text-white hover:text-[#2e96ff] py-2"
            >
              Charging
            </a>
            <a href="/shop" className="text-gray-600 hover:text-[#2e96ff] py-2">
              Shop
            </a>
            <a href="/impact" className="text-white hover:text-[#2e96ff] py-2">
              Impact
            </a>
            <a
              href="/download"
              className="inline-block px-4 py-2 rounded-full font-medium text-white text-center hover:bg-sky-700"
              style={{ backgroundColor: "#2e96ff" }}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
