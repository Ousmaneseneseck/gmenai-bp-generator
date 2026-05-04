'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSignupClick: () => void;
}

export default function Header({ onSignupClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll vers la section Resources
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#ressources-section' || hash === '#Resources') {
      const element = document.getElementById('ressources-section');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const navItems = [
    { label: 'Fonctionnalités', href: '#modules' },
    { label: 'Comment ça marche', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Ressources', href: '#ressources-section' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              GMENAI
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Connexion
            </a>
            <button
              onClick={onSignupClick}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Essayer gratuitement
            </button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Connexion
                </a>
                <button
                  onClick={() => {
                    onSignupClick();
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 w-full"
                >
                  Essayer gratuitement
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

