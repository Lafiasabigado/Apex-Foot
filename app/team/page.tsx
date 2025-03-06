"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Code, 
  Users,
  Globe,
  Briefcase
} from "lucide-react"

const Team = () => {
  const team = [
    {
      name: "Abdias Lafia",
      role: "Fondateur & Développeur web",
      image: "/team/lafia.png",
      description: "5 ans d'expérience dans le scouting international",
      stats: [
        { icon: <Code className="w-5 h-5 text-blue-500" />, value: "5+", label: "Années d'expérience" },
        { icon: <Globe className="w-5 h-5 text-green-500" />, value: "10+", label: "Projets réalisés" },
      ],
      speciality: "Développement Full Stack",
    },
    {
      name: "Nel Nelio",
      role: "Co-Fondateur & Développeur web",
      image: "/team/nelo.jpg",
      description: "Ex-joueur professionnelle et agent certifiée",
      stats: [
        { icon: <Code className="w-5 h-5 text-blue-500" />, value: "5+", label: "Années d'expérience" },
        { icon: <Globe className="w-5 h-5 text-green-500" />, value: "8+", label: "Projets réalisés" },
      ],
      speciality: "Développement Front-end",
    },
    {
      name: "Sarah Jacob",
      role: "Responsable Relations Clubs",
      image: "/team/sara.jpg",
      description: "Ex-joueuse professionnelle et agent certifiée",
      stats: [
        { icon: <Users className="w-5 h-5 text-purple-500" />, value: "80+", label: "Clubs partenaires" },
        { icon: <Globe className="w-5 h-5 text-indigo-500" />, value: "25+", label: "Pays couverts" },
      ],
      speciality: "Relations internationales",
    },
    {
      name: "Fadil El Khattabi",
      role: "Responsable Gestion des joueurs",
      image: "/team/fadil.jpg",
      description: "Ex-joueur professionnelle et agent certifiée",
      stats: [
        { icon: <Users className="w-5 h-5 text-yellow-500" />, value: "100+", label: "Joueurs gérés" },
        { icon: <Briefcase className="w-5 h-5 text-red-500" />, value: "50+", label: "Transferts réussis" },
      ],
      speciality: "Gestion de carrière",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold uppercase text-blue-500 mb-4">
            Notre Équipe
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une équipe passionnée combinant expertise technique et connaissance du football
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-blue-300 text-sm">{member.role}</p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Spécialité:</p>
                  <p className="text-blue-600 text-sm">{member.speciality}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {member.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="flex justify-center mb-1">
                        {stat.icon}
                      </div>
                      <p className="font-bold text-gray-900 text-sm">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team