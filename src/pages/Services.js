import React, { useState } from 'react';
import beforeImage from '../assets/before.png';
import afterImage from '../assets/after.png';
import mazdaD from '../assets/mazdaD.jpeg';
import mazdaC from '../assets/mazdaC.jpeg';
import rav4b4 from '../assets/rav4b4.jpeg';
import rav4aft from '../assets/rav4aft.jpeg';
import VWb4 from '../assets/VWb4.jpeg';
import VWaft from '../assets/VWaft.jpeg';

function Services() {
  const [activeTab, setActiveTab] = useState('basic');

  const services = {
    basic: [
      { name: 'Basic Wash', price: 'GH₵25', description: 'Exterior wash with eco-friendly soap' },
      { name: 'Tire Cleaning', price: 'GH₵15', description: 'Tire and wheel cleaning' },
      { name: 'Window Cleaning', price: 'GH₵10', description: 'Exterior and interior windows' }
    ],
    rimaxSpecial: [
      { 
        name: 'RIMAX Special Package', 
        price: 'GH₵350', 
        description: 'Complete interior and exterior detailing with premium products',
        includes: ['Full exterior wash', 'Interior vacuum', 'Dashboard cleaning', 'Tire shine']
      }
    ],
    addon: [
      { name: 'Engine-Steam Cleaning', price: 'GH₵100', description: 'Deep steam cleaning of engine bay to remove dirt, grime, and oil buildup' },
      { name: 'Headlight Restoration', price: 'GH₵60', description: 'Professional restoration and polishing of cloudy or yellowed headlights for improved visibility' },
      { name: 'AC Vent Decontamination', price: 'GH₵50', description: 'Thorough cleaning and decontamination of air conditioning vents and system' }
    ]
  };

  const serviceCategories = {
    interior: {
      name: 'Interior Detailing',
      description: 'Complete interior cleaning and restoration thus, complete vacuum Cleaning, leather/ cloth cleaning, UV protection application, stain / odour removal, dressing (plastics/ rubber)',
      icon: '🚗',
      pricing: {
        sedan: {
          name: 'Sedan',
          Price: 'GH₵150',
          Fabric: ' Additional GH₵30'
        },
        suv: {
          name: 'SUV',
           Price: 'GH₵200',
          Fabric: ' Additional GH₵30'
        },
        minivan: {
          name: 'Mini-Van',
           Price: 'GH₵250',
          Fabric: ' Additional GH₵30'
        }
      }
    },
    exterior: {
      name: 'Exterior Detailing',
      description: 'Professional exterior wash and detailing thus, Full exterior foam bath, wheels & tires deep clean, tire shine application, Decontamination & clay bar, ceramic sealant application to painting, trim & plastic restoration',
      icon: '✨',
      pricing: {
        sedan: {
          name: 'Sedan',
          price: 'GH₵200'
        },
        suv: {
          name: 'SUV',
          price: 'GH₵250'
        },
        minivan: {
          name: 'Mini-Van',
          price: 'GH₵300'
        }
      }
    },
    full: {
      name: 'Full Detailing',
      description: 'Complete interior and exterior detailing (RIMAX Special)',
      icon: '🌟',
      pricing: {
        sedan: {
          name: 'Sedan',
          price: 'GH₵300'
        },
        suv: {
          name: 'SUV',
          price: 'GH₵350'
        },
        minivan: {
          name: 'Mini-Van',
          price: 'GH₵400'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/40 via-ocean-blue/5 to-sunrise-gold/10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-blue to-sunrise-gold text-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Professional car care packages designed to keep your vehicle looking its best
          </p>
        </div>
      </section>

      {/* Service Category Pricing */}
      <section className="section-padding bg-gradient-to-br from-ocean-blue/12 via-fresh-green/8 to-sunrise-gold/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Pricing by Service Category
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(serviceCategories).map(([key, service]) => (
              <div key={key} className="card h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                <div className="space-y-4">
                  {Object.entries(service.pricing).map(([carKey, car]) => (
                    <div key={carKey} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-semibold text-ocean-blue mb-3">{car.name}</h4>
                      {key === 'interior' ? (
                        <div className="text-sm text-gray-600 space-y-1">
                           <div className="flex justify-between">
                            <span>Price :</span>
                            <span className="font-semibold text-gray-800">{car.Price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fabric Seats:</span>
                            <span className="font-semibold text-gray-800">{car.Fabric}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-xl font-bold text-gray-800">{car.price}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-padding bg-gradient-to-br from-fresh-green/10 via-ocean-blue/8 to-sunrise-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/15 to-transparent"></div>
        <div className="container-custom relative z-10">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'basic'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Basic Services
            </button>
            <button
              onClick={() => setActiveTab('rimaxSpecial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'rimaxSpecial'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              RIMAX Special Package
            </button>
            <button
              onClick={() => setActiveTab('addon')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'addon'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Add-on Services
            </button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services[activeTab].map((service, index) => (
              <div key={index} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-ocean-blue mb-4">{service.price}</div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  {service.includes && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.includes.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a href="tel:+233243877058">
                    <button className="btn-primary w-full">
                      Call to Book
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="section-padding bg-gradient-to-br from-sunrise-gold/12 via-ocean-blue/8 to-fresh-green/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Before & After Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Before & After Comparison 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Exterior Detail Transformation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">BEFORE</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={mazdaD} 
                        alt="Car before detailing" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">AFTER</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={mazdaC} 
                        alt="Car after detailing" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">Complete exterior transformation with premium detailing</p>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Exterior Detail Transformation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">BEFORE</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={beforeImage} 
                        alt="Car before detailing" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">AFTER</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={afterImage} 
                        alt="Car after detailing" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">Complete exterior transformation with premium detailing</p>
              </div>
            </div>

            

            {/* Before & After Comparison 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Interior Deep Clean</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">BEFORE</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={rav4b4} 
                        alt="Car interior before cleaning" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">AFTER</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={rav4aft} 
                        alt="Car interior after cleaning" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">Professional interior restoration and deep cleaning</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Interior Deep Clean</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">BEFORE</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={VWb4} 
                        alt="Car interior before cleaning" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
        <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">AFTER</h4>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={VWaft} 
                        alt="Car interior after cleaning" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">Professional interior restoration and deep cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-ocean-blue via-blue-600 to-ocean-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us now to schedule your appointment
          </p>
          <a href="tel:+233243877058">
            <button className="btn-secondary text-base sm:text-lg px-10 py-4 w-full sm:w-auto">
              Call Now: +233 24 387 7058
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services; 