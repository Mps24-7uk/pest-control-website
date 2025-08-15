import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">PestGuard Pro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional pest control services you can trust. Protecting homes and businesses 
              for over 15 years with safe, effective solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">General Pest Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Termite Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Commercial Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Eco-Friendly Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Prevention Plans</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+91-9639793193</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">mps24.7uk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Rudrapur & Surrounding Areas</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-400">Based on 200+ customer reviews</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PestGuard Pro. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;