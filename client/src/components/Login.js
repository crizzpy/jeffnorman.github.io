import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import delay from 'delay'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring } from 'react-spring/renderprops'
import { LoginForm } from './LoginForm'
import { LoginBackground } from './LoginBackground'


// ooooo----------.oooooo.-----.oooooo.----ooooo-ooooo------ooo-----------ooooooooo.---------.o.---------.oooooo.----oooooooooooo-
// `888'---------d8P'--`Y8b---d8P'--`Y8b---`888'-`888b.-----`8'-----------`888---`Y88.------.888.-------d8P'--`Y8b---`888'-----`8-
// -888---------888------888-888------------888---8-`88b.----8-------------888---.d88'-----.8"888.-----888------------888---------
// -888---------888------888-888------------888---8---`88b.--8-------------888ooo88P'-----.8'-`888.----888------------888oooo8----
// -888---------888------888-888-----ooooo--888---8-----`88b.8-------------888-----------.88ooo8888.---888-----ooooo--888----"----
// -888-------o-`88b----d88'-`88.----.88'---888---8-------`888-------------888----------.8'-----`888.--`88.----.88'---888-------o-
// o888ooooood8--`Y8bood8P'---`Y8bood8P'---o888o-o8o--------`8------------o888o--------o88o-----o8888o--`Y8bood8P'---o888ooooood8-


export const Login = ({ showSignup, setShowSignup, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, errors, setErrors, setPageReady, setRenderWelcome }) => {
    
  // document.addEventListener('resize', e => {
  //   let windowHeight = window.innerHeight
  //   document.body.style.height = windowHeight + "px";
  // }, false)

  window.onresize = () => {
    let windowHeight = window.innerHeight
    document.body.style.height = "922px"
    console.log(document.body.style.height)
    console.log(windowHeight)
  }

  return (
    <React.Fragment>
      <LoginBackground />
      <LoginForm setPageReady={setPageReady} setRenderWelcome={setRenderWelcome} />
    </React.Fragment>
    );


}