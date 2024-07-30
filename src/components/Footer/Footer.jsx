import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-800 py-10 border-t border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -m-6">
          {/* Logo Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-4 flex items-center justify-center">
                <Logo width="80px" height="80px" borderRadius="50%" /> {/* Rounded Logo */}
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="text-xs font-semibold uppercase text-gray-300 mb-6">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/affiliate"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/press-kit"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="text-xs font-semibold uppercase text-gray-300 mb-6">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/account"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/help"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/support"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="text-xs font-semibold uppercase text-gray-300 mb-6">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/terms"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-gray-100 transition duration-200"
                    to="/licensing"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
