"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/about",
      name: "À propos",
    },
    {
      path: "/services",
      name: "Nos Services",
    },
    {
      path: "/signin",
      name: "Se connecter",
    },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link 
            href="/" 
            className='text-lg text-blue-500 font-bold uppercase dark:text-white hover:text-blue-500 transition-colors duration-200'
            data-aos="fade-right"
          >

            <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Image src="/logo3.png" alt="Apex Foot" width={75} height={75} />
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link, index) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className='hover:text-blue-500 transition-colors duration-200'
                data-aos="fade-down"
                data-aos-delay={index * 100}
              > 
                { link.path === "/signin" ? 
                  <Button variant="outline" className="rounded-full border-none bg-blue-500 text-white hover:bg-blue-600">
                   Se connecter
                  </Button> : link.name
                }
              </Link>
            ))}
          </div>

          {/* Menu Burger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden hover:text-blue-500 transition-colors duration-200'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className='md:hidden space-y-4 py-4 bg-white dark:bg-gray-900'>
            {links.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className='block hover:text-blue-500 transition-colors duration-200 py-2'
                onClick={() => setIsOpen(false)}
              >
                { link.path === "/signin" ? 
                 <Button variant="outline" className="rounded-full border-none bg-blue-500 text-white hover:bg-blue-600 py-2 px-4">
                   Se connecter
                 </Button> : link.name
                }
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}