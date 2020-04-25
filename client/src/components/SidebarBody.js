import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'

export const SidebarBody = ({navCollapse, setRenderWelcome, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, setPageIndex, setActiveComponent, userInfoReady, setUserInfoReady}) => {

  const renderB = () => {
    // setHistory([...history,
    //   {
    //     id: history.length + 1,
    //     item: "/dashboard"
    //   }
    // ])
    setHistory([...history, '/dashboard'])
    setRenderWelcome(false);
    setRenderUserProfile(false);
    setRenderBulletinBoard(true);
    setRenderMessages(false);
    setRenderTeamPage(false);
    setUniqueId('')
    setPageIndex(0);
    setUserInfoReady(false)
    setLastView('working')
    setActiveComponent("dashboard");
    setTimeout(() => {
      setCameFromProfile(false)
    },1000)
  }
  const renderM = () => {
    // setHistory([...history,
    //   {
    //     id: history.length + 1,
    //     item: "/messages"
    //   }
    // ])
    setHistory([...history, '/messages'])
    setRenderWelcome(false);
    setRenderUserProfile(false);
    setRenderBulletinBoard(false);
    setRenderMessages(true);
    setRenderTeamPage(false);
    setUniqueId('')
    setPageIndex(1);
    setUserInfoReady(false)
    setLastView('working')
    setActiveComponent("messages");
    setTimeout(() => {
      setCameFromProfile(false)
    },1000)
  }
  const renderT = () => {
    // setHistory([...history,
    //   {
    //     id: history.length + 1,
    //     item: "/team"
    //   }
    // ])
    setHistory([...history, '/team'])
    setRenderWelcome(false);
    setRenderUserProfile(false);
    setRenderBulletinBoard(false);
    setRenderMessages(false);
    setRenderTeamPage(true);
    setRenderWelcome(false);
    setUniqueId('')
    setPageIndex(2);
    setUserInfoReady(false)
    setLastView('working')
    setActiveComponent("team");
    setTimeout(() => {
      setCameFromProfile(false)
    },1000)
  }

  const { uniqueId, setUniqueId,
          userId, setUserId,
          history, setHistory,
          lastView, setLastView,
          setCameFromProfile } = useContext(GlobalContext)
      
    return (
      <div className={navCollapse ? "sidebar_body shrink" : "sidebar_body"}>
        <div className={navCollapse ? "sidenav_container shrink" : "sidenav_container"}>
          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer" />
            <Link exact to="/dashboard" style={{ height: 0 }} onClick={renderB}>  
              <div className={navCollapse ? "hide" : "component_previewlabel"}>
                <div className="component_previewlabel-inner">
                  Dashboard
                </div>
              </div>
            </Link>
            <div className="sidenav_buttoncontainer">
              <NavLink activeStyle={{ color: "white" }} exact to="/dashboard">
                <div className={renderBulletinBoard ? "sidenav_buttonwrap active" : "sidenav_buttonwrap"}>  
                    <FontAwesomeIcon
                      icon="clipboard"
                      class="sidenav_buttonicon"
                      onClick={renderB}
                    />
                  </div>
                </NavLink>
              </div>
              <div className="component_preview">

              </div>
            </div>

          {/* <img src={require('./svg/clipboard-regular.svg')} className="sidenav_buttonicon" /> */}

          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer" />
            <Link exact to="/messages" style={{ height: 0 }} onClick={renderM}>
                <div className={navCollapse ? "hide" : "component_previewlabel"}>
                  <div className="component_previewlabel-inner">
                    Messages
                  </div>
                </div>
              </Link>
              <div className="sidenav_buttoncontainer">
                <NavLink activeStyle={{ color: "white" }} exact to="/messages">
                  <div className={renderMessages ? "sidenav_buttonwrap active" : "sidenav_buttonwrap"}>
                    <FontAwesomeIcon
                      icon="comment-alt"
                      class="sidenav_buttonicon"
                      id="chat"
                      onClick={renderM}
                    />
                  </div>
                </NavLink>
              </div>
            <div className="component_preview"></div>
          </div>

          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap" }>
            <div className="componentpreview_buttonbuffer" />
            <Link exact to="/team" style={{height: 0}} onClick={renderT}>
              <div className={navCollapse ? "hide" : "component_previewlabel"}>
                <div className="component_previewlabel-inner">
                  Team
                </div>
              </div>
            </Link>
              <div className="sidenav_buttoncontainer">
                <NavLink activeStyle={{ color: "white" }} exact to="/team" onClick={e => renderT()}>
                  <div className={renderTeamPage ? "sidenav_buttonwrap active" : "sidenav_buttonwrap"}>
                    <FontAwesomeIcon
                      icon="user-friends"
                      class="sidenav_buttonicon"
                      onClick={renderT}
                    />
                  </div>
                </NavLink>
              </div>
            <div className="component_preview"></div>
          </div>
        </div>
      </div>
    );
}