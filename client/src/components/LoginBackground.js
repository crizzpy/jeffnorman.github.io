import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import delay from 'delay'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring } from 'react-spring/renderprops'
import { LoginForm } from './LoginForm'

export const LoginBackground = () => {
    const Script1 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)"}, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)"}, reset: true });
    }

  })
  const Script2 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script3 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(800)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script4 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script5 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(2200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script6 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(400)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script7 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(800)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script8 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1600)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script9 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script10 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(900)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script11 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1300)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script12 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1100)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script13 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(900)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script14 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script15 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script16 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1700)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script17 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1400)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script18 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script19 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(700)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script20 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(350)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script21 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script22 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })

  const CloudScript1 = Keyframes.Spring(async next => {
    while(true) {
      await next({transform: "translateX(1200px)", from: {transform: "translateX(0px)"}, reset: true})
      await next({transform: "translateX(0px)", from: {transform: "translateX(-1200px)"}, reset: true})
    }
  })
  const CloudScript2 = Keyframes.Spring(async next => {
    while(true) {
      await next({transform: "translateX(0px) translateY(60px)", from: {transform: "translateX(-1200px) translateY(60px)"}, reset: true})
      await next({transform: "translateX(1200px) translateY(60px)", from: {transform: "translateX(0px) translateY(60px)"}, reset: true})
    }
  })


  const WaveScript1 = Keyframes.Spring(async next=> {
    while(true) {
      await delay(500)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true})
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true})
    }
  })
  const WaveScript2 = Keyframes.Spring(async next => {
    while (true) {
      await delay(150)
      await next({ transform: "translateY(-1px)", opacity: 0 , from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true})
      await next({ transform: "translateY(0px)", opacity: 0.1 , from: { transform: "translateY(-1px)", opacity: 0 }, reset: true})
    }
  })
  const WaveScript3 = Keyframes.Spring(async next => {
    while (true) {
      await delay(600)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript4 = Keyframes.Spring(async next => {
    while (true) {
      await delay(220)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript5 = Keyframes.Spring(async next => {
    while (true) {
      await delay(100)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript6 = Keyframes.Spring(async next => {
    while (true) {
      await delay(20)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
    const WaveScript7 = Keyframes.Spring(async next=> {
    while(true) {
      await delay(300)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true})
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true})
    }
  })
  const WaveScript8 = Keyframes.Spring(async next => {
    while (true) {
      await delay(170)
      await next({ transform: "translateY(-1px)", opacity: 0 , from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true})
      await next({ transform: "translateY(0px)", opacity: 0.1 , from: { transform: "translateY(-1px)", opacity: 0 }, reset: true})
    }
  })
  const WaveScript9 = Keyframes.Spring(async next => {
    while (true) {
      await delay(800)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript10 = Keyframes.Spring(async next => {
    while (true) {
      await delay(350)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript11 = Keyframes.Spring(async next => {
    while (true) {
      await delay(700)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript12 = Keyframes.Spring(async next => {
    while (true) {
      await delay(290)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript13 = Keyframes.Spring(async next => {
    while (true) {
      await delay(1000)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript14 = Keyframes.Spring(async next => {
    while (true) {
      await delay(420)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript15 = Keyframes.Spring(async next => {
    while (true) {
      await delay(690)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript16 = Keyframes.Spring(async next => {
    while (true) {
      await delay(270)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript17 = Keyframes.Spring(async next => {
    while (true) {
      await delay(900)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript18 = Keyframes.Spring(async next => {
    while (true) {
      await delay(410)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  const WaveScript19 = Keyframes.Spring(async next => {
    while (true) {
      await delay(1200)
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
    }
  })
  const WaveScript20 = Keyframes.Spring(async next => {
    while (true) {
      await delay(670)
      await next({ transform: "translateY(-1px)", opacity: 0, from: { transform: "translateY(0px)", opacity: 0.1 }, reset: true })
      await next({ transform: "translateY(0px)", opacity: 0.1, from: { transform: "translateY(-1px)", opacity: 0 }, reset: true })
    }
  })
  // function setWindowHeight() {
  //   let windowHeight = document.innerHeight;
  //   document.body.style.height = windowHeight + "px";
  //   console.log(document.body.style.height);
  // }
  // document.addEventListener("resize", setWindowHeight, false);

  // document.addEventListener("DOMContentLoaded", event => {
  //   setTimeout(() => {
  //     setPageReady(true);
  //   }, 230);
  // });

  return(
    //   <React.Fragment>
    //   <div className="login_container" style={require("../style/login.css")}>
    //     {/* <div className="moon"> */}
    //     {/* <svg width="100%" height="100%" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg"> */}
    //       <svg width="100%" height="100%" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <defs>
    //             <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_1_blur">
    //               <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
    //             </filter>
    //           </defs>
    //           <path stroke="#FFE68F" transform="rotate(-134 67.58161163330078,68.32870483398438) " id="svg_3" d="m99.186113,130.951092l0,0c-34.906272,0 -63.209006,-28.032067 -63.209006,-62.62238c0,-34.585881 28.302735,-62.62238 63.209006,-62.62238l0,0c-19.893102,14.782639 -31.602332,37.984648 -31.602332,62.62238s11.709231,47.835309 31.602332,62.62238z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#FFE68F" />
    //           <path style={{overflow: "hidden"}} filter="url(#svg_1_blur)" stroke="#FFE68F" transform="rotate(-134 67.58161163330078,68.32870483398438) " id="svg_3" d="m99.186113,130.951092l0,0c-34.906272,0 -63.209006,-28.032067 -63.209006,-62.62238c0,-34.585881 28.302735,-62.62238 63.209006,-62.62238l0,0c-19.893102,14.782639 -31.602332,37.984648 -31.602332,62.62238s11.709231,47.835309 31.602332,62.62238z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none" />
    //       </svg>
    //     {/* </svg> */}
    //   </div>
    // </React.Fragment>
    <React.Fragment>

      <div className="login_container" style={require("../style/login.css")}>
        <div className="moon">
          <svg width="119" height="123" viewBox="0 0 119 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <defs>
              <clipPath id="clipPath1">
                <ellipse cx="41.5" cy="44.5" rx="59.5" ry="59.5" fill="#001970" />
              </clipPath>
            </defs>
            <ellipse cx="59.5" cy="61.5" rx="59.5" ry="59.5" fill="#FFE68F" />
            <ellipse cx="41.5" cy="44.5" rx="59.5" ry="59.5" fill="#001970" style={{ clipPath: "url(#clipPath1)" }}/> */}
            <defs>
              <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_1_blur">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
            </defs>
            <path stroke="#FFE68F" transform="rotate(-134 67.58161163330078,68.32870483398438) " id="svg_3" d="m99.186113,130.951092l0,0c-34.906272,0 -63.209006,-28.032067 -63.209006,-62.62238c0,-34.585881 28.302735,-62.62238 63.209006,-62.62238l0,0c-19.893102,14.782639 -31.602332,37.984648 -31.602332,62.62238s11.709231,47.835309 31.602332,62.62238z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#FFE68F" />
            <path style={{ overflow: "hidden" }} filter="url(#svg_1_blur)" stroke="#FFE68F" transform="rotate(-134 67.58161163330078,68.32870483398438) " id="svg_3" d="m99.186113,130.951092l0,0c-34.906272,0 -63.209006,-28.032067 -63.209006,-62.62238c0,-34.585881 28.302735,-62.62238 63.209006,-62.62238l0,0c-19.893102,14.782639 -31.602332,37.984648 -31.602332,62.62238s11.709231,47.835309 31.602332,62.62238z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none" />
          </svg>
        </div>
        <div className="cloudrear">
          <CloudScript1
            config={{ duration: 40000 }}
          >
            {style => (
              <svg style={style} width="120" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="9" rx="6" fill="#B7B5A4" />
                <ellipse cx="11" cy="1" rx="7" ry="5" fill="#B7B5A4" />
              </svg>
            )}
          </CloudScript1>
          <CloudScript2
            config={{ duration: 40000 }}
          >
            {style => (
              <svg style={style} width="120" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="9" rx="6" fill="#B7B5A4" />
                <ellipse cx="11" cy="1" rx="7" ry="5" fill="#B7B5A4" />
              </svg>
            )}
          </CloudScript2>

        </div>
        <div className="cloudmid">
          <CloudScript1
            config={{ duration: 60000 }}
          >
            {style => (
              <svg style={style} width="140" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="25" height="8" rx="6" fill="#B7B5A4" />
                <ellipse cx="9" cy="1" rx="6" ry="4" fill="#B7B5A4" />
                <ellipse cx="14" cy="3" rx="5" ry="5" fill="#B7B5A4" />
              </svg>
            )}
          </CloudScript1>
        </div>
        <div className="hillback">
          <div className="hillbackrear">
            <svg width="94" height="300" viewBox="0 0 94 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="164" fill="#340088" />
              <circle cx="47" cy="0" r="47" fill="#340088" />
            </svg>
          </div>
          <div className="hillbackmid">
            <svg width="115" height="350" viewBox="0 0 115 194" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="115" height="164" fill="#3C009E" />
              <ellipse cx="57.5" cy="0" rx="57.5" ry="56" fill="#3C009E" />
            </svg>
          </div>
          <div className="hillbackfront">
            <svg width="107" height="330" viewBox="0 0 107 194" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="107" height="194" fill="#4302AC" />
              <ellipse cx="53.5" cy="0" rx="53.5" ry="55.5" fill="#4302AC" />
            </svg>

          </div>
        </div>
        <div className="cloudfront">
          <CloudScript1
            config={{ duration: 80000 }}
          >
            {style => (
              <svg style={style} width="140" height="120" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="15" rx="10" fill="#B7B5A4" />
                <ellipse cx="12" cy="1" rx="7" ry="5" fill="#B7B5A4" />
              </svg>
            )}
          </CloudScript1>
          <CloudScript2
            config={{ duration: 80000 }}
          >
            {style => (
              <svg style={style} width="140" height="120" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="15" rx="10" fill="#B7B5A4" />
                <ellipse cx="12" cy="1" rx="7" ry="5" fill="#B7B5A4" />
              </svg>
            )}
          </CloudScript2>
        </div>
        <div className="treesback">
          <svg width="1450" height="123" viewBox="0 0 400 123" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* <animated.ellipse cx="-100" cy="49.5" rx="48" ry="49.5" fill="#5E51AA" /> */}
            {/* <Script
                config={config.molasses}
              >
                {style => (
                  <svg height="100" width="200" viewbox="0 0 100 100" fill="#5E51AA">
                    <animated.ellipse style={style} cx="20" cy="30" rx="48" ry="49.5" fill="#5E51AA"/>
                  </svg>
                )}
              </Script> */}
            {/* <animated.ellipse cx="-100" cy="49.5" rx="48" ry="49.5" fill="#5E51AA" state="showAndHide" style={{ 
              transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
            }}/> */}

            {/*  BACK TREES  */}

            <Script5 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="250" cy="30" rx="47.5" ry="49.5" fill="#473A94" />}
            </Script5>
            <Script8 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="400" cy="25" rx="47.5" ry="49" fill="#473A94" />}
            </Script8>

            <Script13 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="650" cy="19" rx="47.5" ry="49" fill="#473A94" />}
            </Script13>

            <Script16 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="800" cy="19" rx="47.5" ry="49" fill="#473A94" />}
            </Script16>

            <Script17 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="850" cy="28" rx="47.5" ry="49" fill="#473A94" />}
            </Script17>

            <Script19 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="950" cy="27" rx="47.5" ry="49" fill="#473A94" />}
            </Script19>
            <Script20 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1000" cy="25" rx="47.5" ry="49" fill="#473A94" />}
            </Script20>



            {/*  MID TREES  */}



            <Script1 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="50" cy="20" rx="48" ry="49.5" fill="#4C4093" />}
            </Script1>

            <Script4 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="200" cy="25" rx="47.5" ry="49" fill="#4C4093" />}
            </Script4>
            <Script9 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="450" cy="22" rx="47.5" ry="49" fill="#4C4093" />}
            </Script9>
            <Script11 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="550" cy="18" rx="48" ry="49.5" fill="#4C4093" />}
            </Script11>
            <Script12 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="600" cy="21" rx="48" ry="49" fill="#4C4093" />}
            </Script12>

            {/*  FRONT TREES  */}
            <Script2 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="100" cy="18" rx="48" ry="49.5" fill="#5E51AA" />}
            </Script2>
            <Script3 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="150" cy="22" rx="48" ry="49" fill="#5E51AA" />}
            </Script3>
            <Script6 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="300" cy="24" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script6>
            <Script7 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="350" cy="20" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script7>
            <Script10 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="500" cy="20" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script10>
            <Script14 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="700" cy="17" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script14>
            <Script15 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="750" cy="21" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script15>


            <Script18 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="900" cy="25" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script18>
          </svg>
        </div>
        <div className="lake">
          <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <path d="M85.9737 54.5021L130.585 66.6617L167.761 72.3362H214.496L289.91 66.6617H371.698L499.158 76.3894L700.971 96.6553L818.871 103.14L1009 96.6553V382H1V1L85.9737 54.5021Z" fill="#6E6CD6" stroke="#6E6CD6" /> */}
            <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="#001970" stroke="#001970" />
            <defs>
              <clipPath id="clipPath4">
                <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="#6E6CD6" stroke="#6E6CD6" />
                {/* <rect x="-300" y="60" width="200" height="40" /> */}
              </clipPath>
            </defs>
            <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ clipPath: "url(#clipPath4)" }}>

              {/* Trees Reflection */}
              {/*  BACK TREES  */}

              <Script5 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="510" cy="42" rx="47.5" ry="49.5" fill="#473A94" />}
              </Script5>
              <Script8 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="660" cy="44" rx="47.5" ry="49" fill="#473A94" />}
              </Script8>
              <Script13 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="910" cy="72" rx="47.5" ry="49" fill="#473A94" />}
              </Script13>
              <Script16 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1060" cy="105" rx="47.5" ry="49" fill="#473A94" />}
              </Script16>
              <Script17 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1110" cy="103" rx="47.5" ry="49" fill="#473A94" />}
              </Script17>
              <Script19 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1210" cy="99" rx="47.5" ry="49" fill="#473A94" />}
              </Script19>
              <Script20 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1260" cy="99" rx="47.5" ry="49" fill="#473A94" />}
              </Script20>

              {/*  MID TREES  */}


              <Script1 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="310" cy="48" rx="48" ry="49.5" fill="#4C4093" />}
              </Script1>
              <Script4 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="460" cy="45" rx="47.5" ry="49" fill="#4C4093" />}
              </Script4>
              <Script9 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="710" cy="48" rx="47.5" ry="49" fill="#4C4093" />}
              </Script9>
              <Script11 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="810" cy="67" rx="48" ry="49.5" fill="#4C4093" />}
              </Script11>
              <Script12 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="860" cy="70" rx="48" ry="49" fill="#4C4093" />}
              </Script12>

              {/*  FRONT TREES  */}

              <Script2 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="360" cy="48" rx="48" ry="49.5" fill="#5E51AA" />}
              </Script2>
              <Script3 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="410 " cy="45" rx="48" ry="49" fill="#5E51AA" />}
              </Script3>


              <Script6 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="560" cy="45" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script6>
              <Script7 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="610" cy="50" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script7>


              <Script10 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="760" cy="62" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script10>


              <Script14 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="960" cy="85" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script14>
              <Script15 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1010" cy="105" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script15>


              <Script18 config={{
                mass: 1,
                tension: 20,
                velocity: 130,
                friction: 150,
                clamp: false,
                duration: 1000
              }}>
                {style => <animated.ellipse style={style} cx="1160" cy="108" rx="47.5" ry="49" fill="#5E51AA" />}
              </Script18>

            </svg>
            <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="Gradient"
                  cx="0.8" cy="0.5" r="0.5" fx="1.29" fy="0.4">
                  <stop offset="0%" stop-color="#fff" />
                  <stop offset="100%" stop-color="#00114d" />
                </radialGradient>
              </defs>
              <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="#001970" stroke="url(#Gradient)" opacity="0.8" />
              <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="url(#Gradient)" stroke="#6E6CD6" opacity="0.6" />
              <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
                <WaveScript1 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="79" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript1>
                <WaveScript2 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_14" height="2" width="38" y="85" x="249.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript2>
                <WaveScript1 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="93" x="255" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript1>
              </svg>
              <svg width="580" height="400" viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">
                <WaveScript3 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="79" x="258" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript3>
                <WaveScript4 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_14" height="2" width="38" y="85" x="249.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript4>
                <WaveScript3 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="93" x="258" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript3>
              </svg>
              <svg width="580" height="400" viewBox="-100 0 300 420" xmlns="http://www.w3.org/2000/svg">
                <WaveScript5 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="79" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript5>
                <WaveScript6 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_14" height="2" width="38" y="85" x="249.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript6>
                <WaveScript5 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="93" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript5>
              </svg>
              <svg width="800" height="400" viewBox="-200 -25 300 490" xmlns="http://www.w3.org/2000/svg">
                <WaveScript7 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="79" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript7>
                <WaveScript8 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_14" height="2" width="38" y="85" x="249.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript8>
                <WaveScript7 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="93" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript7>
              </svg>
              <svg width="1400" height="400" viewBox="-200 -75 300 490" xmlns="http://www.w3.org/2000/svg">
                <WaveScript9 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="79" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript9>
                <WaveScript10 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_14" height="2" width="38" y="85" x="249.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript10>
                <WaveScript9 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_13" height="2" width="12" y="93" x="263.5" rx="1" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript9>
              </svg>
              <svg width="580" height="400" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
                <WaveScript11 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="95" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript11>
                <WaveScript12 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="45" y="102" x="48" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript12>
                <WaveScript11 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="110" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript11>
              </svg>
              <svg width="600" height="400" viewBox="-100 0 50 250" xmlns="http://www.w3.org/2000/svg">
                <WaveScript13 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="95" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript13>
                <WaveScript14 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="45" y="102" x="48" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript14>
                <WaveScript13 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="110" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript13>
              </svg>
              <svg width="800" height="400" viewBox="-50 0 50 150" xmlns="http://www.w3.org/2000/svg">
                <WaveScript15 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="95" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript15>
                <WaveScript16 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="45" y="102" x="48" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript16>
                <WaveScript15 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="110" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript15>
              </svg>
              <svg width="1100" height="400" viewBox="-100 0 50 250" xmlns="http://www.w3.org/2000/svg">
                <WaveScript17 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="95" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript17>
                <WaveScript18 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="45" y="102" x="48" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript18>
                <WaveScript17 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="110" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript17>
              </svg>
              <svg width="1400" height="400" viewBox="-140 0 50 190" xmlns="http://www.w3.org/2000/svg">
                <WaveScript19 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="95" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript19>
                <WaveScript20 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="45" y="102" x="48" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript20>
                <WaveScript19 config={{
                  mass: 1,
                  tension: 20,
                  velocity: 130,
                  friction: 150,
                  clamp: false,
                  duration: 1000
                }}>
                  {style => <animated.rect style={style} stroke="white" id="svg_7" height="2" width="30" y="110" x="56.5" rx="2" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="white" opacity="0.1" />}
                </WaveScript19>
              </svg>

            </svg>
          </svg>

        </div>
        <div className="hillmidrear">
          <svg width="115" height="350" viewBox="0 0 115 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="115" height="194" fill="#671FFF" />
            <ellipse cx="57.5" cy="0" rx="57.5" ry="56" fill="#671FFF" />
          </svg>
        </div>
        <div className="hillmidfront">
          <svg width="116" height="330" viewBox="0 0 116 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="116" height="194" fill="#5B04E9" />
            <ellipse cx="58" cy="0" rx="58" ry="55.5" fill="#5B04E9" />
          </svg>
        </div>
        <div className="treesfront">
          <svg width="500" height="320" viewBox="0 0 241 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Script21 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="300" cy="127" rx="120.5" ry="127" fill="#621AFB" />}
            </Script21>
            <Script22 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="380" cy="100" rx="121" ry="127.5" fill="#7230FF" />}
            </Script22>
          </svg>
        </div>
        <div className="hillfrontrear">
          <svg width="115" height="600" viewBox="0 0 115 277" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="115" height="277" fill="#6E23E8" />
            <ellipse cx="5" cy="5" rx="110" ry="112" fill="#6E23E8" />
          </svg>

        </div>
        <div className="hillfrontfront">
          <svg width="258" height="800" viewBox="0 0 258 411" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="258" height="411" fill="#7230FF" />
            <ellipse cx="138" cy="0" rx="120.5" ry="127" fill="#7230FF" />
          </svg>
        </div>
      </div>
    </React.Fragment>
    )

}