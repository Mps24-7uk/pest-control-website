import React from 'react';
import { Award, Users, CheckCircle, Clock } from 'lucide-react';

const About = () => {
  const aboutImageUrl = "/assets/images/about/a.png";
  const fallbackImageUrl = "/assets/images/home/a.png";

  const stats = [
    { icon: Users, number: "10,000+", label: "Satisfied Customers" },
    { icon: CheckCircle, number: "99%", label: "Success Rate" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Service" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose PestGuard Pro?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in pest control, we've built our reputation 
              on delivering effective, safe, and reliable pest management solutions. Our 
              team of licensed professionals uses the latest techniques and eco-friendly 
              products to protect your property.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Licensed & Certified</h4>
                  <p className="text-gray-600">All our technicians are state-licensed and undergo continuous training.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Safe & Eco-Friendly</h4>
                  <p className="text-gray-600">We prioritize your family's safety with child and pet-friendly treatments.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Guaranteed Results</h4>
                  <p className="text-gray-600">We stand behind our work with a 100% satisfaction guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
                <img 
                  src={aboutImageUrl} 
                  alt="Professional pest control team" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('About image failed to load:', aboutImageUrl, e);
                    console.log('Trying fallback image...');
                    target.src = fallbackImageUrl;
                  }}
                  onLoad={() => {
                    console.log('About image loaded successfully:', aboutImageUrl);
                  }}
                />            <div className="absolute -bottom-8 left-8 right-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-green-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;