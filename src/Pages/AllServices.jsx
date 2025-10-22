// src/Pages/AllServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import winterServices from "../data/winterServices.json";

const AllServices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-8">All Winter Services</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {winterServices.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <p className="font-bold mb-4">Price: ${service.price}</p>

              {/* View Details Button */}
              <Link
                to={`/service/${service.serviceId}`}
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
