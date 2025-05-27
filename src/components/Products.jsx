import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

import Product1 from "../assets/11.png";
import Product4 from "../assets/12.png";
import Product2 from "../assets/13.png";
import Product5 from "../assets/3.png";
import Product3 from "../assets/5.png";
import Product6 from "../assets/7.png";
import Product7 from "../assets/9.png";

const dummyProducts = [
  {
    id: 1,
    title: "Charging Station",
    desc: "Rechargeable Charging Stations powered by solar energy. Ideal for outdoor and indoor use.",
    image: Product1,
    variants: [
      { type: " 1.4 – 2.4 kW", price: 6000 },
      { type: "3.3 – 22 kW", price: 7000 },
      { type: "25 – 350 kW (DC)", price: 9000 },
    ],
  },
  {
    id: 2,
    title: "Electric Bicycle",
    desc: "Pedal-assisted e-bicycle with lithium battery, 50km range, and disc brakes.",
    image: Product2,
    variants: [
      { type: "Low-Speed E-Bikes", price: 12000 },
      { type: "Hybrid E-Bikes", price: 20000 },
      { type: "City Commuter", price: 31999 },
      { type: "Mountain Terrain", price: 44999 },
    ],
  },
  {
    id: 3,
    title: "Electric MotorCycles",
    desc: "electric scooter with removable battery and 70–90 km range.",
    image: Product3,
    variants: [
      { type: "Commuter", price: 22000 },
      { type: "SportsBike", price: 28900 },
      { type: "Cruiser", price: 38900 },
      { type: "Adventure", price: 64900 },
    ],
  },
  {
    id: 4,
    title: "Electric Tricycles",
    desc: "Three-wheeler electric rickshaw with durable chassis and 120 km per charge.",
    image: Product4,
    variants: [
      { type: "Cargo", price: 149000 },
      { type: "Mobility", price: 152000 },
      { type: "Folding", price: 132000 },
      { type: "Passenger", price: 179000 },
    ],
  },
  {
    id: 5,
    title: "Electric cars",
    desc: "electric SUV with Ziptron technology, 312–465 km range and fast charging.",
    image: Product5,
    variants: [
      { type: "HatchBacks", price: 250000 },
      { type: "Sedans", price: 1899000 },
      { type: "SUVs", price: 2259000 },
      { type: "Prime (Medium Range)", price: 4499000 },
      { type: "Max (Long Range)", price: 7799000 },
    ],
  },
  {
    id: 6,
    title: "Commercial vehicles",
    desc: "Heavy-duty electric truck with 200km range and smart fleet tracking support.",
    image: Product6,
    variants: [
      { type: "Light Commercial", price: 550000 },
      { type: "Heavy Commercial", price: 4699999 },
      { type: "6 Wheel", price: 6699999 },
      { type: "10 Wheel", price: 8399999 },
    ],
  },
  {
    id: 7,
    title: "Heavy Duty Machineries",
    desc: "Zero-emission electric bus ideal for city transit, 200–300 km per charge.",
    image: Product7,
    variants: [
      { type: "Forklifts", price: 750000 },
      { type: "Excavators", price: 15000000 },
      { type: "Loaders", price: 12000000 },
      { type: "Dump Trucks", price: 30000000 },
      { type: "Cranes", price: 20000000 },
      { type: "Tractors", price: 8000000 },
      { type: "Mining", price: 50000000 },
    ],
  },
];

