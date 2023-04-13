import React from 'react'
import NavComp from '../Navbar/NavComp'
import Hero from '../Hero/Hero'
import DisPoster from '../DiscountPoster/DisPoster'
import CategoryComp from '../Category/CategoryComp'
import TrendingPost from '../TrendingPost/TrendingPost'
import TrendWeek from '../TrendingPost/TrendWeek/TrendWeek'

const Home = () => {
  return (
    <div><NavComp/>
    <Hero/>
    <DisPoster/>
    <CategoryComp/>
    <TrendingPost/>
    <TrendWeek/>
    </div>
  )
}

export default Home