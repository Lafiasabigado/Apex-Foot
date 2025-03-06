import Image from 'next/image'
import React from 'react'

const Partners = () => {
  const partners = [

    {   id:1,
        name:"UEFA",
        logo:"/partners/uefa.png"
    },
    {   id:2,
        name:"CAF",
        logo:"/partners/caf.png"
    },
    {
        id:3,
        name:"AFC",
        logo:"/partners/afc.png"
    },
    {
        id:4,
        name:"CONCACAF",
        logo:"/partners/concacaf.png"
    },
    {   
        id:5,
        name:"CONMEBOL",
        logo:"/partners/conmebol.png"
    },
    {   
        id:6,
        name:"OFC",
        logo:"/partners/ofc.png"
    },
    
  ]
  return (
    <div className='w-full py-16'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold text-blue-500 uppercase text-center mb-12'>
          Nos partenaires
        </h1>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-12 px-4'>
          {partners.map((partner) => (
            <div key={partner.id} className='flex justify-center items-center'>
              <Image src={partner.logo} alt={partner.name} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners