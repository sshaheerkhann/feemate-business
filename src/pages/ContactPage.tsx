import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      schoolName: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Have questions about SchoolPay? We're here to help you streamline 
              your school's fee management process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-fadeInLeft">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInLeft">
                Contact Information
              </h2>

              <div className="space-y-6 animate-fadeInLeft animation-delay-200">
                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg animate-pulse-slow">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+92 21 1234 5678</p>
                    <p className="text-gray-600">+92 300 1234 567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <div className="bg-emerald-100 p-3 rounded-lg animate-pulse-slow">
                    <Mail className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@schoolpay.pk</p>
                    <p className="text-gray-600">support@schoolpay.pk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <div className="bg-orange-100 p-3 rounded-lg animate-pulse-slow">
                    <MapPin className="h-6 w-6 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      Block 15, Gulshan-e-Iqbal<br />
                      Karachi, Sindh 75300<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <div className="bg-purple-100 p-3 rounded-lg animate-pulse-slow">
                    <Clock className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fadeInRight">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover-lift transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInRight">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                        School Name *
                      </label>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        required
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Your school name"
                      />
                    </div>

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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="+92 300 1234 567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                      placeholder="Tell us about your school and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does the SMS reminder system work?
              </h3>
              <p className="text-gray-600">
                Our system integrates with local Pakistani SMS providers to send automated 
                reminders to parents when fees are due or overdue. You can customize the 
                message content and timing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my school's data secure?
              </h3>
              <p className="text-gray-600">
                Yes, we use bank-level encryption and security measures. All data is stored 
                securely and we comply with international data protection standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I import existing student data?
              </h3>
              <p className="text-gray-600">
                Absolutely! We provide easy data import tools and our support team can help 
                you migrate your existing student records and payment history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-800">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer training for school staff?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive training sessions for your staff, including 
                video tutorials and live support sessions in both English and Urdu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;