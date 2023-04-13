import React from 'react'
import './TrendWeekcss.css'
import megastore_banner_04 from "../../images/megastore_banner_04.jpg"
import TrendCarousel from './TrendCarousel/TrendCarousel'

const TrendWeek = () => {
  return (
   <>
   <div className='trendweek container'>
    <div className='trendweekwrapper'>
    <div className='trendthumb'>
        <div className='trendimage'>
            <img
            src={megastore_banner_04}
            alt="megastore trend"
            className='megasize'
            />
        </div>
        <div className='overlaytrend'>
        <h2>What Treding</h2>
        <h2>This Week</h2>
        <p>100% leather<br/>
            handmade</p>
        <button>SHOP NOW</button>
        </div>
    </div>
    <div className='trendcarousel'>
        <TrendCarousel/>
    </div>
    </div>
   </div>
   </>
  )
}

export default TrendWeek