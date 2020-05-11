// ooooo------ooo-------.o.-------oooooo-----oooo-----------oooooooooo.--------.o.-------ooooooooo.---
// `888b.-----`8'------.888.-------`888.-----.8'------------`888'---`Y8b------.888.------`888---`Y88.-
// -8-`88b.----8------.8"888.-------`888.---.8'--------------888-----888-----.8"888.------888---.d88'-
// -8---`88b.--8-----.8'-`888.-------`888.-.8'---------------888oooo888'----.8'-`888.-----888ooo88P'--
// -8-----`88b.8----.88ooo8888.-------`888.8'----------------888----`88b---.88ooo8888.----888`88b.----
// -8-------`888---.8'-----`888.-------`888'-----------------888----.88P--.8'-----`888.---888--`88b.--
// o8o--------`8--o88o-----o8888o-------`8'-----------------o888bood8P'--o88o-----o8888o-o888o--o888o-

import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "./Hamburger";
import { SidebarTopButtons } from "./SidebarTopButtons";
import { UserProfilePreview } from "./UserProfilePreview";
import { ReactSpinner } from "./ReactSpinner";
import { SidebarBody } from "./SidebarBody";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition, interpolate } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { GlobalContext } from '../App'


export const NavBar = ({ navCollapse, setNavCollapse, renderWelcome, setRenderWelcome, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, activeUser, setActiveUser, userInfoReady, setUserInfoReady }) => {

  const { activeComponent, setActiveComponent, pageIndex, setPageIndex } = useContext(GlobalContext)


  // const { num } = useSpring({ 
  //   from: { num: 105 }, 
  //   to: {num: renderUserProfile ? 80 : 105}})
  // const {spinDeg} = useSpring({from: {spinDeg: 0}, x: })
  // const [spinToggle, setSpinToggle] = useState(false)
  // let props1 = useSpring({
  //   from: {

  //   },
  //   to: {

  //   },
  //   config: {config: config.default}
  // })
  // display: flex;
  // flex - direction: column;
  // position: absolute;
  // left: 0px;
  // top: 15px;
  // height: 93 %;
  // width: 225px;
  // margin: 10px;
  let props1 = useSpring({ from: {
    position: "absolute",
    left: `${60}px`,
  }, to: {
    position: "absolute",
    left: renderUserProfile ? `${60}px` : `${115}px`,
  } })
  const SpinScript = Keyframes.Spring(async next => {
    while (true) {
      await next({ transform: "rotate(360deg)", from: { transform: "rotate(0deg)" }, reset: true })
      // await next({ background: "#000000", from: { background: "#000000" }, reset: true })
      // await next({ transform: "translateX(0px)", from: { transform: "translateX(-1200px)" }, reset: true })
    }
  })

  const transition = useTransition(!renderUserProfile && !navCollapse, null, {
    from: { height: `${80}px`, transform: "translate(-100%, 0)", position: "absolute"},
    enter: { height: `${80}px`, transform: "translate(0, 0)", position: "absolute"},
    leave: { height: `${0}px`, transform: "translate(-100%, 0)", opacity: 0, margin: "0 -100% 0 0", position: "absolute"},
    config: {config: config.molasses  }
  })

  return (
    <div className="nav_wrapper">
      <div className="sidebar_top">
        <Hamburger navCollapse={navCollapse} setNavCollapse={setNavCollapse} />
      </div>
      <SidebarTopButtons
        navCollapse={navCollapse}
        setRenderWelcome={setRenderWelcome}
        setRenderBulletinBoard={setRenderBulletinBoard}
        setRenderUserProfile={setRenderUserProfile}
        setRenderMessages={setRenderMessages}
        setRenderTeamPage={setRenderTeamPage}
        setActiveComponent={setActiveComponent}
      />
      {transition.map(({item,props,key}) => (
        item && (
          <animated.div style={props}>
            <UserProfilePreview
              navCollapse={navCollapse}
              setRenderWelcome={setRenderWelcome}
              setRenderBulletinBoard={setRenderBulletinBoard}
              setRenderUserProfile={setRenderUserProfile}
              setRenderMessages={setRenderMessages}
              setRenderTeamPage={setRenderTeamPage}
              setActiveComponent={setActiveComponent}
              key={key}
            />
          </animated.div>
        )
      ))}
      <animated.div className="profilepreview_infowrap" style={props1}>
        <SpinScript
          config={{ duration: 20000 }}
        >
          {style => (
            <animated.div  style={style}>
              
                <ReactSpinner
                  navCollapse={navCollapse}
                  renderUserProfile={renderUserProfile}
                />
              </animated.div>
          )}
        </SpinScript>
      </animated.div>
      <SidebarBody
        navCollapse={navCollapse}
        setRenderWelcome={setRenderWelcome}
        renderBulletinBoard={renderBulletinBoard}
        setRenderBulletinBoard={setRenderBulletinBoard}
        setRenderUserProfile={setRenderUserProfile}
        renderMessages={renderMessages}
        setRenderMessages={setRenderMessages}
        renderTeamPage={renderTeamPage}
        setRenderTeamPage={setRenderTeamPage}
        setActiveComponent={setActiveComponent}
        setPageIndex={setPageIndex}
        userInfoReady={userInfoReady}
        setUserInfoReady={setUserInfoReady}
      />
    </div>
  );
};