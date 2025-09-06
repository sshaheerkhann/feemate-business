import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '2,500',
      period: '/month',
      description: 'Perfect for small schools with up to 100 students',
      features: [
        'Up to 100 students',
        'Basic fee tracking',
        'SMS reminders (100/month)',
        'Payment history',
        'Email support',
        'Mobile app access',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '4,500',
      period: '/month',
      description: 'Ideal for growing schools with up to 300 students',
      features: [
        'Up to 300 students',
        'Advanced fee tracking',
        'SMS reminders (500/month)',
        'Payment history & reports',
        'Priority email support',
        'Mobile app access',
        'Custom fee structures',
        'Parent portal access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '7,500',
      period: '/month',
      description: 'For larger schools with 300+ students',
      features: [
        'Unlimited students',
        'Complete fee management',
        'Unlimited SMS reminders',
        'Advanced reporting & analytics',
        'Priority phone support',
        'Mobile app access',
        'Custom fee structures',
        'Parent portal access',
        'API access',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Choose the perfect plan for your school. All plans include our core 
              features with no hidden fees or setup costs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const animationDelay = `animation-delay-${(index + 1) * 200}`;
              return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 hover-lift transition-all duration-300 animate-fadeInUp ${animationDelay} ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105 hover-glow' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-bounce-slow">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center hover-scale transition-transform duration-300">
                    <span className="text-sm text-gray-500">PKR</span>
                    <span className="text-4xl font-bold text-gray-900 mx-1">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 hover-glow'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1'
                  } transition-all duration-300`}
                >
                  Start Free Trial
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              What's Included in Every Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 animate-fadeInLeft">
                Free Trial & Setup
              </h3>
              <ul className="space-y-2 text-gray-600 animate-fadeInLeft animation-delay-200">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  30-day free trial
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Free data migration
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Free staff training
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  No setup fees
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp animation-delay-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 animate-fadeInRight">
                Support & Security
              </h3>
              <ul className="space-y-2 text-gray-600 animate-fadeInRight animation-delay-200">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  24/7 technical support
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Bank-level security
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Regular backups
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Urdu & English support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fadeInUp animation-delay-200">
            Start your free trial today and see how FeeMate can transform your school's fee management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;