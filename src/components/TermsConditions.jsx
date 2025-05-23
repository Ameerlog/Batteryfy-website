import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl flex justify-center items-center">
      <div className=" p-8  max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-white">
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Introduction
            </h2>
            <p>
              Welcome to Batteryfy! By accessing or using our services, you
              agree to comply with and be bound by these Terms & Conditions.
              Batteryfy is a visionary brand in the electric vehicle ecosystem
              with the following verticals:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Retrofitting old petrol and diesel vehicles into electric
                vehicles.
              </li>
              <li>
                EV Charging Stations for booking charging slots online across
                cities.
              </li>
              <li>
                Selling sustainable, battery-powered lifestyle products in our
                store.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">Services</h2>
            <p>
              Batteryfy offers a variety of services, including retrofitting
              vehicles, providing EV charging stations, and selling
              eco-friendly, battery-powered products. All services are subject
              to availability and geographic coverage within India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              User Responsibilities
            </h2>
            <p>
              As a user, you agree to use Batteryfy’s services responsibly. This
              includes ensuring the safety of your vehicle and battery-operated
              products, complying with applicable laws, and not engaging in any
              activity that could harm our network or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Payment & Subscription
            </h2>
            <p>
              Users are required to make payments for services like EV
              retrofitting and charging station bookings through our secure
              online platform. All prices are quoted in INR.
            </p>
            <p>
              Batteryfy reserves the right to modify pricing at any time, but
              all prices will be communicated to users before services are
              rendered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Privacy & Data Security
            </h2>
            <p>
              Batteryfy values user privacy and is committed to safeguarding
              your personal information. By using our services, you consent to
              our collection, storage, and use of personal data as outlined in
              our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Liabilities
            </h2>
            <p>
              Batteryfy is not liable for any damages, losses, or injuries
              resulting from the use of our services, except where required by
              Indian law. We also do not guarantee the continuous availability
              of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Modifications
            </h2>
            <p>
              Batteryfy reserves the right to modify these Terms & Conditions at
              any time. Any changes will be effective immediately upon posting
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              Governing Law
            </h2>
            <p>
              These Terms & Conditions are governed by the laws of India, and
              any disputes will be resolved under the jurisdiction of Indian
              courts.
            </p>
          </section>

          {/* <div className="text-center mt-6">
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>Back to Top</span>
              <FaChevronCircleDown className="ml-2" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
