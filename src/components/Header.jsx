"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Drawer } from "@mui/material";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sports API", path: "/sports-api" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const isHomePage = pathname === "/";
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-white/10 backdrop-blur-lg py-4 px-6">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src={isHomePage ? "/logo (1).png" : "/logo.png"} 
              alt="Cricsportz Logo" 
              width={150} 
              height={40}
              className="transition-transform hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative font-semibold text-nowrap transition-all duration-300 ${
                isHomePage ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300"
              } ${
                isActive(item.path) ? 
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#be5360]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={`border px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
              isHomePage
                ? "border-[#be5360] text-[#be5360] hover:bg-red-100"
                : "border-white text-white hover:bg-white/20"
            }`}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={handleDrawerToggle}
        >
          <Menu className={`h-6 w-6 ${isHomePage ? "text-gray-700" : "text-white"}`} />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            className: "bg-[#A69CA3] backdrop-blur-lg border-l border-white/20 w-full max-w-xs !important"
          }}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 flex justify-end border-b border-white/10">
              <button
                onClick={handleDrawerToggle}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6 text-zinc-900" />
              </button>
            </div>
            
            <div className="flex-1 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={handleDrawerToggle}
                  className={`flex items-center px-6 py-4 transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-white/40 text-[#be5360] font-medium"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <span className="text-lg">{item.name}</span>
                  {isActive(item.path) && (
                    <div className="ml-auto">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#be5360]" />
                    </div>
                  )}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-white/10">
              <button
                onClick={() => {
                  router.push("/contact");
                  handleDrawerToggle();
                }}
                className="w-full bg-zinc-800 border border-white/20 text-white py-3 px-4 rounded-md font-medium
                  transition-all duration-300 hover:bg-zinc-600 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 
                  focus:ring-offset-white/10 backdrop-blur-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;