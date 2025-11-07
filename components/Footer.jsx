import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-orange-600" />
              <span className="text-xl font-bold text-white">VerifiedAutos</span>
            </div>
            <p className="text-sm">
              Your trusted platform for buying and selling verified used cars in Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cars" className="hover:text-orange-600 transition-colors">Browse Cars</Link></li>
              <li><Link href="/sell" className="hover:text-orange-600 transition-colors">Sell Your Car</Link></li>
              <li><Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@verifiedautos.ng</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} VerifiedAutos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
