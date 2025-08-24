import React, { useState, useEffect } from 'react';
import { Clock, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use base path for GitHub Pages
  const basePath = '/pest-control-website';
  
  const pestControlImages = [
    {
      url: `${basePath}/assets/images/home/a.png`,
      alt: "Professional pest control technician spraying for insects"
    },
    {
      url: `${basePath}/assets/images/home/b.png`,
      alt: "Pest control equipment and safety gear"
    },
    {
      url: `${basePath}/assets/images/home/c.png`,
      alt: "Home inspection for pest control treatment"
    },
    {
      url: `${basePath}/assets/images/home/d.png`,
      alt: "Professional exterminator treating residential property"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pestControlImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [pestControlImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pestControlImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pestControlImages.length) % pestControlImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Professional <span className="text-green-600">Pest Control</span> You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protect your home and family with our expert pest control services. 
              Safe, effective, and guaranteed results from licensed professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
                Get Free Inspection
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
                Call Now: +91-9639793193
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">24/7 Emergency</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">5-Star Rated</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Slideshow Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 bg-gray-50">
              {pestControlImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Hero image failed to load:', image.url, e);
                    console.log('Trying fallback image...');
                    console.log('Current window.location:', window.location.href);
                    console.log('Image URL being used:', image.url);
                    target.src = `${basePath}/assets/images/home/a.png`;
                  }}
                  onLoad={() => {
                    console.log('Hero image loaded successfully:', image.url);
                  }}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {pestControlImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;