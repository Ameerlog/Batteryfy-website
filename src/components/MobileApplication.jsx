import {
  FaApple,
  FaCalendarCheck,
  FaGooglePlay,
  FaQrcode,
  FaRoute,
} from "react-icons/fa";

import { IoSpeedometer } from "react-icons/io5";
import AppDownload from "../assets/AppDownload.png";

function MobileApplication() {
  return (
    <div
      className="min-h-screen bg-[#090d1f] text-white sm:px-12"
      aria-labelledby="mobile-app-section-title" // Accessibility: Label the section
    >
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div
          className="w-full md:w-1/2 space-y-10"
          aria-labelledby="mobile-app-info"
        >
          {" "}
          {/* Accessibility */}
          <div className="flex items-center justify-center flex-col">
            <div className="text-sky-500 text-sm font-medium px-4 py-2 rounded-full w-fit mb-6">
              <span className="bg-[#1e2737] px-4 py-2 rounded-full">
                MOBILE APP
              </span>
            </div>
            <h1
              id="mobile-app-section-title"
              className="text-3xl sm:text-5xl font-bold mb-4"
            >
              Power in Your <span className="text-[#3b82f6]">Pocket</span>
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg text-center">
              Download the Batteryfy app to manage your retrofitting process,
              book charging slots, and shop for eco-products—all from your
              smartphone.
            </p>
          </div>
          {/* Features */}
          <div className="space-y-8" aria-label="App features">
            {" "}
            {/* Accessibility */}
            <div
              className="flex items-start gap-5"
              aria-labelledby="feature-charging-stations"
            >
              {" "}
              {/* Accessibility */}
              <div className="bg-gray-900 p-4 rounded-full">
                <FaRoute className="text-xl text-sky-500" aria-hidden="true" />{" "}
                {/* Accessibility */}
              </div>
              <div id="feature-charging-stations">
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Find Charging Stations
                </h3>
                <p className="text-gray-400">
                  Locate and navigate to the nearest available charging stations
                  in real-time.
                </p>
              </div>
            </div>
            <div
              className="flex items-start gap-5"
              aria-labelledby="feature-book-manage-slots"
            >
              {" "}
              {/* Accessibility */}
              <div className="bg-gray-900 px-4 py-4 rounded-full">
                <FaCalendarCheck
                  className="text-xl text-green-500"
                  aria-hidden="true"
                />{" "}
                {/* Accessibility */}
              </div>
              <div id="feature-book-manage-slots">
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Book & Manage Slots
                </h3>
                <p className="text-gray-400">
                  Reserve charging slots in advance and receive notifications
                  when it's time to charge.
                </p>
              </div>
            </div>
            <div
              className="flex items-start gap-5"
              aria-labelledby="feature-track-retrofit"
            >
              {" "}
              {/* Accessibility */}
              <div className="bg-gray-900 p-4 rounded-full">
                <IoSpeedometer
                  className="text-xl text-purple-500"
                  aria-hidden="true"
                />{" "}
                {/* Accessibility */}
              </div>
              <div id="feature-track-retrofit">
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Track Retrofit Progress
                </h3>
                <p className="text-gray-400">
                  Monitor your vehicle's conversion status and receive updates
                  at every stage.
                </p>
              </div>
            </div>
          </div>
          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4" aria-label="Download options">
            {" "}
            {/* Accessibility */}
            <a
              href="https://apple.com/app-store" // Replace with actual App Store link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg"
              aria-label="Download on the App Store" // Accessibility
            >
              <FaApple className="text-2xl" aria-hidden="true" />{" "}
              {/* Accessibility */}
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store" // Replace with actual Google Play link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg"
              aria-label="Get it on Google Play" // Accessibility
            >
              <FaGooglePlay className="text-2xl" aria-hidden="true" />{" "}
              {/* Accessibility */}
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
            <button
              className="flex items-center gap-2 bg-[#1e2737] text-white py-3 px-6 rounded-lg"
              aria-label="Scan QR code to download" // Accessibility
            >
              <FaQrcode className="text-2xl" aria-hidden="true" />{" "}
              {/* Accessibility */}
              <div className="text-left">
                <div className="text-xs">Scan to</div>
                <div className="font-semibold">Download</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Phone Image */}
        <div
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          aria-hidden="true"
        >
          {" "}
          {/* Accessibility */}
          <img
            src={AppDownload}
            alt="Batteryfy App Interface"
            className="max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileApplication;
