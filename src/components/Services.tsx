import React from 'react';
import { Users, BookOpen, Network, MessageCircle, Award, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'One-on-One Mentorship',
      description: 'Personalized guidance from experienced industry professionals tailored to your career goals and aspirations.',
      features: ['Weekly mentoring sessions', 'Career planning', 'Skill development', 'Goal setting']
    },
    {
      icon: BookOpen,
      title: 'Leadership Workshops',
      description: 'Comprehensive workshops designed to build essential leadership skills and professional competencies.',
      features: ['Leadership fundamentals', 'Communication skills', 'Team management', 'Strategic thinking']
    },
    {
      icon: Network,
      title: 'Professional Networking',
      description: 'Exclusive networking opportunities connecting students with industry leaders and potential employers.',
      features: ['Industry events', 'Corporate visits', 'Alumni connections', 'Professional mixers']
    },
    {
      icon: MessageCircle,
      title: 'Tuseme Thursday',
      description: 'Interactive weekly sessions fostering open dialogue, knowledge sharing, and peer-to-peer learning.',
      features: ['Open discussions', 'Peer mentoring', 'Topic exploration', 'Social engagement']
    },
    {
      icon: Award,
      title: 'Skills Certification',
      description: 'Recognition programs that validate your leadership development and professional growth achievements.',
      features: ['Completion certificates', 'Skill assessments', 'Progress tracking', 'Achievement awards']
    },
    {
      icon: Briefcase,
      title: 'Career Placement',
      description: 'Direct pathways to internships and job opportunities through our extensive corporate partnerships.',
      features: ['Internship placements', 'Job referrals', 'Interview preparation', 'Career counseling']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-orange-200 mb-4">
            <Award className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Comprehensive Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of services is designed to transform students into confident, 
            capable leaders ready to make their mark in the professional world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-red-600 font-medium hover:text-red-700 transition-colors duration-300 flex items-center space-x-2">
                    <span>Learn More</span>
                    <div className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-current rounded-full transform group-hover:translate-x-1 transition-transform duration-300"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Leadership Journey?</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
              Join hundreds of students who have transformed their careers through our mentorship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;