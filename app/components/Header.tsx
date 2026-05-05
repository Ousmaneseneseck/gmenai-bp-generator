// app/components/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSignupClick: () => void;
}

export default function Header({ onSignupClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Fonctionnalités', anchor: 'features' },
    { label: 'Comment ça marche', anchor: 'how-it-works' },
    { label: 'Tarifs', anchor: 'pricing' },
    { label: 'Ressources', anchor: 'resources' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">GMENAI</a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.anchor)} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                {item.label}
              </button>
            ))}
            <button onClick={onSignupClick} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Connexion</button>
            <button onClick={onSignupClick} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">Essayer gratuitement</button>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (<button key={item.label} onClick={() => { scrollToSection(item.anchor); setIsMenuOpen(false); }} className="text-left">{item.label}</button>))}
                <button onClick={() => { onSignupClick(); setIsMenuOpen(false); }}>Connexion</button>
                <button onClick={() => { onSignupClick(); setIsMenuOpen(false); }} className="bg-primary text-white px-4 py-2 rounded-lg w-full">Essayer gratuitement</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
