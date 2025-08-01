import React from 'react';
import { Target, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create globally competitive leaders who drive positive change across public, private, and non-governmental sectors through strategic mentorship partnerships.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'Developing leaders who think globally and act locally, instilling sustainable positive change and creating value in organizations they join.'
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Pairing young dynamic minds with accomplished industry practitioners who have demonstrated exemplary achievements in their career paths.'
    },
    {
      icon: Globe,
      title: 'Our Impact',
      description: 'Serving as the vital industry link through which students learn what the professional world expects from emerging leaders.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full border border-red-200 mb-4">
            <span className="text-sm font-medium text-red-700">Founded in 2008</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-red-600">Greenhorn</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Greenhorn Mentorship Program is a pioneering student organization at the University of Nairobi's 
            Lower Kabete campus, dedicated to building outstanding individuals through strategic mentorship and 
            comprehensive leadership development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Transforming Students into 
                <span className="block text-red-600">Industry Leaders</span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Mentorship refers to the developmental relationship between a more experienced professional "mentor" 
                  and a less experienced partner referred to as a mentee—a person guided and protected by a more 
                  experienced person.
                </p>
                <p>
                  We hope to develop leaders who think globally and act locally, instilling sustainable positive change 
                  to drive vision and create value in organizations they join. We aim to serve as the industry link 
                  through which university students can learn about what the industry is looking for from young 
                  upcoming professionals.
                </p>
                <p>
                  Through pairing hard work and determination to direction, we aspire to create leaders who are 
                  charismatic about what they do and inspire transformational change among their peers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">Program Highlights</h4>
                  <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Active
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Mentorship Sessions</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Weekly</span>
                  </div>
                  <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Workshop Programs</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-600">Networking Events</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Quarterly</span>
                  </div>
                  <div className="flex items-center justify-between py-1 sm:py-2">
                    <span className="text-xs sm:text-sm text-gray-600">Industry Partnerships</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">50+ Active</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 rounded-xl sm:rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;