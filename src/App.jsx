// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./Pages/HomePage";
// import RetrofitFrom from "./components/RetrofitFrom";
// import Retrify from "./components/Retrify";
// import BookStations from "./components/BookStations";
// import FAQSection from "./components/FAQSection";
// import AboutUs from "./components/AboutUs";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsConditions from "./components/TermsConditions";
// import ContactUs from "./components/ContactUs";
// import SOSEmergencySystem from "./components/SOSEmergencySystem";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/retrify" element={<Retrify />} />
//         <Route path="/book" element={<BookStations />} />
//         <Route path="/faqs" element={<FAQSection />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//         <Route path="/terms" element={<TermsConditions />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/sos" element={<SOSEmergencySystem />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Login from "./components/Login";
import BatteryfyBankSystem from "./components/BatteryfyBankSystem";
import DepositForm from "./components/DepositForm";
import WithdrawForm from "./components/WithdrawForm";
import BorrowForm from "./components/BorrowForm";
// import Login from "./components/Login";

// Lazy load components
const HomePage = lazy(() => import("./Pages/HomePage"));
const Retrify = lazy(() => import("./components/Retrify"));
const BookStations = lazy(() => import("./components/BookStations"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const SOSEmergencySystem = lazy(() =>
  import("./components/SOSEmergencySystem")
);
// const RetrofitFrom = lazy(() => import("./components/RetrofitFrom"));
// const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/retrofit" element={<RetrofitFrom />} /> */}
          <Route
            path="/battery-conversion"
            element={
              <Retrify />
              // <PrivateRoute>
              // </PrivateRoute>
            }
          />
          <Route
            path="/ev-charging-stations"
            element={
              <BookStations />
              // <PrivateRoute>
              // </PrivateRoute>
            }
          />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bank-system" element={<BatteryfyBankSystem />} />
          <Route path="/deposit" element={<DepositForm />} />
          <Route path="/withdraw" element={<WithdrawForm />} />
          <Route path="/borrow" element={<BorrowForm />} />
          <Route
            path="/sos-emergency"
            element={
              <SOSEmergencySystem />
              // <PrivateRoute>
              // </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
