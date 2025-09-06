import React from 'react';
import { Target, Heart, Shield, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              About SchoolPay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              We're dedicated to helping Pakistani private schools manage their finances 
              more efficiently through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeInLeft">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 animate-fadeInLeft animation-delay-200">
                SchoolPay was born from the understanding that Pakistani private schools, 
                especially smaller institutions, face unique challenges in fee collection 
                and financial management. Traditional manual processes are time-consuming, 
                error-prone, and often lead to communication gaps with parents.
              </p>
              <p className="text-lg text-gray-600 mb-6 animate-fadeInLeft animation-delay-400">
                We believe that every school, regardless of size, deserves access to 
                modern financial management tools. Our platform bridges the gap between 
                advanced technology and the practical needs of Pakistani educational institutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-2xl animate-fadeInRight hover-lift transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="School children in classroom"
                className="w-full h-64 object-cover rounded-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp animation-delay-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp animation-delay-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300 animate-pulse-slow">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
              <p className="text-gray-600">
                We believe powerful tools should be easy to use, especially for busy school administrators.
              </p>
            </div>

            <div className="text-center animate-fadeInUp animation-delay-400">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300 animate-pulse-slow">
                <Heart className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordability</h3>
              <p className="text-gray-600">
                Quality education management tools shouldn't break the bank for small schools.
              </p>
            </div>

            <div className="text-center animate-fadeInUp animation-delay-600">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300 animate-pulse-slow">
                <Shield className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                Your school's data and student information is protected with bank-level security.
              </p>
            </div>

            <div className="text-center animate-fadeInUp animation-delay-800">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300 animate-pulse-slow">
                <Zap className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our platform with features that matter to Pakistani schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Built for Pakistani Schools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Our team understands the unique challenges faced by Pakistani educational 
              institutions and has designed SchoolPay to address these specific needs.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl hover-lift transition-all duration-300 animate-fadeInUp animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-fadeInLeft">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fadeInLeft">
                  Why We Built SchoolPay
                </h3>
                <ul className="space-y-3 text-gray-700 animate-fadeInLeft animation-delay-200">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Manual fee tracking was causing administrative burden
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Parent communication about payments was inconsistent
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Small schools needed affordable, local solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Integration with local SMS services was essential
                  </li>
                </ul>
              </div>
              <div className="text-center animate-fadeInRight">
                <img 
                  src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Pakistani school"
                  className="w-full h-64 object-cover rounded-lg hover-scale transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Ready to Transform Your School's Fee Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fadeInUp animation-delay-200">
            Join the growing community of Pakistani schools using SchoolPay
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fadeInUp animation-delay-400">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;