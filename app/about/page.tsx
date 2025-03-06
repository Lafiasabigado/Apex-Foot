'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className='text-blue-500 uppercase text-2xl font-bold mb-6'>À propos de nous</h1>
            <p className=' text-gray-600'>
              Depuis sa création, Apex Foot s'engage à accompagner les jeunes talents et les joueurs 
              professionnels dans leur évolution. Notre mission est de leur offrir une visibilité 
              accrue et de leur ouvrir les portes des clubs.
              Nous les aidons à se faire repérer, à développer leur image et à booster leur carrière grâce à notre expertise et notre réseau de partenaires.
            </p>
          </div>
          <div className='relative w-full h-[400px] hover:scale-105 transition-all duration-300'>
            <Image 
              src="/player4.jpg" 
              alt="Football Player" 
              fill 
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About