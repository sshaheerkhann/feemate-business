import React from 'react';
import { ArrowRight, CheckCircle, Users, CreditCard, Bell, BarChart3, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Simplify School Fee
              <span className="text-blue-700"> Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              The complete solution for Pakistani private schools to track payments, 
              send automated SMS reminders, and manage student records efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center hover-glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Everything You Need to Manage School Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Built specifically for Pakistani schools with local payment methods and SMS integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-200">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Management</h3>
              <p className="text-gray-600">
                Easily manage student records, class assignments, and parent contact information in one place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-400">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <CreditCard className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Tracking</h3>
              <p className="text-gray-600">
                Track monthly fee payments, generate receipts, and maintain complete payment history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-600">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <Bell className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SMS Reminders</h3>
              <p className="text-gray-600">
                Automated SMS reminders to parents for overdue payments with customizable messages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-800">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <BarChart3 className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Reports</h3>
              <p className="text-gray-600">
                Generate detailed financial reports and analytics to track school revenue and trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-1000">
              <div className="bg-pink-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <CheckCircle className="h-6 w-6 text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-gray-600">
                Get started in minutes with our simple onboarding process designed for Pakistani schools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-1200">
              <div className="bg-teal-100 p-3 rounded-lg w-fit mb-4 animate-pulse-slow">
                <Phone className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Support</h3>
              <p className="text-gray-600">
                Dedicated customer support in Urdu and English with understanding of local requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fadeInUp">
            <div className="animate-fadeInUp animation-delay-200">
              <div className="text-4xl font-bold text-white mb-2 hover-scale transition-transform duration-300">500+</div>
              <div className="text-blue-200">Schools Trust Us</div>
            </div>
            <div className="animate-fadeInUp animation-delay-400">
              <div className="text-4xl font-bold text-white mb-2 hover-scale transition-transform duration-300">50,000+</div>
              <div className="text-blue-200">Students Managed</div>
            </div>
            <div className="animate-fadeInUp animation-delay-600">
              <div className="text-4xl font-bold text-white mb-2 hover-scale transition-transform duration-300">95%</div>
              <div className="text-blue-200">Payment Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Trusted by Schools Across Pakistan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-200">
              <p className="text-gray-600 mb-4">
                "FeeMate has transformed how we manage our school fees. The SMS reminders have significantly reduced late payments."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-blue-700 font-semibold">AH</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ahmad Hassan</div>
                  <div className="text-gray-500 text-sm">Principal, Green Valley School</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-400">
              <p className="text-gray-600 mb-4">
                "The reporting features help us track our finances better. Parents appreciate the timely reminders too."
              </p>
              <div className="flex items-center">
                <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-emerald-700 font-semibold">SA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Ahmed</div>
                  <div className="text-gray-500 text-sm">Administrator, Bright Future Academy</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-600">
              <p className="text-gray-600 mb-4">
                "Simple to use and affordable for our small school. The customer support is excellent."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 h-12 w-12 rounded-full flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-orange-700 font-semibold">MK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Muhammad Khan</div>
                  <div className="text-gray-500 text-sm">Director, Star Academy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Ready to Streamline Your School's Fee Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fadeInUp animation-delay-200">
            Join hundreds of Pakistani schools already using SchoolPay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Start Free Trial
            </button>
            <Link 
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;