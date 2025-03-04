import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='relative w-full h-[400px] hover:scale-105 transition-all duration-300'>
            <Image 
              src="/player4.jpg" 
              alt="Football training" 
              fill 
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div>
            <h1 className='text-4xl font-bold mb-6'>À propos de nous</h1>
            <p className='text-xl text-gray-600'>
              Depuis sa création, Apex Foot s'engage à accompagner les jeunes talents et les joueurs 
              professionnels dans leur évolution. Notre mission est de leur offrir une visibilité 
              accrue et de leur ouvrir les portes des clubs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About