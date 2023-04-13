import React, { useEffect, useState } from 'react'
import './CategoryCompcss.css'
import { NavLink } from 'react-bootstrap'
import InnerCatComp from './InnerCategory/InnerCatComp'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/apidata/Action';

const CategoryComp = () => {
  const dispatch = useDispatch()
  const [apidata, setApidata] = useState([])
  const data = useSelector(state => state.api)
  // const value=data.data.data;

  useEffect(() => {
    fetch('http://localhost:5000/category/get-category')
      .then(res => res.json())
      .then(data => setApidata(data.data))
    dispatch(getData);
  }, []);

  return (
    <>
      <div className='catwrapper container'>
        <div className='categorydiv'>
          <div className='catheader'>
            <div><h3>Popular categories</h3></div>
            <div><NavLink>Shop all categories <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </NavLink></div>
          </div>
          <div className='innercategoryWrapper'>
            {
              apidata.map((val) => {
                return <InnerCatComp src={val.image} id={val._id} name={val.name} />

              })
            }          
        </div>


        </div>
      </div>



    </>
  )
}

export default CategoryComp