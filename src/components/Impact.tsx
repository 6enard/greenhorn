import React from 'react';
import { TrendingUp, Users, Award, Briefcase, Quote } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Mentored',
      description: 'Across various disciplines and career paths'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
      description: 'Students achieving their career goals'
    },
    {
      icon: Briefcase,
      number: '300+',
      label: 'Job Placements',
      description: 'Successful career transitions and placements'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Leadership Roles',
      description: 'Alumni in leadership positions within 5 years'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      role: 'Marketing Manager, Unilever',
      year: 'Class of 2019',
      quote: 'The Greenhorn program transformed my perspective on leadership. The mentorship I received helped me secure my dream job and develop the confidence to lead teams effectively.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Kiprotich',
      role: 'Software Engineer, Safaricom',
      year: 'Class of 2020',
      quote: 'Through Greenhorn, I gained invaluable industry insights and built a network that opened doors I never thought possible. The program truly bridges the gap between academia and industry.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Grace Nyambura',
      role: 'Financial Analyst, KCB Group',
      year: 'Class of 2021',
      quote: 'The leadership workshops and one-on-one mentorship sessions prepared me for the challenges of the corporate world. I credit my success to the foundation laid by Greenhorn.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-yellow-200 mb-4">
            <TrendingUp className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Measuring Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-yellow-600">Impact</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 16 years, we've been transforming students into industry leaders. 
            Here's the measurable impact we've made on careers and lives.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Success <span className="text-red-600">Stories</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-orange-600 font-medium">{testimonial.year}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-red-200 absolute -top-2 -left-2" />
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic pl-4 sm:pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Join the ranks of successful professionals who started their journey with Greenhorn. 
            Your transformation begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              View More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;