import React from 'react';
import { Link } from 'react-router-dom';
import carBackground from '../assets/carbackground.jpg';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Background Image */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/80 to-sunrise-gold/80">
          <div className="absolute inset-0 bg-black/40"></div>
        </div> */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${carBackground})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Detailing Services
            <span className="block text-sunrise-gold">in Cape Coast</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional, eco-friendly car care that keeps your vehicle looking its best
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <button className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto">
                Call Now
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        {/* Water Drop Animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="water-drop w-6 h-6 bg-white/30 rounded-full"></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose RIMAX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eco-Friendly Cleaning */}
            <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-fresh-green/30 transition-colors">
                <svg className="w-8 h-8 text-fresh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Eco-Friendly Cleaning</h3>
              <p className="text-gray-600">We use environmentally safe products that protect your car and our planet</p>
            </div>

            {/* Mobile Booking */}
            <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ocean-blue/30 transition-colors">
                <svg className="w-8 h-8 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile Booking/ Detailing</h3>
              <p className="text-gray-600">Book your appointment anytime, anywhere with our easy-to-use mobile platform, or get your car detailed with our mobile detailing services</p>
            </div>

            {/* Affordable Packages */}
            <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-sunrise-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sunrise-gold/30 transition-colors">
                <svg className="w-8 h-8 text-sunrise-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Affordable Packages</h3>
              <p className="text-gray-600">Quality car care at competitive prices with packages starting from GH₵30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-sunrise-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "RIMAX did an amazing job on my car! The attention to detail was incredible and the eco-friendly products gave me peace of mind."
              </p>
              <div className="font-semibold text-gray-800">- Sarah M.</div>
            </div>

            {/* Testimonial 2 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-sunrise-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The mobile booking was so convenient! I booked my appointment in minutes and the service was top-notch."
              </p>
              <div className="font-semibold text-gray-800">- Kwame A.</div>
            </div>

            {/* Testimonial 3 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-sunrise-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Best value for money in Cape Coast! The premium package was worth every cedi. My car has never looked better."
              </p>
              <div className="font-semibold text-gray-800">- Michael K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Premium Car Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and give your vehicle the care it deserves
          </p>
          <Link to="/booking">
            <button className="btn-secondary text-base sm:text-lg px-10 py-4 w-full sm:w-auto">
              Call Now: +233 24 387 7058
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 