import React, { useState } from 'react'
import './NavCompcss.css'
import logo from '../images/logo.png'
import { useSelector } from 'react-redux'

const NavComp = () => {
    const data = useSelector(state=>state.api)
    // const value = ;
    // console.log(value)
    const [view,setView]=useState('none')
    // alert(view)

    const categoryButton = () =>{
    (view === "none") ? setView('block') :  setView('none')
    }
  return (
    <>
        <div className='navbar container gx-4'>
            <div className='logo'>
            <img    
            src={logo}
            className='logo-size'
            alt="logo"/>
            </div>
            <div className='input-div'><div className='input_div'>
                <select>
              {/* {
                value.map((val)=>{
                    return <option>{val.name}</option>
                    // return val
                })
              } */}
                </select>
                <input placeholder='Search Products'/></div><div className='searchdiv'><i class="fa fa-search" aria-hidden="true"></i>  </div> </div>
            <div className='user-div'>
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </div>
        </div>
        <hr className='m-0 p-0'></hr>
        <div className='navbar container gx-4'>
            <div className='shop' onClick={categoryButton}> <h4><i class="fa fa-bars" aria-hidden="true"></i> SHOP BY CATEGORIES</h4></div>
            <div className='list'><ul>
                <li>demo</li>
                <li>shop</li>
                <li>products</li>
                <li>page</li>
                </ul></div>
            <div></div>
        </div>
        <div className='overList' style={{display:`${view}`}}>
            <ul>
               {/* {
                data.data.data.map((val)=>{
                    return <li style={{textTransform:'capitalize'}}>{val.name}</li>
                })
              }  */}
    
            </ul>
        </div>
    </>     
  )
}

export default NavComp