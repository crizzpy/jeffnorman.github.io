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
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Hamburger } from "./Hamburger";
import { SidebarTopButtons } from "./SidebarTopButtons";
import { UserProfilePreview } from "./UserProfilePreview";
import { ReactSpinner } from "./ReactSpinner";
import { SidebarBody } from "./SidebarBody";
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { UserContext, PostsContext, PageIndexContext, ActiveComponentContext } from '../App'


export const NavBar = ({ navCollapse, setNavCollapse, renderWelcome, setRenderWelcome, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, activeUser, setActiveUser }) => {

  const {activeComponent, setActiveComponent} = useContext(ActiveComponentContext)
  const {pageIndex, setPageIndex} = useContext(PageIndexContext)

  const transition = useTransition(!renderUserProfile, null, {
    from: {transform: "translate(0, 0)"},
    enter: { transform: "translate(0, 0)"},
    leave: { transform: "translate(0, 0)"}
  })

  return (
    <div className={navCollapse ? "nav_wrapper shrink" : "nav_wrapper"}>
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
          <UserProfilePreview
            navCollapse={navCollapse}
            setRenderWelcome={setRenderWelcome}
            setRenderBulletinBoard={setRenderBulletinBoard}
            setRenderUserProfile={setRenderUserProfile}
            setRenderMessages={setRenderMessages}
            setRenderTeamPage={setRenderTeamPage}
            setActiveComponent={setActiveComponent}
          />
        )
      ))}
      
      <ReactSpinner
        navCollapse={navCollapse}
        renderUserProfile={renderUserProfile}
      />
      <SidebarBody
        navCollapse={navCollapse}
        setRenderWelcome={setRenderWelcome}
        setRenderBulletinBoard={setRenderBulletinBoard}
        setRenderUserProfile={setRenderUserProfile}
        setRenderMessages={setRenderMessages}
        setRenderTeamPage={setRenderTeamPage}
        setActiveComponent={setActiveComponent}
        setPageIndex={setPageIndex}
      />
    </div>
  );
};