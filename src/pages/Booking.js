import React from 'react';

function Booking() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-blue to-sunrise-gold text-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Call us directly to schedule your car wash service
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Call Us Now</h2>
              <p className="text-lg text-gray-600 mb-8">
                Speak directly with our team to book your appointment and discuss your specific needs
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Main Line</h3>
                <a href="tel:+233XXXXXXXXX" className="text-2xl font-bold text-ocean-blue hover:text-blue-700 transition-colors">
                  +233 XX XXX XXXX
                </a>
                <p className="text-gray-600 text-sm mt-2">Monday - Saturday: 8:00 AM - 6:00 PM</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <a href="https://wa.me/233XXXXXXXXX" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                  +233 XX XXX XXXX
                </a>
                <p className="text-gray-600 text-sm mt-2">Available 24/7 for quick inquiries</p>
              </div>
            </div>

            {/* Call Button */}
            <div className="mb-8">
              <a href="tel:+233XXXXXXXXX">
                <button className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 mb-4 w-full sm:w-auto">
                  📞 Call Now
                </button>
              </a>
              <p className="text-gray-600">Click to call directly from your device</p>
            </div>

            {/* What to Expect */}
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What to Expect When You Call:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-fresh-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Friendly customer service representative</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-fresh-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized service recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-fresh-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-fresh-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Immediate confirmation of your appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Business Hours</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Regular Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 5:00 PM</div>
                  <div>Sunday: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Service</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Available 24/7</div>
                  <div>Call for urgent requests</div>
                  <div>Additional charges may apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;