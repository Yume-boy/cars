'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import { carsData } from '@/data/carsData';

export default function Home() {
  const featuredCars = carsData.filter(car => car.featured);

  const features = [
    {
      icon: CheckCircle,
      title: 'Verified Cars',
      description: 'All vehicles thoroughly inspected and verified for quality assurance'
    },
    {
      icon: Shield,
      title: 'Safe Transactions',
      description: 'Secure payment process and transparent documentation'
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Fast and efficient buying and selling experience'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional team ready to assist you every step of the way'
    }
  ];

  const testimonials = [
    {
      name: 'Chidi Okafor',
      location: 'Lagos',
      text: 'Found my dream car at an amazing price. The verification process gave me peace of mind.',
      rating: 5
    },
    {
      name: 'Amina Bello',
      location: 'Abuja',
      text: 'Sold my car in just 2 weeks! Professional service and fair pricing.',
      rating: 5
    },
    {
      name: 'David Eze',
      location: 'Port Harcourt',
      text: 'Excellent platform with genuine verified cars. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0zNiAzNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Find The Perfect Car
              <span className="block text-orange-600 mt-2">Just For You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Browse through hundreds of thoroughly inspected and verified used cars from trusted dealers across Nigeria
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/cars">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-orange-700 transition-colors"
                >
                  Browse Cars
                </motion.button>
              </Link>
              <Link href="/sell">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg shadow-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Sell Your Car
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cars</h2>
            <p className="text-gray-600 text-lg">Handpicked verified vehicles just for you</p>
          </motion.div>

          <Carousel cars={featuredCars} />

          <div className="text-center mt-12">
            <Link href="/cars">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-700 transition-colors"
              >
                View All Cars
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">Your trusted partner in car buying and selling</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <feature.icon strokeWidth={1} className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
