import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import winterServices from "../data/winterServices.json";
import { Cat, Snowflake } from "lucide-react";

const Homepage = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
    "https://images.unsplash.com/photo-1515992854631-13de43baeba1?w=1200&q=80",
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80",
  ];

  const tips = [
    "Keep walks short in freezing temperatures.",
    "Use pet-safe ice melt to protect paws.",
    "Provide extra bedding for warmth at night.",
    "Never leave pets in cold cars or outdoors unattended.",
  ];

  const vets = [
    {
      name: "Dr. Sarah Lee",
      specialty: "Canine Nutrition",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    },
    {
      name: "Dr. James Patel",
      specialty: "Feline Health",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    },
    {
      name: "Dr. Mia Rodriguez",
      specialty: "Senior Pet Care",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    },
  ];

  const topServices = winterServices.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Swiper */}
      <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          className="h-96 rounded-2xl"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-96 w-full">
                <img
                  src={img}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("Image load error:", img);
                    e.target.src =
                      "https://via.placeholder.com/1200x400?text=Pet+Care";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to from-black/60 to-transparent flex items-center justify-center">
                  <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-lg">
                    Keep Your Pets Cozy This Winter
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Winter Care Services */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-white">
            Popular Winter Care Services
          </h2>
          <Link
            to="/services"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service) => (
            <div
              key={service.serviceId}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">
                    {service.serviceName}
                  </h3>
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-bold">
                    ${service.price}
                  </span>
                  <div>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300 ml-1">{service.rating}</span>
                  </div>
                </div>
                <Link
                  to={`/service/${service.serviceId}`}
                  className="mt-4 block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Winter Care Tips */}
      <div className="mb-16 bg-gray-800 p-6 rounded-xl border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Snowflake className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">
            Winter Care Tips for Pets
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <div className="bg-gray-700/50 rounded-lg p-8 text-center w-full">
              <Cat className="w-24 h-24 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Winter pet care</p>
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Experts */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vets.map((vet, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:border-blue-500 transition-all duration-300"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">{vet.name}</h3>
              <p className="text-gray-400 text-sm">{vet.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        }
        .swiper-pagination-bullet {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
