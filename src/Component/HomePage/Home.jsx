import React from 'react'
import NavComp from '../Navbar/NavComp'
import Hero from '../Hero/Hero'
import DisPoster from '../DiscountPoster/DisPoster'
import CategoryComp from '../Category/CategoryComp'
import TrendingPost from '../TrendingPost/TrendingPost'

const Home = () => {
  return (
    <div><NavComp/>
    <Hero/>
    <DisPoster/>
    <CategoryComp/>
    <TrendingPost/>
    </div>
  )
}

export default Home