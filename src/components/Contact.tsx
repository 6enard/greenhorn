import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'University of Nairobi',
      subdetails: 'Lower Kabete Campus'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@greenhornmentorship.org',
      subdetails: 'We\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 700 123 456',
      subdetails: 'Mon - Fri, 9AM - 5PM'
    }
  ];

  const socialMedia = [
    { platform: 'Instagram', handle: '@greenhorn_mentorship' },
    { platform: 'LinkedIn', handle: 'Greenhorn Mentorship Program' },
    { platform: 'Twitter', handle: '@greenhornkenya' },
    { platform: 'Facebook', handle: 'Greenhorn Mentorship Program' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full border border-red-200 mb-4">
            <MessageCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your mentorship journey? We're here to answer your questions 
            and help you take the first step towards professional excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Apply for Mentorship</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="leadership">Leadership Development</option>
                    <option value="business">Business & Entrepreneurship</option>
                    <option value="technology">Technology & Innovation</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="marketing">Marketing & Communications</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Share your career goals and what you hope to achieve through mentorship..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.subdetails}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <span className="text-sm sm:text-base font-medium text-gray-800">{social.platform}</span>
                      <p className="text-sm text-gray-600">{social.handle}</p>
                    </div>
                    <button className="text-red-600 hover:text-red-700 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-200">
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Tuseme Thursday</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    Join our weekly interactive sessions every Thursday at 4:00 PM. 
                    Connect with fellow students and share experiences.
                  </p>
                  <button className="text-sm sm:text-base text-yellow-700 font-medium hover:text-yellow-800 transition-colors duration-300">
                    Join Next Session →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;