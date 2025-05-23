import { Link, useNavigate } from "react-router-dom";

import image1 from "../assets/14.png";
import image2 from "../assets/4.png";
import image3 from "../assets/10.png";
import image4 from "../assets/1.png";
import image5 from "../assets/6.png";
import image6 from "../assets/8.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "BiCycles",
      description: "Convert manual bicycles to electric",
      imageUrl: image1,
      vehicleType: "Bicycle",
      points: ["Batteryfy manual bicycles", "Charge bicycles"],
    },
    {
      title: "Motorcycles",
      description: "Retrofit petrol two-wheelers to EV",
      imageUrl: image2,
      vehicleType: "Two-Wheeler",
      points: ["Batteryfy manual 2 Wheelers", "Charge 2 Wheelers"],
    },
    {
      title: "TriCycles",
      description: "Aftermarket EV retrofitting for cars",
      imageUrl: image3,
      vehicleType: "Three-Wheeler",
      points: ["Batteryfy manual 3 Wheelers", "Charge 3 Wheelers"],
    },
    {
      title: "Cars",
      description: "Convert trucks and heavy vehicles",
      imageUrl: image4,
      vehicleType: "Four-Wheeler",
      points: ["Batteryfy manual 4 Wheelers", "Charge 4 Wheelers"],
    },
    {
      title: "Commercial vehicles",
      description: "Aftermarket EV retrofitting for cars",
      imageUrl: image5,
      vehicleType: "Six-Wheeler / Commercial Vehicle",
      points: ["Batteryfy manual 6 Wheelers", "Charge 6 Wheelers"],
    },
    {
      title: "Heavy Duty Machineries",
      description: "Convert trucks and heavy vehicles",
      imageUrl: image6,
      vehicleType: "Heavy-Duty Machinery",
      points: [
        "Batteryfy manual Heavy Duty Vehicles",
        "Charge Heavy Duty Vehicles",
      ],
    },
  ];
  return (
    <section
      className="min-h-screen bg-gray-950 p-4 sm:p-8 sm:pt-2 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Vehicle conversion options"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-transparent rounded-xl overflow-hidden border border-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] aspect-square"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-end pb-4 gap-12 bg-gradient-to-t from-black/60 to-transparent">
                <button
                  className="border-2 border-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:text-blue-400"
                  onClick={() =>
                    navigate("/battery-conversion", {
                      state: { vehicleType: card.vehicleType },
                    })
                  }
                >
                  Batteryfy
                </button>
                {index != 0 && (
                  <Link to="/ev-charging-stations">
                    <button className="border-2 border-green-500  text-white px-4 py-2 rounded-full text-sm font-medium hover:text-green-400">
                      Charge
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
