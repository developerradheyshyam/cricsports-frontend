"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // Get the current route
  const router = useRouter()
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

  // Check if the current route is the home page
  const isHomePage = pathname === "/";

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-white/10 backdrop-blur-lg py-4 px-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={isHomePage ? "/logo (1).png" : "/logo.png"} alt="Cricsportz Logo" width={150} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-semibold text-nowrap transition-colors ${
                isHomePage ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={`border px-6 py-2 rounded-md transition-colors ${
              isHomePage
                ? "border-[#be5360] text-[#be5360] hover:bg-red-100"
                : "border-white text-white hover:bg-white/20"
            }`}
           onClick={()=>  router.push("/contact")}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <Menu className="h-6 w-6" />
          </IconButton>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <div className="w-64">
            <div className="p-4 flex justify-end">
              <IconButton onClick={handleDrawerToggle}>
                <X className="h-6 w-6" />
              </IconButton>
            </div>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.name} onClick={handleDrawerToggle}>
                  <Link href={item.path} className={isHomePage ? "text-gray-700" : "text-white"}>
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItem>
              ))}
              <ListItem>
                <button
                  className={`w-full border px-4 py-2 rounded-md transition-colors ${
                    isHomePage
                      ? "border-[#be5360] text-[#be5360] hover:bg-red-100"
                      : "border-white text-white hover:bg-white/20"
                  }`}
                >
                  Contact Us
                </button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
