import React from 'react';
import { Users, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'Success Stories', href: '#impact' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Leadership Development', href: '#' },
    { name: 'Mentorship Sessions', href: '#' },
    { name: 'Professional Workshops', href: '#' },
    { name: 'Networking Events', href: '#' },
    { name: 'Career Placement', href: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Greenhorn Logo" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Greenhorn</h3>
                <p className="text-sm text-gray-400">Mentorship Program</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
              Transforming University of Nairobi students into globally competitive leaders through 
              strategic mentorship and comprehensive leadership development since 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                    <span>{program.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-sm sm:text-base text-white font-medium">University of Nairobi</p>
                  <p className="text-gray-400 text-sm">Lower Kabete Campus</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm sm:text-base text-white">info@greenhornmentorship.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm sm:text-base text-white">+254 700 123 456</p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800 rounded-xl">
              <h5 className="text-sm sm:text-base font-semibold text-white mb-2">Tuseme Thursday</h5>
              <p className="text-gray-400 text-sm">
                Join our weekly interactive sessions every Thursday at 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Greenhorn Mentorship Program. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mb-2">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mb-2">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mb-2">
                Code of Conduct
              </a>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              Proudly serving the University of Nairobi community since 2008 • 
              Developing leaders who think globally and act locally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;