"use client"
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// import logo from "/logo.png";
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Sports API', path: '/sports-api' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header className="w-full bg-transparent py-4 px-6">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/bg.png"  // Direct reference to public folder
                            alt="Cricsportz Logo"
                            width={150}
                            height={40}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="bg-red-50 text-red-500 px-4 py-2 rounded-md hover:bg-red-100 transition-colors">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <Menu className="h-6 w-6" />
                    </IconButton>
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better mobile performance
                    }}
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
                                    <Link href={item.path}>
                                        <ListItemText primary={item.name} />
                                    </Link>
                                </ListItem>
                            ))}
                            <ListItem>
                                <button className="w-full bg-red-50 text-red-500 px-4 py-2 rounded-md hover:bg-red-100 transition-colors">
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