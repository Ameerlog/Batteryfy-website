import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    pincode: "",
    vehicleType: "",
    makeModel: "",
    fuelType: "Petrol",
    notes: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Form submitted successfully:", form);
    // Add your API logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-300 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/60 backdrop-blur-md border border-white/30 shadow-xl rounded-xl p-8 space-y-6"
      >
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 text-center">
            Retrofitting Registration
          </h1>
          <p className="text-sm text-center text-gray-600 mt-1">
            Let’s Electrify Your Ride ⚡
          </p>
        </div>
        php-template Copy Edit
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="input"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            pattern="[0-9]{6}"
            required
            className="input"
          />
        </div>
        {/* Vehicle Info */}
        <h3 className="text-lg font-medium text-gray-700">
          Vehicle Information
        </h3>
        <select
          name="vehicleType"
          value={form.vehicleType}
          onChange={handleChange}
          required
          className="input w-full"
        >
          <option value="">Select Vehicle Type</option>
          <option value="Bike">Bike</option>
          <option value="Auto">Auto</option>
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="makeModel"
          placeholder="Make & Model (e.g. Hero Splendor 2015)"
          value={form.makeModel}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <select
          name="fuelType"
          value={form.fuelType}
          onChange={handleChange}
          required
          className="input w-full"
        >
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="LPG">LPG</option>
          <option value="CNG">CNG</option>
        </select>
        <textarea
          name="notes"
          placeholder="Any Custom Requests or Notes (Optional)"
          value={form.notes}
          onChange={handleChange}
          className="input w-full h-24 resize-none"
        />
        {/* Agreement */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-sm text-gray-700">
            I agree to Batteryfy’s Terms & Conditions and Privacy Policy
          </label>
        </div>
        {/* Submit */}
        <button
          type="submit"
          disabled={!form.agree}
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold py-2 rounded-lg shadow-md transition-all disabled:opacity-50"
        >
          🔋 Request My Conversion
        </button>
      </form>
    </div>
  );
}

export default Form;
