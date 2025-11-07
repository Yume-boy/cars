'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MapPin, Gauge, Fuel, Calendar, Settings, ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import CarCard from '@/components/CarCard';

interface Car {
  id: number;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  location: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  verified: boolean;
  featured: boolean;
  image: string;
  images: string[];
  description: string;
}

interface Props {
  car: Car;
  similarCars: Car[];
}

export default function CarDetailClient({ car, similarCars }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/cars" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to All Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-96">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={car.images[currentImageIndex]}
                    alt={`${car.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {car.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    Verified
                  </div>
                )}

                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {car.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-4">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-orange-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="w-5 h-5" />
                <span>{car.location}</span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Price</p>
                <p className="text-4xl font-bold text-orange-600">
                  ₦{car.price.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-500">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Gauge className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-500">Mileage</p>
                    <p className="font-semibold">{car.mileage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Fuel className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-500">Fuel Type</p>
                    <p className="font-semibold">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:+2348001234567`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Book Inspection
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{car.description}</p>
        </div>

        {similarCars.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
