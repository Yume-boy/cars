'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import CarCard from '@/components/CarCard';
import FilterBar from '@/components/FilterBar';
import { carsData } from '@/data/carsData';
import { useSearchParams } from 'next/navigation';

export default function CarsPage() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    make: searchParams.get("make") || '',
    location: searchParams.get("location") || '',
    minPrice: searchParams.get("minPrice") || '',
    maxPrice: searchParams.get("maxPrice") || '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 20;

  

  // Sync filters from URL
  useEffect(() => {
    setFilters({
      make: searchParams.get("make") || "",
      location: searchParams.get("location") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    });

    setCurrentPage(1); // Reset page on filter change
  }, [searchParams]);

  const makes = useMemo(() => {
    const uniqueMakes = new Set(carsData.map(car => car.make));
    return Array.from(uniqueMakes).sort();
  }, []);

  const locations = useMemo(() => {
    const uniqueLocations = new Set(carsData.map(car => car.location));
    return Array.from(uniqueLocations).sort();
  }, []);

  // FILTER CARS
  const filteredCars = useMemo(() => {
    return carsData.filter(car => {
      if (filters.make && car.make !== filters.make) return false;
      if (filters.location && car.location !== filters.location) return false;
      if (filters.minPrice && car.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [filters]);

  // PAGINATION LOGIC
  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const paginatedCars = useMemo(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    return filteredCars.slice(startIndex, startIndex + carsPerPage);
  }, [filteredCars, currentPage]);

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
            Discover {totalCars} vehicles ready for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FILTER BAR */}
          <div className="lg:col-span-1">
            <FilterBar
              onFilter={(newFilters) => {
                setFilters(newFilters);
                setCurrentPage(1); // reset page when filtering manually
              }}
              makes={makes}
              locations={locations}
              filters={filters}
            />
          </div>

          {/* CAR LIST */}
          <div className="lg:col-span-3">
            {paginatedCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedCars.map((car, index) => (
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

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-10">
                
                {/* Previous */}
                <button
                  onClick={() => {setCurrentPage(prev => Math.max(prev - 1, 1)), window.scrollTo({ top: 0, behavior: "smooth" });}}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                >
                  Prev
                </button>

                {/* Pages */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {setCurrentPage(i + 1), window.scrollTo({ top: 0, behavior: "smooth" });}}
                    className={`px-4 py-2 border rounded-lg ${
                      currentPage === i + 1 ? "bg-orange-600 text-white" : "bg-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={() => {setCurrentPage(prev => Math.min(prev + 1, totalPages)), window.scrollTo({ top: 0, behavior: "smooth" });}}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                >
                  Next
                </button>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
