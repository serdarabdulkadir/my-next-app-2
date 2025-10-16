import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>Schedule</li>
              <li>Courses</li>
              <li>Pricing</li>
              <li>Payment</li>
              <li>Study In Spain</li>
              <li>Books</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4">About school</h4>
            <ul className="space-y-2 text-sm">
              <li>Gallery</li>
              <li>News</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Contact us</h4>
          <ul className="space-y-2 text-sm">
            <li>+1 (406) 555-0120</li>
            <li>+1 (480) 555-0103</li>
            <li className="mt-2">help@promptverse.com</li>
          </ul>

          <h4 className="text-sm font-semibold text-gray-400 mt-8 mb-4">Location</h4>
          <p className="text-sm">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start md:items-end">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Follow us</h4>
            <div className="flex space-x-3 mb-6">
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <Facebook size={18} />
              </a>
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                G+
              </a>
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <Instagram size={18} />
              </a>
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <Youtube size={18} />
              </a>
            </div>

            <h4 className="text-sm font-semibold text-gray-400 mb-4">Let’s chat</h4>
            <div className="flex space-x-3">
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <MessageCircle size={18} />
              </a>
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <Send size={18} />
              </a>
              <a className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div className="space-y-1">
          <p>Copyright</p>
          <p>Privacy</p>
          <p>All rights reserved</p>
        </div>

        <div className="text-center md:text-right mt-6 md:mt-0">
          <p>© 2024 — Promptverse AI</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <span>En</span>
            <span>Es</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
