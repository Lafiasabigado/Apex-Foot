"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


const Presentation = () => {
  const stats = [
    {
      value: 100,
      label: "Joueurs",
      index: 1
    },
    {
      value:50,
      label:"Clubs",
      index: 2
    },
    {
      value:15,
      label:"Pays",
      index: 3
    },
    {
      value:95,
      label:"Satisfaction",
      index: 4
    }
  ]
  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div 
          className='relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden' 
          style={{backgroundImage: "url('/bg2.jpg')"}}
        >
          
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/40'></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='relative z-10 h-full flex flex-col justify-center p-8 lg:p-16'
          >
            <div className='max-w-2xl'>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className='text-xl md:text-3xl font-bold mb-4 text-white tracking-wider'
              >
                APEX <span className='text-blue-400'>FOOT</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='text-md md:text-base text-gray-300 mb-6 font-light leading-relaxed max-w-xl'
              >
                Nous sommes une agence dédiée à la mise en valeur 
                des footballeurs talentueux et à leur développement professionnel.
              </motion.p>

              <div className='flex flex-col sm:flex-row gap-3 mt-6'>
                <Link href="/services">
                 <button className='bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-6 rounded-md transition-all duration-300 transform hover:scale-105'>
                   Découvrir nos services
                 </button>
                </Link>
                
                <Link href="/contact">
                <button className='bg-transparent hover:bg-white/5 text-white text-sm font-medium py-2.5 px-6 rounded-md border border-white/60 hover:border-white transition-all duration-300'>
                  Nous contacter
                </button>
                </Link>
              </div>

              {/* Statistiques */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                { stats.map((stat, index) => (
                  <div key={index} className='font-bold'>
                    <p className='text-xl md:text-2xl text-blue-400'>{ stat.index != 4 ? stat.value+'+' : stat.value+'%' }</p>
                    <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Presentation