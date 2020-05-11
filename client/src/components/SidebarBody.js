import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'
import { useSpring, animated, config, useTransition } from 'react-spring'

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
  const height1 = 100
  const height2 = 93
  let props = useSpring({from: {
    position: "absolute",
    height: `calc(${height1}% - ${215}px)`,
    width: `${45}px`,
    top: `${55}px`,
    opacity: 0.4,
  
  
  }, to: {
    position: navCollapse ? "absolute" : "relative",
    height: navCollapse ? `calc(${height2}% - ${15}px)` : `calc(${height1}% - ${215}px)`,
    width: navCollapse ? `${45}px` : `${215}px`,
    top: navCollapse ? `${55}px` : `${105}px`,
    opacity: navCollapse ? 0.4 : 0.5,
  },
  config: {config: config.molasses, duration: 300}
})
  //no shrink
  // position: relative;
  // top: 105px;
  // left: 0px;
  // width: 215px;
  // height: calc(100 % - 215px);
  // visibility: visible;
  // border - bottom - left - radius: 20px;
  // border - top - left - radius: 20px;
  // border - bottom - right - radius: 20px;
  // border - top - right - radius: 20px;
  // box - shadow: 0px 0px 0px .1px;
  // opacity: 0.5;
  // transition: all 0.3s ease;
  // background: white;
  // box - shadow: 0px 2px 5px 0px rgb(49, 49, 49);

  //shrink
  // position: absolute;
  // top: 55px;
  // left: 0px;
  // width: 45px;
  // height: calc(93 % - 15px);
  // border - radius: 17px;
  // border - top - right - radius: 0px;
  // /* box-shadow: 0px 0px 0px 1px; */
  // padding: 0 10px 0 0;
  // transition: all 0.3s ease;
  // background: white;
  // opacity: 0.4;
  // box - shadow: 0px 2px 10px 0px black;

  const { uniqueId, setUniqueId,
          userId, setUserId,
          history, setHistory,
          lastView, setLastView,
          setCameFromProfile,
          cameFromWorking, setCameFromWorking,
          profileLink, setProfileLink } = useContext(GlobalContext)
      
    return (
      <animated.div style={props} >
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
      </animated.div>
    );
}