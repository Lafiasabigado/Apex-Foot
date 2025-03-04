'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
    const services = [
        {
          title: "Mise en relation avec des clubs",
          description: "Accédez à notre réseau de clubs partenaires pour développer votre carrière",
          icon: "🤝",
        },
        {
          title: "Coaching & Préparation mentale",
          description: "Bénéficiez d'un accompagnement personnalisé pour atteindre votre plein potentiel",
          icon: "🎯",
        },
        {
          title: "Médiatisation et gestion d'image",
          description: "Développez votre image et votre présence médiatique",
          icon: "📱",
        },
        {
          title: "Analyse et statistiques",
          description: "Suivez vos performances grâce à des outils d'analyse avancés",
          icon: "📊",
        },
      ];
    
      const team = [
        {
          name: "Thomas Martin",
          role: "Fondateur & Agent FIFA",
          image: "/team/thomas.jpg",
          description: "15 ans d'expérience dans le scouting international",
        },
        {
          name: "Sarah Durant",
          role: "Responsable Relations Clubs",
          image: "/team/sarah.jpg",
          description: "Ex-joueuse professionnelle et agent certifiée",
        },
      ];
  return (
    <div>
        {/* Services */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-500">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services