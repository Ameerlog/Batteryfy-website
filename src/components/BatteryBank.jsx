import { Link } from "react-router-dom";
import Batteryfy from "../assets/BatteryfyBank.gif";

export default function BatteryBank() {
  return (
    <div className="h-full bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl relative overflow-hidden text-white lg:px-14 pb-8 lg:pb-0">
      <div className="flex-1 text-center mb-12 lg:mb-0 lg:pr-12 pt-6 flex justify-center items-center">
        <div className="mb-6 capitalize">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1">
            Batteryfy the planet,
            <span className="block">save the climate.</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-lime-500 bg-clip-text text-transparent mb-8">
            India's Largest Batteryfying network.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start sm:gap-16 gap-0">
          <div className="order-1 lg:order-2 sm:flex-1 relative flex justify-center lg:justify-end -mt-44 sm:-ml-5 md:ml-0 md:-mt-44  sm:-mt-96">
            <img src={Batteryfy} alt="Batteryfy" className="h-3/4 w-3/4" />
          </div>
          <div className="order-2 lg:order-1 flex-1 text-white space-y-2 sm:space-y-2 -mt-36 sm:-mt-14  md:-mt-72 md:text-center lg:mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 leading-tight capitalize ">
              Be the Change, Bank your Battery Today.
            </h2>
            <div className="relative z-50 mb-8">
              <Link to="/login">
                <button className="my-2 px-[45px] py-[15px] text-white transition-all duration-500 bg-gradient-to-r from-[#3CA55C] via-[#B5AC49] to-[#3CA55C] bg-[length:200%_auto] bg-left hover:bg-right rounded-[10px] border-none cursor-pointer z-50">
                  Batteryfy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
