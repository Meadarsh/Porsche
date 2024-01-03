import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { Timeline } from 'gsap/gsap-core'
const FirstPage = () => {
    useEffect(()=>{
      gsap.from('.fpoverlay img',{
        opacity:0,
        delay:1.5      })
        gsap.to('.brand-name h4',{
          delay:1,
           y:'0vw',
            duration:1
        })
        var t1= gsap.timeline()
        t1.from('.modelname h1',{
          x:130,
          opacity:0,
          duration:1,
          stagger:.2
        })

},[])
  return (
    <div className='fpoverlay'>
        <div className='fpoverlay-content'>
           <div className='brand-name'>
            <h4>Porsche</h4>
           </div>
           <div className="modelname">
            <h1>911</h1><h1 className='span2'>Carrera</h1> <h1 className='span3'>4S</h1>
           </div>
        </div>
        <img src="/home.webp" alt="" />

    </div>
  )
}

export default FirstPage
