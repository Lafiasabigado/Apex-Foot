import React from 'react'
import Navbar from './components/Nav'
import Presentation from './components/Presentation'

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Presentation />
    </div>
  )
}

export default Page