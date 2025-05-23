import { FaSpinner } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl">
      <div className="flex flex-col items-center space-y-4">
        <FaSpinner className="animate-spin text-green-600 text-7xl">
          <GiElectric className="animate-pulse text-green-500 text-2xl" />
        </FaSpinner>
        <p className="text-xl text-white font-semibold">Batteryfying you...</p>
      </div>
    </div>
  );
};

export default Loading;
