import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Rudrapur Resident",
      rating: 5,
      text: "PestGuard Pro solved our ant problem completely! Their technician was professional, explained everything clearly, and the treatment worked perfectly. Haven't seen a single ant since. Excellent service in Rudrapur!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Rajesh Kumar",
      location: "Restaurant Owner",
      rating: 5,
      text: "As a restaurant owner in Rudrapur, pest control is critical for my business. PestGuard Pro provides reliable monthly service and helps us maintain our health department ratings. Highly recommended!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Anita Patel",
      location: "Homeowner",
      rating: 5,
      text: "After trying several other companies, PestGuard Pro finally eliminated our termite problem. Their inspection was thorough, treatment effective, and they even helped with repairs. Best pest control service in Rudrapur area!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our pest control services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold text-gray-800">4.9/5 Average Rating</span>
            <span className="text-gray-600">• 200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;