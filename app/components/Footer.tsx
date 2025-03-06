"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section À propos */}
          <div>
            <div className="mb-4">
              <Image src="/logo3.png" alt="Logo" width={120} height={40} />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Votre partenaire de confiance dans le développement et la gestion de carrière des footballeurs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-sm hover:text-blue-400 transition-colors">
                  Joueurs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Formation d'Elite</li>
              <li className="text-sm">Coaching Personnel</li>
              <li className="text-sm">Préparation Physique</li>
              <li className="text-sm">Analyse Tactique</li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <MapPin size={16} className="mr-2 text-blue-400" />
                123 Rue du Football, Parakou
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-blue-400" />
                +229 97 00 00 00
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-blue-400" />
                contact@apexfoot.com
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Apex Football. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 