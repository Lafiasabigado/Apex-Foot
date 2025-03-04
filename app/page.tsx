import React from 'react'
import Navbar from './components/Nav'
import Presentation from './components/Presentation'
import About from './about/page'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Presentation />
      <About />
    </div>
  )
}

export default Page