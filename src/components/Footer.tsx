import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-4">
              <img
                src="/RideMate_LOGO.png"
                alt="RideMate Cab Service Mathura"
                className="h-14 w-auto object-contain object-left mb-2"
                style={{ maxHeight: '56px' }}
              />
              <p className="text-xs text-gray-400">Safe Rides • Trusted Service • Affordable Fares</p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Your trusted cab service in Mathura for local taxi, outstation travel, airport transfers and tour packages across North India.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-xs mb-3">
              <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
              <span>Sri Shakuntla Dham Apartment, Near Chirayu Hospital, Narholi Chowk, Mathura, Uttar Pradesh</span>
            </div>
            <div className="flex gap-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/fleet" className="text-gray-400 hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/routes" className="text-gray-400 hover:text-white transition-colors">Popular Routes</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors">Mathura</li>
              <li className="hover:text-white transition-colors">Vrindavan</li>
              <li className="hover:text-white transition-colors">Agra</li>
              <li className="hover:text-white transition-colors">Delhi</li>
              <li className="hover:text-white transition-colors">Jaipur</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+918218042225" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  +91 8218042225
                </a>
              </li>
              <li>
                <a href="mailto:ridematecabservice@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  ridematecabservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Narholi Chowk, Mathura, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} RideMate Cab Service Mathura. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
