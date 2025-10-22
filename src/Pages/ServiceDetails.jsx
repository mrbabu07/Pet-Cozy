// src/Pages/ServiceDetails.jsx
import React, { useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import winterServices from "../data/winterServices.json";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const service = winterServices.find(s => s.serviceId === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;
  if (!user) return <Navigate to="/signin" state={{ from: `/service/${id}` }} replace />;
  if (!service) return <div className="text-center mt-10 text-white">Service not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thanks ${name}! Your request for "${service.serviceName}" has been sent.`);
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="text-yellow-400 mb-6 hover:underline"
      >
        ← Back
      </button>

      {/* Service Card */}
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-white mb-2">{service.serviceName}</h1>
        <p className="text-gray-300 mb-4">{service.description}</p>

        {/* Service Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-300">
          <div><span className="text-gray-400">Provider:</span> {service.providerName}</div>
          <div><span className="text-gray-400">Price:</span> ${service.price}</div>
          <div><span className="text-gray-400">Rating:</span> ★ {service.rating}</div>
          <div><span className="text-gray-400">Available:</span> {service.slotsAvailable} slots</div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-yellow-400"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
