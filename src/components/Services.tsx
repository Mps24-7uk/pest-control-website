import { Bug, Home, Building, Leaf, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "General Pest Control",
      description: "Comprehensive treatment for ants, roaches, spiders, and common household pests.",
      features: ["Monthly treatments", "Interior & exterior", "Guaranteed results"]
    },
    {
      icon: Home,
      title: "Termite Control",
      description: "Protect your property investment with professional termite inspection and treatment.",
      features: ["Free inspections", "Baiting systems", "Damage repair"]
    },
    {
      icon: Building,
      title: "Commercial Services",
      description: "Customized pest management solutions for businesses and commercial properties.",
      features: ["Scheduled treatments", "Documentation", "Compliance support"]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Green pest control solutions that are safe for families, pets, and the environment.",
      features: ["Organic treatments", "Child-safe", "Pet-friendly"]
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency pest control for urgent infestations and immediate threats.",
      features: ["Same-day service", "24/7 availability", "Rapid response"]
    },
    {
      icon: Shield,
      title: "Prevention Plans",
      description: "Proactive pest prevention programs to keep your property pest-free year-round.",
      features: ["Quarterly visits", "Seasonal treatments", "Peace of mind"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Pest Control Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From preventive treatments to emergency response, we offer comprehensive pest control 
            solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;