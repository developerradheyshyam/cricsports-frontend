import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram,MoveUpRight, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
<footer className="bg-[#000229] text-white ">
  {/* Newsletter Section */}
  <div className=" max-w-7xl mx-auto px-4 py-8 border-b border-gray-800">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Get Our Newsletter</h2> {/* Adjusted font size for different breakpoints */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400">Get Awesome Update Happenings in the Sports API World</p>
      </div>
      <div className="flex-grow  flex justify-end ">
        <div className="relative max-w-full sm:max-w-md md:w-[32rem]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Business email address"
            className="w-full px-16 py-3 md:py-4 rounded-full bg-white text-black focus:outline-none"
          />
          <button className="absolute right-0 top-1 flex justify-center items-center w-8 h-8 text-xs md:w-12 md:h-12 mr-4 bg-red-700 rounded-full hover:bg-red-600 transition-colors">
            <MoveUpRight />
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Logo and About */}
      <div className="space-y-4">
        <img src="/logo.png" alt="Cricsportz Logo" className="h-12" />
        <p className="text-gray-400 mt-4 text-sm sm:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text ever since the 1500s.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-600 transition-colors">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-red-600" />
            </div>
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-red-600" />
            </div>
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-red-600" />
            </div>
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-red-600" />
            </div>
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div>
        <h3 className="font-semibold mb-4 text-lg sm:text-xl">Useful Links</h3> {/* Adjusted font size */}
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</a></li>
        </ul>
      </div>

      {/* Our Services */}
      <div>
        <h3 className="font-semibold mb-4 text-lg sm:text-xl">Our Services</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cricket</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Football</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="font-semibold mb-4 text-lg sm:text-xl">Contact Us</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <img src={"/pointer-01.png"} alt="" className="border-[#1B1E55] border-[1px] rounded-full p-1" />
            <div>
              <p className="text-sm sm:text-base text-gray-400">On call Inquiry</p>
              <p className="text-sm sm:text-base">+91-988-000-0000</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <img src={"/pointer-01.png"} alt="" className="border-[#1B1E55] border-[1px] rounded-full p-1" />
            <div>
              <p className="text-sm sm:text-base text-gray-400">For Email</p>
              <p className="text-sm sm:text-base">info@cricsportz.com</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <img src={"/pointer-01.png"} alt="" className="border-[#1B1E55] border-[1px] rounded-full p-1" />
            <div>
              <p className="text-sm sm:text-base text-gray-400">Visit Us</p>
              <p className="text-sm sm:text-base">229, 21st East Street, Kamaraj Nagar Jaipur, Rajasthan 303030</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="bg-[#1B1E55] border-t border-gray-800">
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row space-x-2 justify-center items-center text-sm sm:text-base text-gray-400">
        <p>© Copyright Cricsportz. All Rights Reserved | </p>
        <p>Designed by <span className="italic">JHi Technology</span></p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;