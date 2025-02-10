import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram,MoveUpRight, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000229] text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-8 border-b border-gray-800">
        <div className="flex h-20 flex-col md:flex-row md:items-center md:justify-between gap-4 ">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Get Our Newsletter</h2>
            <p className="text-gray-400">Get Awesome Update Happenings in the Sports API World</p>
          </div>
          <div className="flex-grow  ">
            <div className="relative mx-auto max-w-2xl ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Business email address"
                className="w-full px-16 py-6 rounded-full bg-white text-black focus:outline-none"
              />
              <button className="absolute right-0 top-2 flex justify-center items-center w-14 h-14 mr-4 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                
              <MoveUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Cricsportz Logo" className="h-12" />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text ever since the 1500s.
          </p>
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
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
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
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cricket</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Football</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center  gap-3">
              <img src={"/pointer-01.png"} alt="" className='border-[#1B1E55] border-[1px] rounded-full p-1' />
              <div>
                <p className="text-sm text-gray-400">On call Inquiry</p>
                <p>+91-988-000-0000</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
            <img src={"/pointer-01.png"} alt="" className='border-[#1B1E55] border-[1px] rounded-full p-1' />
              <div>
                <p className="text-sm text-gray-400">For Email</p>
                <p>info@cricsportz.com</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
            <img src={"/pointer-01.png"} alt="" className='border-[#1B1E55] border-[1px] rounded-full p-1' />
              <div>
                <p className="text-sm text-gray-400">Visit Us</p>
                <p>229, 21st East Street, Kamaraj Nagar Jaipur, Rajasthan 303030</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

      {/* Copyright */}
      <div className=" bg-[#1B1E55] border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row space-x-2 justify-center items-center text-sm text-gray-400">
            <p>© Copyright Cricsportz. All Rights Reserved | </p>
            <p>Designed by <span className="italic">JHi Technology</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;