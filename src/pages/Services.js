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
        price: 'GH₵120', 
        description: 'Complete interior and exterior detailing with premium products',
        includes: ['Full exterior wash', 'Interior vacuum', 'Dashboard cleaning', 'Tire shine']
      }
    ],
    addon: [
      { name: 'Wax Treatment', price: 'GH₵40', description: 'Protective wax coating' },
      { name: 'Ceramic Coating', price: 'GH₵200', description: 'Long-term protection coating' },
      { name: 'Odor Removal', price: 'GH₵25', description: 'Professional odor elimination' }
    ]
  };

  const carCategories = {
    sedan: {
      name: 'Sedan',
      basic: 'GH₵25',
      rimaxSpecial: 'GH₵120',
      interior: {
        leather: 'GH₵80',
        cloth: 'GH₵60'
      },
      exterior: 'GH₵50'
    },
    suv: {
      name: 'SUV',
      basic: 'GH₵35',
      rimaxSpecial: 'GH₵150',
      interior: {
        leather: 'GH₵100',
        cloth: 'GH₵80'
      },
      exterior: 'GH₵65'
    },
    minivan: {
      name: 'Mini-Van',
      basic: 'GH₵30',
      rimaxSpecial: 'GH₵135',
      interior: {
        leather: 'GH₵90',
        cloth: 'GH₵70'
      },
      exterior: 'GH₵55'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-blue to-sunrise-gold text-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Professional car care packages designed to keep your vehicle looking its best
          </p>
        </div>
      </section>

      {/* Car Category Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Pricing by Car Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(carCategories).map(([key, category]) => (
              <div key={key} className="card text-center h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-ocean-blue mb-2">Basic Services</h4>
                    <div className="text-xl font-bold text-gray-800">{category.basic}</div>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-ocean-blue mb-2">RIMAX Special</h4>
                    <div className="text-xl font-bold text-gray-800">{category.rimaxSpecial}</div>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-ocean-blue mb-2">Interior Detailing</h4>
                    <div className="text-sm text-gray-600">
                      <div>Leather Seats: {category.interior.leather}</div>
                      <div>Cloth Seats: {category.interior.cloth}</div>
                    </div>
      </div>
        <div>
                    <h4 className="font-semibold text-ocean-blue mb-2">Exterior Detailing</h4>
                    <div className="text-xl font-bold text-gray-800">{category.exterior}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'basic'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Basic Services
            </button>
            <button
              onClick={() => setActiveTab('rimaxSpecial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'rimaxSpecial'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              RIMAX Special Package
            </button>
            <button
              onClick={() => setActiveTab('addon')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 mb-2 ${
                activeTab === 'addon'
                  ? 'bg-ocean-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Before & After Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Before & After Comparison 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
      <section className="section-padding bg-ocean-blue text-white">
        <div className="container-custom text-center">
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