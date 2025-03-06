'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Trophy,
  Users,
  Target,
  Dumbbell,
  Heart,
  Brain,
  Shield,
  TrendingUp
} from "lucide-react"

const Services = () => {
    const services = [
        {
          title: "Formation d'Elite",
          description: "Programme d'entraînement personnalisé pour développer les talents de demain",
          icon: <Trophy className="w-8 h-8 text-blue-500" />,
          color: "blue"
        },
        {
          title: "Coaching Personnel",
          description: "Accompagnement individuel pour atteindre vos objectifs sportifs",
          icon: <Users className="w-8 h-8 text-green-500" />,
          color: "green"
        },
        {
          title: "Préparation Physique",
          description: "Optimisation des performances physiques et prévention des blessures",
          icon: <Dumbbell className="w-8 h-8 text-purple-500" />,
          color: "purple"
        },
        {
          title: "Analyse Tactique",
          description: "Étude approfondie du jeu et développement stratégique",
          icon: <Target className="w-8 h-8 text-red-500" />,
          color: "red"
        },
        {
          title: "Suivi Médical",
          description: "Surveillance médicale régulière et récupération optimale",
          icon: <Heart className="w-8 h-8 text-pink-500" />,
          color: "pink"
        },
        {
          title: "Préparation Mentale",
          description: "Renforcement mental et gestion du stress en compétition",
          icon: <Brain className="w-8 h-8 text-indigo-500" />,
          color: "indigo"
        },
        {
          title: "Protection des Joueurs",
          description: "Encadrement juridique et gestion de carrière",
          icon: <Shield className="w-8 h-8 text-yellow-500" />,
          color: "yellow"
        },
        {
          title: "Développement de Carrière",
          description: "Accompagnement dans l'évolution professionnelle",
          icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
          color: "emerald"
        }
      ];
    
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold uppercase text-blue-500 sm:text-4xl mb-4">
            Nos Services
          </h1>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services dédiés au développement 
            et à l'excellence dans le football professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div className={`mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 text-gray-900 group-hover:text-${service.color}-500 transition-colors duration-300`}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services