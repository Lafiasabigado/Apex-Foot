import React from 'react'

const Presentation = () => {
  return (
    <div className='pt-30 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div 
          className='grid grid-cols-1 items-center justify-center h-screen w-full gap-10 rounded-xl bg-cover bg-center bg-no-repeat min-h-[500px] relative overflow-hidden' 
          style={{backgroundImage: "url('/bg2.jpg')"}}
        >
          {/* Overlay sombre pour améliorer la lisibilité du texte */}
          <div className='absolute  inset-0 bg-black/50'></div>
          
          <div className='p-10 text-left relative z-10 text-gray-300'>
            <h1 className='text-4xl font-bold mb-6 text-gray-300'>Apex Foot</h1>
            <p className='mb-8 text-lg text-gray-300'>
              Apex Foot est une agence dédiée à la mise en valeur des footballeurs talentueux. 
              Nous les aidons à se faire repérer, à développer leur image et à booster leur 
              carrière grâce à notre expertise et notre réseau de partenaires.
            </p>
            <div className='space-x-4'>
              <button className='bg-blue-600 hover:bg-blue-700 font-bold py-3 px-6 rounded-lg transition duration-300'>
                Découvrir nos services
              </button>
              <button className='bg-transparent hover:bg-white/10 font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300'>
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation