import React from 'react'
import Navbar from './components/Nav'
import Presentation from './components/Presentation'
import About from './about/page'
import Services from './services/page'
import Players from './players/page'
import Team from './team/page'

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Presentation />
      <About />
      <Services />
      <Players />
      <Team />
    </div>
  )
}

export default Page