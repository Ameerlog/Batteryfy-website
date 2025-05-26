import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

import HomePage from "./Pages/HomePage";
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

const Login = lazy(() => import("./components/Login"));
const BatteryfyBankSystem = lazy(() =>
  import("./components/BatteryfyBankSystem")
);
const DepositForm = lazy(() => import("./components/DepositForm"));
const WithdrawForm = lazy(() => import("./components/WithdrawForm"));
const BorrowForm = lazy(() => import("./components/BorrowForm"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/battery-conversion" element={<Retrify />} />
          <Route path="/ev-charging-stations" element={<BookStations />} />
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
          <Route path="/sos-emergency" element={<SOSEmergencySystem />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
