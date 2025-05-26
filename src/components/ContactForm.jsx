import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const formSubmissionPromise = new Promise((resolve, reject) => {
      fetch("https://formcarry.com/s/6YFCL7gWHWM", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.code === 200) {
            setName("");
            setEmail("");
            setMessage("");
            resolve("We received your submission, thank you!");
          } else if (response.code === 422) {
            reject(response.message || "Form validation failed.");
          } else {
            reject(
              response.message ||
                "An unexpected error occurred during submission."
            );
          }
        })
        .catch((error) => {
          reject(error.message || "Network error. Please try again later.");
        });
    });

    toast.promise(formSubmissionPromise, {
      pending: "Sending your message...",
      success: (message) => message,
      error: (error) => error,
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
          className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your Email"
          className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your Message"
          className="mt-1 p-2 w-full rounded-md bg-black/20 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500/90 hover:bg-green-500 text-white py-3 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
