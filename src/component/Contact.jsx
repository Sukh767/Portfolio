import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const { darkMode } = useDarkMode();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/ajjezvea", data);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      name="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-gray-50 to-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold inline-block border-b-4 pb-2 ${
              darkMode ? "text-white border-blue-500" : "text-gray-900 border-blue-500"
            }`}
          >
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className={`mt-4 text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            I’d love to hear from you — let’s connect!
          </p>
        </motion.div>

        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left Side - Illustration */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dbotqrsil/image/upload/v1745064476/5124556-Photoroom_ovtgfk.png"
              alt="Contact illustration"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`w-full lg:w-1/2 p-8 rounded-xl shadow-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* Name */}
            <div className="mb-6">
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <User className="h-5 w-5" />
                </div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm`}
                />
              </div>
              {errors.name && (
                <p className={`mt-2 text-sm ${
                  darkMode ? "text-red-400" : "text-red-600"
                }`}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm`}
                />
              </div>
              {errors.email && (
                <p className={`mt-2 text-sm ${
                  darkMode ? "text-red-400" : "text-red-600"
                }`}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <div className="relative">
                <div className={`absolute top-3 left-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <MessageSquare className="h-5 w-5" />
                </div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm`}
                ></textarea>
              </div>
              {errors.message && (
                <p className={`mt-2 text-sm ${
                  darkMode ? "text-red-400" : "text-red-600"
                }`}>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-md transition-all ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 text-white" />
                  <p className="text-white">Send Message</p>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
