import React, { useEffect } from 'react'
import './styles.css'
import './input.css'
import './component/firstpstyle.css'
import FirstPage from './component/firstPage'
import Secondp from './component/secondp'
import Thirdp from './component/Thirdp'
import Fourthp from './component/fourthp'
import Fifthp from './component/fifthp'
import Sixthpage from './component/sixthpage'
import Contact from './component/contact'
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

const App = () => {
  useEffect(()=>{
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
    
  })
  
  
  return (
    <>
   
    <div className='firstpdiv'>
    
    <FirstPage/>
       </div>
       <Secondp/>
       <Thirdp/>
       <Fourthp/>
       <Fifthp/>
       <Sixthpage/>
       <Contact/>
      
   
       </>
  )
}

export default App