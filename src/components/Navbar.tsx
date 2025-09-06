import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo'; // Adjust the path as necessary

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center animate-fadeInLeft">
            <Link to="/" className="flex items-center space-x-2 hover-scale transition-transform duration-300">
              <Logo className="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fadeInRight">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive(item.path)
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover-glow">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-700 focus:outline-none transition-all duration-300 hover-scale"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fadeInUp">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive(item.path)
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-2 bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;