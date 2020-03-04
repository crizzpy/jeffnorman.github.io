// ooooo------ooo-------.o.-------oooooo-----oooo-----------oooooooooo.--------.o.-------ooooooooo.---
// `888b.-----`8'------.888.-------`888.-----.8'------------`888'---`Y8b------.888.------`888---`Y88.-
// -8-`88b.----8------.8"888.-------`888.---.8'--------------888-----888-----.8"888.------888---.d88'-
// -8---`88b.--8-----.8'-`888.-------`888.-.8'---------------888oooo888'----.8'-`888.-----888ooo88P'--
// -8-----`88b.8----.88ooo8888.-------`888.8'----------------888----`88b---.88ooo8888.----888`88b.----
// -8-------`888---.8'-----`888.-------`888'-----------------888----.88P--.8'-----`888.---888--`88b.--
// o8o--------`8--o88o-----o8888o-------`8'-----------------o888bood8P'--o88o-----o8888o-o888o--o888o-

import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { UserContext, PostsContext, PageIndexContext, ActiveComponentContext } from '../App'


export const NavBar = ({ navCollapse, setNavCollapse, renderWelcome, setRenderWelcome, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, activeUser, setActiveUser }) => {
  // useEffect(() => {
  //   axios.get('/users/login')
  //   .then(res => {
  //     res.data.map(user => {
  //       console.log(user)
  //       //capture user profile preview info
        
  //     })
  //   })
  // })

  // const spin = useSpring({
  //   transform: navCollapse ? 'rotateZ(0deg)'  : 'rotateZ(90deg)'
  // })

  const {activeComponent, setActiveComponent} = useContext(ActiveComponentContext)
  const {pageIndex, setPageIndex} = useContext(PageIndexContext)
  
  const { rotateZ } = useSpring({
    rotateZ: navCollapse ? 0 : 90,
    config: {
      duration: 200
    }
  });

  // const transitions = useTransition(location, location => location.pathname => {
  //   from: {opacity: 0, transform: "translate(100%, 0)"}
  //   enter: {opacity: 1, transform: "translate(0, 0)"}
  //   leave: {opacity: 0, transform: "translate(-50%, 0)"}
  // })

  // {transitions.map(({item, props, key}) => {
  //   <animated.div key = key style={props}>
  //     [pages list i.e. "<Dashboard> <UserProfile>" etc]
  //   </animated.div>
  // })}

// *** might need to make a custom CSS wrapper class to make individual components position -> absolute
// to avoid having components load in and push eachother while on the same page as they transition

  return (
    <div className={navCollapse ? "nav_wrapper shrink" : "nav_wrapper"}>
      <div className="sidebar_top">
        <animated.div
          className={navCollapse ? "hamburger shrink" : "hamburger"}
          // className="hamburger"
          onClick={e => {
            e.preventDefault();
            setNavCollapse(!navCollapse);
          }}
          style={{ 
            transform: rotateZ.interpolate(z => `rotateZ(${z}deg)`),
          }}
        >
          <FontAwesomeIcon
            icon="bars"
            className={navCollapse ? "rotate90" : "rotatefrom90"}
          />
        </animated.div>
      </div>
      <div
        className={
          navCollapse ? "buttons_outerwrapper shrink" : "buttons_outerwrapper"
        }
      >
        <div
          className={navCollapse ? "wrapper_window shrink" : "wrapper_window"}
        >
          <div
            className={
              navCollapse ? "sidebar_topline one shrink" : "sidebar_topline one"
            }
          ></div>
          <div
            className={
              navCollapse ? "buttons_wrapper fadeout" : "buttons_wrapper fadein"
            }
          >
            <div className={navCollapse ? "buttons fadeout" : "buttons fadein"}>
              <FontAwesomeIcon
                icon="user"
                class={navCollapse ? "button shrink" : "button"}
                onClick={e => {
                  e.preventDefault();
                  setRenderWelcome(false)
                  setRenderBulletinBoard(false);
                  setRenderUserProfile(true);
                  setRenderMessages(false);
                  setRenderTeamPage(false);
                  setActiveComponent("profile");
                }}
              />
              <FontAwesomeIcon
                icon="check-square"
                class={navCollapse ? "button shrink" : "button"}
              />
              <FontAwesomeIcon
                icon="envelope-square"
                class={navCollapse ? "button shrink" : "button"}
              />
            </div>
          </div>
          <div
            className={
              navCollapse ? "sidebar_topline two shrink" : "sidebar_topline two"
            }
          ></div>
        </div>
      </div>

      <div
        className={
          navCollapse ? "profilepreview_wrap shrink" : "profilepreview_wrap"
        }
      >
        {!renderUserProfile && (
          <div
            className={
              navCollapse ? "profileImgInset shrink" : "profileImgInset"
            }
          >
            <div
              className={navCollapse ? "profileImgLrg shrink" : "profileImgLrg"}
            >
              <img
                src={require("../images/img.jpg")}
                className={navCollapse ? "imageLrg shrink" : "imageLrg"}
                onClick={e => {
                  e.preventDefault();
                  setRenderWelcome(false)
                  setRenderBulletinBoard(false);
                  setRenderUserProfile(true);
                  setRenderMessages(false);
                  setRenderTeamPage(false);
                  setActiveComponent("profile");
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={
          navCollapse
            ? "profilepreview_infowrap shrink"
            : "profilepreview_infowrap"
        }
      >
        <img
          src={require("../svg/logo192.png")}
          className={renderUserProfile ? "spin center" : "spin"}
        />
      </div>
      <div className={navCollapse ? "sidebar_body shrink" : "sidebar_body"}>
        <div
          className={
            navCollapse ? "sidenav_container shrink" : "sidenav_container"
          }
        >
          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink exact to="/dashboard">
                  <FontAwesomeIcon
                    icon="clipboard"
                    class="sidenav_buttonicon"
                    onClick={e => {
                      // e.preventDefault();
                      setRenderWelcome(false)
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(true);
                      setRenderMessages(false);
                      setRenderTeamPage(false);
                      setPageIndex(0)
                      setActiveComponent("dashboard");
                    }}
                  />
                </NavLink>
              </div>
              <div className="component_preview"></div>
            </div>
          </div>

          {/* <img src={require('./svg/clipboard-regular.svg')} className="sidenav_buttonicon" /> */}

          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink exact to="/messages">
                  <FontAwesomeIcon
                    icon="comment-alt"
                    class="sidenav_buttonicon"
                    id="chat"
                    onClick={e => {
                      // e.preventDefault();
                      setRenderWelcome(false)
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(false);
                      setRenderMessages(true);
                      setRenderTeamPage(false);
                      setPageIndex(1)
                      setActiveComponent("messages");
                    }}
                  />
                </NavLink>
              </div>
              <div className="component_preview"></div>
            </div>
          </div>

          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink exact to="/team">
                  <FontAwesomeIcon
                    icon="user-friends"
                    class="sidenav_buttonicon"
                    onClick={e => {
                      // e.preventDefault();
                      setRenderWelcome(false)
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(false);
                      setRenderMessages(false);
                      setRenderTeamPage(true);
                      setRenderWelcome(false)
                      setPageIndex(2)
                      setActiveComponent("team");
                    }}
                  />
                </NavLink>
              </div>
              <div className="component_preview"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};