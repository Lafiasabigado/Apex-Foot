"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, Trophy, Target, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

interface Player {
  firstname: string;
  lastname: string;
  nationality: string;
  club: string;
  position: string;
  goals: number;
  assists: number;
  date_of_birthday: string;
  image: string;
}

export default function PlayerDetail({ params }: { params: { name: string } }) {
  const [player, setPlayer] = useState<Player | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch('/api/players')
        const data = await response.json()
        const playerData = data.find((p: Player) => p.firstname === params.name)
        setPlayer(playerData)
      } catch (error) {
        console.error('Erreur lors de la récupération du joueur:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlayer()
  }, [params.name])

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Joueur non trouvé</h2>
          <Link href="/players" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
            Retour à la liste des joueurs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/players" 
          className="inline-flex items-center text-blue-500 hover:text-blue-600 py-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la liste des joueurs
        </Link>

        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3">
              <div className="relative h-96 md:h-full">
                <Image
                  src={player.image}
                  alt={`${player.firstname} ${player.lastname}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {player.firstname} {player.lastname}
              </h1>
              
              <div className="flex items-center mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {player.position}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Club</p>
                    <p className="font-medium">{player.club}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Âge</p>
                    <p className="font-medium">{calculateAge(player.date_of_birthday)} ans</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Buts</p>
                    <p className="font-medium">{player.goals}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Passes décisives</p>
                    <p className="font-medium">{player.assists}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Informations supplémentaires</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Nationalité</p>
                    <p className="font-medium">{player.nationality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date de naissance</p>
                    <p className="font-medium">
                      {new Date(player.date_of_birthday).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 