const GetQuoteModal = ({ show, onClose, product, variant, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const prefillUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setFormData((prev) => ({
              ...prev,
              name: userData.displayName || "",
              email: userData.email || "",
              phone: userData.phoneNumber
                ? userData.phoneNumber.replace("+91", "")
                : "",
            }));
            toast.info("Pre-filled form with your details!", {
              toastId: "form-prefill",
              autoClose: 2000,
            });
          }
        } catch (error) {
          console.error("Error pre-filling form with user data:", error);
          toast.warn("Could not pre-fill your details. Please fill manually.", {
            toastId: "form-prefill-error",
          });
        }
      }
    };

    prefillUserData();
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      await toast.promise(
        onSubmit({
          productTitle: product.title,
          variantType: variant.type,
          variantPrice: variant.price,
          ...formData,
          phone: `+91${formData.phone.trim()}`,
          userId: auth.currentUser ? auth.currentUser.uid : null,
          timestamp: serverTimestamp(),
        }),
        {
          pending: "Sending your quote request...",
          success: "Quote request sent successfully! We will contact you soon.",
          error: "Failed to send quote request. Please try again.",
        }
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (error) {
      toast.error("Error submitting quote request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-blue-400 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-green-400"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Get a Quote for {product.title}
        </h2>
        <p className="text-gray-300 mb-4 text-center">
          <span className="font-semibold">{variant.type}</span> - ₹
          {variant.price.toLocaleString()}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-green-400 outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-green-400 outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-white text-sm font-bold mb-1"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-green-400 outline-none"
              required
              maxLength="10"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-bold mb-1"
            >
              Your Message (Optional):
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Any specific features, customization, or details you need?"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-green-400 outline-none"
              disabled={isSubmitting}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Quote Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedVariants, setSelectedVariants] = useState(
    dummyProducts.map((product) => product.variants[0])
  );
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [currentProductForQuote, setCurrentProductForQuote] = useState(null);
  const [currentVariantForQuote, setCurrentVariantForQuote] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (
          location.state?.redirectTo === "/" &&
          location.state.product &&
          location.state.variant
        ) {
          const { product, variant } = location.state;
          window.history.replaceState({}, document.title, location.pathname);
          setCurrentProductForQuote(product);
          setCurrentVariantForQuote(variant);
          setShowQuoteModal(true);
          toast.success("Welcome back! Please complete your quote request.", {
            toastId: "welcome-back-quote",
          });
        }
      }
    });

    return () => unsubscribe();
  }, [location.state, navigate, location.pathname]);

  const handleVariantChange = (productIndex, variantType) => {
    const updated = [...selectedVariants];
    const selected = dummyProducts[productIndex].variants.find(
      (v) => v.type === variantType
    );
    updated[productIndex] = selected;
    setSelectedVariants(updated);
  };

  const handleGetQuoteClick = (product, variant) => {
    const user = auth.currentUser;
    if (!user) {
      toast.info("Please log in to get a quote.", { toastId: "login-prompt" });
      navigate("/login", { state: { redirectTo: "/", product, variant } });
      return;
    }

    setCurrentProductForQuote(product);
    setCurrentVariantForQuote(variant);
    setShowQuoteModal(true);
  };

  const handleCloseQuoteModal = () => {
    setShowQuoteModal(false);
    setCurrentProductForQuote(null);
    setCurrentVariantForQuote(null);
  };

  const handleSendQuoteRequestToFirebase = async (quoteDetails) => {
    try {
      await addDoc(collection(db, "quoteRequests"), quoteDetails);
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw new Error(
        "Failed to save quote request to Firebase. Check console for details."
      );
    }
  };

  return (
    <div
      className="pb-16 text-white max-w-full mx-auto pt-10 p-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      id="products"
      aria-labelledby="products-section-title"
    >
      <div className="text-center mb-12" aria-labelledby="marketplace-info">
        <div className="text-green-400 uppercase font-semibold text-sm mb-4">
          <span className="bg-gray-950 px-4 py-2 rounded-full">
            ECO-TECH MARKETPLACE
          </span>
        </div>
        <h2 id="products-section-title" className="text-4xl font-bold mb-4">
          Batteryfy <span className="text-white">Life</span>
        </h2>
        <Link to="/" aria-label="Go to the Batteryfy shop">
          <button className="relative border-2 border-green-500 hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
            <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
            <span className="relative z-10">Shop Now</span>
          </button>
        </Link>
      </div>

      <h3
        className="text-xl mb-4 flex justify-between items-center"
        aria-labelledby="featured-products-title"
      >
        <span id="featured-products-title" className="text-xl">
          Featured Categories
        </span>
        <div className="flex gap-2">
          <div className="swiper-button-prev-custom text-green-400 cursor-pointer text-xl">
            <FaChevronLeft />
          </div>
          <div className="swiper-button-next-custom text-green-400 cursor-pointer text-xl">
            <FaChevronRight />
          </div>
        </div>
      </h3>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        className="products-swiper mb-12"
        aria-label="Featured product carousel"
      >
        {dummyProducts.map((product, index) => (
          <SwiperSlide key={product.id} className="h-full">
            <div className="group bg-transparent rounded-lg overflow-hidden flex flex-col h-1/2 border border-blue-400">
              <div className="relative aspect-square w-full h-40 bg-transparent">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    {product.title}
                  </h4>
                  <p className="flex items-center gap-2">
                    <span>starts from</span>
                    <span className="font-bold text-lg">
                      ₹{selectedVariants[index]?.price.toLocaleString()}
                    </span>
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-col mb-2">
                    <label
                      htmlFor={`variant-${product.id}`}
                      className="text-sm pb-1"
                    >
                      Select Variant
                    </label>
                    <select
                      id={`variant-${product.id}`}
                      className="bg-gray-700 text-white px-3 py-1 rounded-md"
                      value={selectedVariants[index]?.type}
                      onChange={(e) =>
                        handleVariantChange(index, e.target.value)
                      }
                    >
                      {product.variants.map((variant, idx) => (
                        <option key={idx} value={variant.type}>
                          {variant.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full mt-2"
                      aria-label={`Get a quote for ${product.title}`}
                      onClick={() =>
                        handleGetQuoteClick(product, selectedVariants[index])
                      }
                    >
                      Get Quotes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quote Modal */}
      {showQuoteModal && currentProductForQuote && currentVariantForQuote && (
        <GetQuoteModal
          show={showQuoteModal}
          onClose={handleCloseQuoteModal}
          product={currentProductForQuote}
          variant={currentVariantForQuote}
          onSubmit={handleSendQuoteRequestToFirebase}
        />
      )}
    </div>
  );
};

export default Products;
