import React from 'react';

function About() {
  const teamMembers = [
    {
      name: 'Maxwell Lewis',
      position: 'Founder & CEO',
      image: '/team/ceo.jpg',
      description: 'Passionate about providing quality car care services to the Cape Coast community.'
    },
    {
      name: 'Rita Lewis',
      position: 'Operations Manager',
      image: '/team/operations.jpg',
      description: 'Ensuring every customer receives exceptional service and attention to detail.'
    },
    {
      name: 'Frank Cobinah',
      position: 'Foreign Consultant',
      image: '/team/detailer.jpg',
      description: 'Expert in automotive detailing with over 7 years of experience (miragedetailingmke.com).'
    }
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'We use environmentally safe products that protect both your car and our planet.'
    },
    {
      icon: '🤝',
      title: 'Community Focus',
      description: 'Supporting local businesses and contributing to Cape Coast\'s growth.'
    },
    {
      icon: '⭐',
      title: 'Quality Service',
      description: 'Delivering exceptional results with attention to every detail.'
    },
    {
      icon: '💪',
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on every time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-blue to-sunrise-gold text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About RIMAX</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to providing premium car care services while building a stronger Cape Coast community
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At RIMAX, we believe that every vehicle deserves the best care possible. Our mission is to provide 
              professional, eco-friendly car wash and detailing services that not only keep your vehicle looking 
              its best but also contribute to the well-being of our community and environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to using sustainable practices, supporting local businesses, and creating 
              employment opportunities in Cape Coast. Every service we provide reflects our dedication to 
              quality, convenience, and community values.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <a 
                    href="https://miragedetailingmke.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-ocean-blue transition-colors"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="text-ocean-blue font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-ocean-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">How It Started</h3>
                <p className="text-gray-200 leading-relaxed">
                  RIMAX was founded in 2024 with a simple vision: to provide Cape Coast residents with 
                  professional car care services that were both affordable and environmentally responsible. 
                  What started as a small operation has grown into a trusted name in automotive care.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Where We're Going</h3>
                <p className="text-gray-200 leading-relaxed">
                  Today, we continue to expand our services while maintaining our commitment to quality 
                  and community. We're investing in new technologies and training to ensure we deliver 
                  the best possible service to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-3xl font-bold text-ocean-blue mb-2">50+</div>
              <p className="text-gray-600">Local jobs created</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-ocean-blue mb-2">1000+</div>
              <p className="text-gray-600">Happy customers served</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-ocean-blue mb-2">100%</div>
              <p className="text-gray-600">Eco-friendly products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sunrise-gold text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the RIMAX difference and become part of our growing family of satisfied customers
          </p>
          {/* <button className="btn-primary text-lg px-10 py-4 bg-ocean-blue hover:bg-blue-700">
            Book Your First Service
          </button> */}
        </div>
      </section>
    </div>
  );
}

export default About; 