import React, { useEffect } from "react";
import "./fifthstyle.css";
import gsap from "gsap";
import { BsFuelPump } from "react-icons/bs";

import { ScrollTrigger } from "gsap/all";
const Fifthp = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fifthvideo-cont", {
      scrollTrigger: {
        trigger: ".fifthvideo-cont",
        start: "top top",
        end: "170% bottom",
        scrub: 1,
        pin: true,
      },
    });
    gsap.to('.fifthp-video-overlay',{
        opacity:.7,
        scrollTrigger:{
            trigger: '.fifthp-video-overlay',
            start: 'top top',
            end: '150% bottom',
            scrub: 1,
        }
    })
  });
  return (
    <div className="fifthmain">
      <div className="fifthvideo-cont">
        <video
          poster="/fifth-page-pre.webp"
          autoPlay
          muted
          loop
          src="/fifth-page-video.mp4"
        ></video>
        <div className="fifthp-video-overlay"></div>
      </div>

      <div className="floating-txt">
        <h1>Sports car performance.</h1>
        <div className="ft-container">
          <div className="ft-cont-inner">
            <h2>911 Carrera Cabriolet Models (WLTP)*</h2>

            <div className="fuel-carbon-main">
              <div className="fuel-carbon-div">
                <div className="circle-box">
                  <BsFuelPump />
                </div>
                <div className="fule-cuns-numb">
                  <h3>11,3-10,3</h3>
                  <p>l/km</p>
                </div>
              </div>
              <div className="fuel-carbon-div">
              <div className="circle-box">
                  <h3>
                    CO<span>2</span>
                  </h3>
                </div>
                <div className="fule-cuns-numb">
                  <h3>256-233</h3>
                  <p>g/km</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ft-cont-inner">
            <h2>911 Carrera Coupé Models (WLTP)*</h2>
            <div className="fuel-carbon-main">
              <div className="fuel-carbon-div">
                <div className="circle-box">
                  <BsFuelPump />
                </div>
                <div className="fule-cuns-numb">
                  <h3>11,3=4-10,1</h3>
                  <p>l/km</p>
                </div>
              </div>
              <div className="fuel-carbon-div">
              <div className="circle-box">
                  <h3>
                    CO<span>2</span>
                  </h3>
                </div>
                <div className="fule-cuns-numb">
                  <h3>259-236</h3>
                  <p>g/km</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ft-cont-inner">
            <h2>911 Targa Models (WLTP)*</h2>
            <div className="fuel-carbon-main">
              <div className="fuel-carbon-div">
                <div className="circle-box">
                  <BsFuelPump />
                </div>
                <div className="fule-cuns-numb">
                  <h3>11,3-10,4</h3>
                  <p>l/km</p>
                </div>
              </div>
              <div className="fuel-carbon-div">
              <div className="circle-box">
                  <h3>
                    CO<span>2</span>
                  </h3>
                </div>
                <div className="fule-cuns-numb">
                  <h3>257-236</h3>
                  <p>g/km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth-container2">
            <div className="cont2-inner">
            Powerful twin-turbo six-cylinder horizontally opposed engine in the rear
            </div>
            <div className="cont2-inner">
            High-precision Porsche Doppelkupplung (PDK) transmission
            </div>
            <div className="cont2-inner">
            Systems for increasing the driving dynamic
            </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthp;
