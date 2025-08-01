import React from 'react';
import { Building2, Handshake, Star, Users } from 'lucide-react';

const Partners = () => {
  const corporatePartners = [
    {
      name: 'Unilever',
      category: 'Consumer Goods',
      description: 'Global leader in sustainable living brands',
      partnership: 'Mentorship & Internships'
    },
    {
      name: 'Scanad Africa',
      category: 'Marketing & Advertising',
      description: 'Leading marketing communications agency',
      partnership: 'Career Development'
    },
    {
      name: 'KCB Group',
      category: 'Financial Services',
      description: 'Premier financial services provider',
      partnership: 'Leadership Training'
    },
    {
      name: 'Safaricom',
      category: 'Telecommunications',
      description: 'Technology and innovation leader',
      partnership: 'Digital Skills'
    },
    {
      name: 'Equity Bank',
      category: 'Banking',
      description: 'Pan-African financial services',
      partnership: 'Entrepreneurship'
    },
    {
      name: 'Nation Media Group',
      category: 'Media & Communications',
      description: 'Leading media house in East Africa',
      partnership: 'Communications Training'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Access to senior professionals and industry leaders'
    },
    {
      icon: Building2,
      title: 'Corporate Exposure',
      description: 'Direct interaction with leading organizations'
    },
    {
      icon: Star,
      title: 'Real-World Experience',
      description: 'Practical insights into industry best practices'
    },
    {
      icon: Handshake,
      title: 'Career Opportunities',
      description: 'Direct pathways to internships and employment'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-yellow-50 px-4 py-2 rounded-full border border-orange-200 mb-4">
            <Handshake className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Industry Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-500">Corporate Partners</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading organizations to provide students with valuable insights 
            into the professional world and create pathways to career success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {corporatePartners.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                  <div className="inline-block bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3">
                    {partner.category}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">{partner.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-orange-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{partner.partnership}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Partnership <span className="text-red-600">Benefits</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg inline-block max-w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-sm font-semibold">
                  50+ Active Partnerships
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-sm font-semibold">
                  Growing Network
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Join our expanding network of corporate partnerships and unlock new opportunities for your career growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Interested in Partnering with Us?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're always looking for new partnerships that can provide value to our students and contribute to their professional development.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;