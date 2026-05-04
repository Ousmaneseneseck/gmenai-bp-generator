'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import SignupModal from './SignupModal';

interface FooterProps {
  onSignupClick: () => void;
  isSignupOpen: boolean;
  setIsSignupOpen: (open: boolean) => void;
}

export default function Footer({ onSignupClick, isSignupOpen, setIsSignupOpen }: FooterProps) {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">GMENAI</h3>
              <p className="text-gray-400 text-sm">
                Générez automatiquement des business plans bancables avec l'IA.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#modules" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Comment ça marche</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
                <li><button onClick={onSignupClick} className="text-gray-400 hover:text-white transition-colors">Essayer gratuitement</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
                  <span>contact@gmenai.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>+221 77 571 35 51</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>Dakar, Sénégal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links - Version avec emojis */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              📘 Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              🐦 Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              🔗 LinkedIn
            </a>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto text-center mb-8">
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                S'abonner
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm pt-6 border-t border-gray-800">
            <p>&copy; 2026 GMENAI. Tous droits réservés.</p>
            <p className="mt-1">💰 Tous les prix sont en FCFA</p>
          </div>
        </div>
      </footer>

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}
