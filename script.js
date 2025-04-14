import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-2xl shadow-lg transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function HotelHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-[80vh] relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Experience Luxury at Its Finest
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Book your dream stay with us today
            </p>
            <Button>Book Now</Button>
          </motion.div>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Rooms
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((room) => (
            <motion.div
              key={room}
              className="rounded-2xl shadow-md overflow-hidden bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: room * 0.2 }}
            >
              <img
                src={`https://source.unsplash.com/600x400/?hotel-room,interior,luxury&sig=${room}`}
                alt={`Room ${room}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Deluxe Room {room}
                </h3>
                <p className="text-gray-600 mb-4">
                  Elegant design, sea view, king-size bed, and modern
                  amenities.
                </p>
                <Button className="w-full">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Amenities
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Spa", "Infinity Pool", "Private Beach", "Fine Dining"].map(
            (item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm text-gray-500">
                  Top-class service and unforgettable experience
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* References */}
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Trusted by Leading Hotels
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {["Kaani Hotel", "Arena Hotels", "Somerset", "Maagiri"].map(
            (name, index) => (
              <motion.div
                key={index}
                className="text-lg font-semibold text-gray-700 border border-gray-300 rounded-2xl px-6 py-4 bg-white shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {name}
              </motion.div>
            )
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Paradise Hotel. All rights reserved.</p
