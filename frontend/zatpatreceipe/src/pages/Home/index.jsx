import React from 'react'
import '../../styles/Home/index.css'
import Nav from '../../sections/Home/Nav'
import Hero from '../../sections/Home/Hero'
import Categories from '../../sections/Home/Categories'
import Spclcategorys from '../../sections/Home/Spclcategorys'


const Home = () => {
  return (    
 <>
  <Hero/> 
  <Categories/>
  <Spclcategorys/>
 </>
  )
}

export default Home