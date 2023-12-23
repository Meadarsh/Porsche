import React, { useEffect, useState,useRef } from 'react'
import './secondstyle.css'
import { Data } from './slider'
import { BsArrowLeftCircle ,BsArrowRightCircle} from "react-icons/bs";
import gsap from 'gsap'
const Secondp = () => {
   const[imgIndex,setImgIndex]=useState(1)
   function PrevImg(){
      if(imgIndex>1){
         setImgIndex(imgIndex-1)
      }
   }
   function NextImg(){
      if(imgIndex<9){
         setImgIndex(imgIndex+1)
      }
   }
   let value;
   useEffect(()=>{
    

     if(imgIndex<7)
     { value=7.5-((imgIndex-1)*21.25)}
     if(imgIndex>=7)
     { value=7.5-(5*21.25)}
     gsap.to(`.card`,{
      y:0,
      zIndex:1,
      boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px'
     })
     gsap.to(`.card${imgIndex}`,{
      y:-20,
      zIndex:10,
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
     })
     gsap.to('.sliderCarddiv',{
     x:`${value}vw`,
     duration:.3
     })
     gsap.from('.sliderImg img',{
      opacity:0
     })
     gsap.to('.sliderImg img',{
      opacity:1,
      duration:.8
     })
   },[imgIndex])
  return (
     <div className="secondmain">
        <div className='secondp1cont'>
         <video  poster='/greenCarPre.webp' autoPlay loop muted >
         <source src="/greenCarVid.mp4" type="video/mp4"/>
         </video>
         <div className="secondp1cont-txt">
            <h1>
               The 911 Carrera
            </h1>
            <p>
            Fewer kilograms equals more agility and contact with the road is more important than ever. The 911 <br />
            T is a commitment to purism. A conscious release for increased driving pleasure.
            </p>
         </div>
        </div>
        <div className="slider">
         <div className='sliderHeading'>
            <h1>
            911 Carrera T highlights.
            </h1>
         </div>
         <div className='slider1inner'>
         <BsArrowLeftCircle onClick={PrevImg}/>
         <div className="sliderImg">  
          <img src={`public/slider${imgIndex}.webp`} alt="n/a" />
         </div>
         <BsArrowRightCircle onClick={NextImg}/>
         </div>
         <div className="sliderCarddiv">
           {Data.map((e)=>(
            <div key={e.index} className={`card card${e.index}`} onClick={()=>setImgIndex(e.index)}>
               <h3>{e.Title}</h3>
               <p>
                  {e.Discription}
               </p>
            </div>
           )) }

         </div>
        </div>
     </div>
  )
}

export default Secondp