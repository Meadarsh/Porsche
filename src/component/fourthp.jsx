import React, { useEffect, useState } from "react";
import "./fourthstyle.css";
const Fourthp = () => {
  const[open,setOpen]=useState([1,0,0])
  const[img,setImg]=useState(1)
  function openkaro(e){
    if(e==1){
      setOpen([1,0,0])
      setImg(1)
    }
    if(e==2){
      setOpen([0,1,0])
      setImg(2)
    }
    if(e==3){
      setOpen([0,0,1])
      setImg(3)
    }
  }
  return (
    <div className="Fourthmain">
      <img src={`/porsche-normal-gray-4page${img}.webp`} alt="n/A" />
      <div className="fourthpbox">
        <div className="model-slider">
          <h1>Car body shapes.</h1>
          <div className={`model-div `}   onClick={()=>openkaro(1)}>
            <h1>Coupé.</h1>
            <div className={`redline ${open[0]?'redlineactive':null}`}></div>
            <div className={`model-div-inner ${open[0]?'opened':null}`}>
              <p>
                The Coupé version of the 911 embodies Porsche DNA in its purest
                form: the long, flat bonnet, the steeply inclined windscreen.
                And the roof line that slopes gently down towards the rear,
                already characterised the original 911.
              </p>
            </div>
          </div>
          <div className="model-div" onClick={()=>openkaro(2)}>
            <h1>Cabriolet.</h1>
            <div className={`redline ${open[1]?'redlineactive':null}`}></div>

            <div className={`model-div-inner ${open[1]?'opened':null}`}>
              <p >
                The open-top variant of the 911 has always been characterised by
                a heightened feeling of freedom and plenty of fresh air. When
                closed, the Cabriolet has the elegant silhouette of the 911
                Coupé models – thanks to its fully automatic fabric hood.
              </p>
            </div>
          </div>
          <div className="model-div" onClick={()=>openkaro(3)}>
            <h1>Coupé.</h1>
            <div className={`redline ${open[2]?'redlineactive':null}`}></div>

            <div className={`model-div-inner ${open[2]?'opened':null}`}>
              <p >
                The most stylish 911 model has the addition ‘targa’. With its
                characteristic roll-over bar and innovative roof concept, the
                911 Targa is a timeless classic. And at the same time it is an
                open-top variant of the 911 with the comfort and safety of an
                enclosed car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthp;
