import React from 'react'
import Presentation from './components/Presentation'
import About from './about/page'
import Services from './services/page'
import Players from './players/page'
import Team from './team/page'
import Contact from './contact/page'
import Partners from './partners/page'

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Presentation />
      <About />
      <Services />
      <Players />
      <Team />
      <Partners />
      <Contact />
    </div>
  )
}

export default Page