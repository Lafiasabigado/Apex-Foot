"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/players");
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des joueurs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const calculateAge = (dob: string) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Découvrez nos joueurs
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Les meilleurs talents du football réunis dans notre équipe
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {players.map((player, index) => (
              <div 
                key={`${player.firstname}-${player.lastname}-${index}`} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={player.image}
                    alt={`${player.firstname} ${player.lastname}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {player.firstname} {player.lastname}
                  </h3>
                  <p className="text-blue-500 font-medium mb-4">
                    {player.position}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-gray-600">Club:</span>
                      <span className="ml-2 font-medium">{player.club}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">Âge:</span>
                      <span className="ml-2 font-medium">
                        {calculateAge(player.date_of_birthday)} ans
                      </span>
                    </div>
                  </div>
                  <p className="mb-4  text-xl font-bold text-gray-800">{player.nationality}</p>
                  <Button 
                    className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors duration-200"
                  >
                    Voir le profil
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
