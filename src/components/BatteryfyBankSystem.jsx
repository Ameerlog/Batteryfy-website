import {
  FaBolt,
  FaChevronRight,
  FaCloud,
  FaGlobeAmericas,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function BatteryfyBankSystem() {
  return (
    <div className="min-h-screen bg-gray-950 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl text-gray-100 font-sans antialiased">
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Unlock the Power of Your EV Battery.{" "}
            <br className="hidden md:inline" /> Your Vehicle, Your Energy Bank.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Transform your idle electric vehicle into a dynamic energy asset.
            Withdraw, deposit, and borrow power to earn, save, and empower the
            grid.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link to="/deposit">
              <button
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
                               bg-indigo-600 hover:bg-indigo-700 text-white
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Withdraw Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <Link to="/withdraw">
              <button
                className="inline-flex items-center justify-center px-7 py-3 border border-indigo-300 text-base font-semibold rounded-xl shadow-sm
                               bg-white hover:bg-gray-50 text-indigo-700
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Deposit Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <Link to="/borrow">
              <button
                className="inline-flex items-center justify-center px-7 py-3 border border-gray-600 text-base font-semibold rounded-xl shadow-sm
                               text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Borrow Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>
          <p className="mt-12 text-sm text-gray-400 max-w-2xl mx-auto opacity-80">
            Did you know a private vehicle stands idle for an estimated 95% of
            its lifetime? We're changing that by turning idle time into valuable
            energy.
          </p>
        </div>
      </section>
      <main>
        <section className="py-16 lg:py-24 bg-gray-900/50 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <FaBolt className="w-12 h-12 text-green-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Seamless Integration with Renewable Energy
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Harness the power of the sun and wind. Seamlessly charge your EV
                with clean energy and contribute to a greener grid.
              </p>
              <div className="prose prose-lg text-gray-200">
                <p>
                  The combination of a solar panel system/wind energy
                  system/both and electric vehicle charging station brings
                  several benefits and provides a cost-effective way to produce
                  and make use of solar energy/wind energy/both.
                </p>
                <p>
                  We can provide the customer with the type of Renewable Energy
                  panel system that can provide enough energy to fuel their
                  electric car.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">
                  Storing Excess Energy
                </h3>
                <p>
                  Storage of renewable energy is necessary. Otherwise, the power
                  produced must be consumed directly or fed into the public grid
                  – otherwise, it is lost.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Thermal mass and water tanks for solar energy storage.
                  </li>
                  <li>
                    Compressed air storage for wind energy in large tanks or
                    underground caverns.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">
                  Essential Equipment
                </h3>
                <p>
                  Solar inverters are crucial for converting DC to AC. We can
                  build our business around providing inverters at lease, rent,
                  or subscription. The charging port connects to the inverter,
                  sending electricity to the EV battery. We can be your complete
                  solution provider.
                </p>
              </div>
              {/* Learn More button */}
              <button className="inline-flex items-center text-indigo-400 hover:text-indigo-200 font-semibold transition-colors duration-200 ease-in-out mt-8">
                Learn More
                <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
                <FaBolt className="w-24 h-24" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gray-900/50 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <FaGlobeAmericas className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Smart Energy Solutions for a Resilient Grid
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Optimize your energy flow. From frequency regulation to
                supporting grid stability, your EV becomes a vital asset in a
                smart grid.
              </p>
              <div className="prose prose-lg text-gray-200">
                <p>
                  Storage systems bring several benefits apart from storing
                  excess energy. These include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Frequency Rotation (guiding the grid’s electric frequency on
                    a real-time basis).
                  </li>
                  <li>
                    Providing transmission and distribution support which in
                    turn smoothens out the energy flows.
                  </li>
                </ul>
                <p>
                  The easy integration into smart grid structures makes
                  batteries an invaluable asset. Smart solutions will play a
                  fundamental role. If electric vehicles are made part of the
                  grid through a specially modified smart electric vehicle
                  charger, batteries of electric vehicles can provide ancillary
                  services to the power grid while charging the electric vehicle
                  in the most optimal way:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Homes could leverage local photovoltaic (PV) setups paired
                    with storage.
                  </li>
                  <li>
                    For public, commercial, industrial, or apartment buildings,
                    local PV could be paired with large-scale energy storage.
                  </li>
                  <li>
                    Smart chargers with large-scale energy storage could provide
                    energy for fast charging without burdening the power grid.
                  </li>
                </ul>
              </div>
              <button className="inline-flex items-center text-indigo-400 hover:text-indigo-200 font-semibold transition-colors duration-200 ease-in-out mt-8">
                Learn More
                <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
                <FaGlobeAmericas className="w-24 h-24" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <FaCloud className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Join the Virtual Power Plant (VPP) Revolution
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Aggregate your EV's power with a network of distributed energy
                resources, turning your vehicle into a revenue-generating asset.
              </p>
              <div className="prose prose-lg text-gray-200">
                <p>
                  A VPP is a cloud-based/virtual system that aggregates the
                  capacities of heterogeneous distributed energy resources (DER)
                  such as solar power equipment, batteries, electric vehicles,
                  wind turbines, etc.
                </p>
                <p>
                  Key stakeholders include power utilities, renewable energy
                  operators, energy producers and retailers, VPP operators, and
                  building managers. This system functions for power generation,
                  intra and inter electricity trade, sale and purchase of power
                  in the market.
                </p>
                <p>
                  In simple words, VPP is to a traditional energy plant what the
                  internet-connected desktop computers are to the mainframe
                  computer. Both can perform advanced computing tasks, but VPP
                  can also perform energy management functions.
                </p>
              </div>
              <button className="inline-flex items-center text-indigo-400 hover:text-indigo-200 font-semibold transition-colors duration-200 ease-in-out mt-8">
                Learn More
                <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
                <FaCloud className="w-24 h-24" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="py-20 lg:py-28 bg-indigo-700/50 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your EV into an Asset?
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 mb-10">
            Join a growing community of EV owners leveraging their vehicle's
            power for a sustainable and profitable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link to="/deposit">
              <button
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg
                               bg-indigo-600 hover:bg-indigo-700 text-white
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Withdraw Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <Link to="/withdraw">
              <button
                className="inline-flex items-center justify-center px-7 py-3 border border-indigo-300 text-base font-semibold rounded-xl shadow-sm
                               bg-white hover:bg-gray-50 text-indigo-700
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Deposit Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <Link to="/borrow">
              <button
                className="inline-flex items-center justify-center px-7 py-3 border border-gray-600 text-base font-semibold rounded-xl shadow-sm
                               text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2
                               transition-all duration-200 ease-in-out
                               transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Borrow Energy
                <FaChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BatteryfyBankSystem;
