import React from 'react'
import './TrendingPostcss.css'
import { NavLink } from 'react-bootstrap'
import megastore_box_01 from '../images/megastore_box_01.jpg'
import megastore_box_02 from '../images/megastore_box_02.jpg'
import megastore_box_03 from '../images/megastore_box_03.jpg'


const TrendingPost = () => {
  return (
    <>
    <div className='trendpostwrapper container'>
    <div className='trendingPoster'>
      <div className='trendpostheader'>
      <div><h3>Trending Collection</h3></div>
            <div><NavLink>Shop all categories <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </NavLink></div>
      </div >
      <hr></hr>
      <div className='trendcontent'>
      <div className='innerTrenPost'>
      <div className='trendimage'>
      <img
      src={megastore_box_01}
      alt="text"
      className='trendimgsize'
      />
      </div>
      </div>
      <div className='innerTrenPost'>
      <div className='trendimage'>
      <img
      src={megastore_box_02}
      alt="text"
      className='trendimgsize'
      />
      </div>
</div>
<div className='innerTrenPost'>
<div className='trendimage'>
      <img
      src={megastore_box_03}
      alt="text"
      className='trendimgsize'
      />
      </div>
</div>
</div>
    </div>
    </div>  


    </>
  )
}

export default TrendingPost