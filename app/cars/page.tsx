'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import CarCard from '@/components/CarCard';
import FilterBar from '@/components/FilterBar';
import { carsData } from '@/data/carsData';

export default function CarsPage() {
  const [filters, setFilters] = useState({
    make: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const makes = useMemo(() => {
    const uniqueMakes = new Set(carsData.map(car => car.make));
    return Array.from(uniqueMakes).sort();
  }, []);

  const locations = useMemo(() => {
    const uniqueLocations = new Set(carsData.map(car => car.location));
    return Array.from(uniqueLocations).sort();
  }, []);

  const filteredCars = useMemo(() => {
    return carsData.filter(car => {
      if (filters.make && car.make !== filters.make) return false;
      if (filters.location && car.location !== filters.location) return false;
      if (filters.minPrice && car.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Our Cars</h1>
          <p className="text-gray-600 text-lg">
            Discover {filteredCars.length} verified vehicles ready for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterBar
              onFilter={setFilters}
              makes={makes}
              locations={locations}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-500 text-lg">
                  No cars found matching your filters. Try adjusting your search criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
