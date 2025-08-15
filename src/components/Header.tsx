import React, { useState } from 'react';
import { Phone, Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">PestGuard Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-600">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+91-9639793193</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Contact</a>
              <div className="flex items-center space-x-2 text-green-600 pt-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+91-9639793193</span>
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 w-fit">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;