'use client';

import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSignupClick: () => void;
}

export default function Header({ onSignupClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Gérer le scroll vers la section Resources
    const hash = window.location.hash;
    if (hash === '#Resources') {
      const element = document.getElementById('Resources');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const navItems = [
    { label: 'FonctionnalitÃ©s', href: '#modules' },
    { label: 'Comment Ã§a marche', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Resources', href: '/Resources' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              GMENAI
            </a>
          </div>

          {/* Desktop Navigation */}
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
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
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

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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





