import { Suspense, lazy, useEffect } from "react";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

import BatteryBank from "../components/BatteryBank";
const HeroSection = lazy(() => import("../components/HeroSection"));
const Products = lazy(() => import("../components/Products"));
const Batteryfy = lazy(() => import("../components/Batteryfy"));
const FloatingButtons = lazy(() => import("../components/FloatingButtons"));

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="relative">
      <Suspense fallback={<Loading />}>
        <BatteryBank />
        <HeroSection />
        <Products />
        <Batteryfy />
        <FloatingButtons />
      </Suspense>
    </div>
  );
};

export default HomePage;
