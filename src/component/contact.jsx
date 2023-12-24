import React from 'react'
import './developer.css'
import { HiArrowUpRight } from "react-icons/hi2";
const Contact = () => {
  return (
    <div className='developer-main'>
        <div className='developer-main-left'>
            <h1>Developer: Adarsh yadav</h1>
        </div>
       <a href="https://adarsh-33.vercel.app/"><div className='developer-main-right'>
         <p>Visit</p>
         <HiArrowUpRight/>
    </div></a> 
    </div>
  )
}

export default Contact