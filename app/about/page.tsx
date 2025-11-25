'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Car, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection to ensure top quality and reliability.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service every step of the way.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear pricing, honest descriptions, and complete vehicle history for informed decisions.'
    }
  ];

  const stats = [
    { icon: Car, value: 500, label: 'Cars Listed' },
    { icon: Users, value: 50, label: 'Verified Dealers' },
    { icon: MapPin, value: 15, label: 'Cities Covered' },
    { icon: Award, value: 1000, label: 'Happy Customers' }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Filitech Auto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in buying and selling verified used cars across Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
              alt="About Us"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who we are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Filitechauto is a trusted and modern car dealership committed to delivering high-quality vehicles and a smooth, transparent buying experience. We are a proud subsidiary of Filitech Technology Ltd, a registered Nigerian company known for innovation, digital excellence, and service reliability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With the strong technological foundation of our parent company, Filitechauto combines automotive expertise with digital convenience—making car buying faster, easier, and more reliable for customers across Nigeria.
            </p>
          </motion.div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To simplify car buying through transparency, innovation, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be one of Nigeria’s leading technology-driven auto dealerships, recognized for quality vehicles, honesty, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">Exceptional services designed to give you the best car-buying experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Verified Vehicle Sales",
                desc:
                  "We provide a curated selection of both locally used and foreign used cars, all thoroughly inspected to ensure value, durability, and peace of mind."
              },
              {
                title: "Digital Convenience",
                desc:
                  "Easily browse available vehicles and make inquiries online via our platform.",
                link: "https://www.filitechauto.com"
              },
              {
                title: "Transparent & Trusted Processes",
                desc:
                  "We offer clear pricing, full documentation support, and honest guidance throughout the entire purchase process."
              },
              {
                title: "After-Sales Support",
                desc:
                  "Filitechauto assists customers with maintenance guidance, ownership advice, and continuous after-sales support."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-orange-600 font-medium underline"
                  >
                    {item.link}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* WHY CUSTOMERS CHOOSE US */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Customers Choose Filitechauto</h2>
            <p className="text-gray-600 text-lg">The pillars behind our growing customer trust</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Backed by Filitech Technology Ltd",
              "Verified, high-quality vehicles",
              "Transparent pricing with no hidden charges",
              "Fast and professional customer support",
              "Strong online presence",
              "Experienced and trustworthy team"
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-orange-50 p-6 rounded-xl border border-orange-100"
              >
                <p className="text-gray-800 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* UPDATED VALUES SECTION */}
<div className="mb-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
    <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      "Integrity",
      "Innovation",
      "Service Excellence",
      "Accountability",
      "Professionalism"
    ].map((value, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      </motion.div>
    ))}
  </div>
</div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} />
                </div>
                <p className="text-orange-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
