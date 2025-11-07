'use client';

import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Gauge, Fuel } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CarCard({ car }) {
  return (
    <Link href={`/cars/${car.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {car.verified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              Verified
            </motion.div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
          <p className="text-2xl font-bold text-orange-600 mb-4">
            ₦{car.price.toLocaleString()}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {car.location}
            </div>
            <div className="flex items-center gap-1">
              <Gauge className="w-4 h-4" />
              {car.mileage}
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              {car.fuelType}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-orange-600 font-medium group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
