import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UniqueIdContext, UserContext } from '../App'

export const SidebarBody = ({navCollapse, setRenderWelcome, setRenderUserProfile, setRenderBulletinBoard, setRenderMessages, setRenderTeamPage, setPageIndex, setActiveComponent}) => {
  
  const { uniqueId, setUniqueId } = useContext(UniqueIdContext)
  const { userId, setUserId } = useContext(UserContext)
  
    return (
      <div className={navCollapse ? "sidebar_body shrink" : "sidebar_body"}>
        <div
          className={navCollapse ? "sidenav_container shrink" : "sidenav_container"}>
          <div
            className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer" />
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink activeStyle={{ color: "white" }} exact to="/dashboard">
                  <FontAwesomeIcon
                    icon="clipboard"
                    class="sidenav_buttonicon"
                    onClick={e => {
                      setRenderWelcome(false);
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(true);
                      setRenderMessages(false);
                      setRenderTeamPage(false);
                      setUniqueId('')
                      setPageIndex(0);
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
            className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink activeStyle={{ color: "white" }} exact to="/messages">
                  <FontAwesomeIcon
                    icon="comment-alt"
                    class="sidenav_buttonicon"
                    id="chat"
                    onClick={e => {
                      setRenderWelcome(false);
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(false);
                      setRenderMessages(true);
                      setRenderTeamPage(false);
                      setUniqueId('')
                      setPageIndex(1);
                      setActiveComponent("messages");
                    }}
                  />
                </NavLink>
              </div>
              <div className="component_preview"></div>
            </div>
          </div>

          <div
            className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap" }>
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <NavLink activeStyle={{ color: "white" }} exact to="/team">
                  <FontAwesomeIcon
                    icon="user-friends"
                    class="sidenav_buttonicon"
                    onClick={e => {
                      setRenderWelcome(false);
                      setRenderUserProfile(false);
                      setRenderBulletinBoard(false);
                      setRenderMessages(false);
                      setRenderTeamPage(true);
                      setRenderWelcome(false);
                      setUniqueId('')
                      setPageIndex(2);
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
    );
}