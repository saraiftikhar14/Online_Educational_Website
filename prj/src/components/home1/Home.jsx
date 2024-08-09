import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero1/Hero'
import Hprice from './Hprice'
import Test from './testiomonal/Test'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </div>
  )
}

export default Home
