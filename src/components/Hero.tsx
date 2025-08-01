import React from 'react';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-orange-200">
                <Award className="h-4 w-4 text-orange-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Empowering Leaders Since 2008</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Building Tomorrow's
                <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Global Leaders
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The Greenhorn Mentorship Program connects University of Nairobi students with industry professionals, 
                fostering leadership development and creating pathways to career success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">16+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years of Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Industry Partners</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-3">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/30 backdrop-blur-sm rounded-full p-3">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">Mentorship Session</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Weekly guidance & support</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Leadership Skills</span>
                    <span className="text-green-600 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Industry Knowledge</span>
                    <span className="text-blue-600 font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;