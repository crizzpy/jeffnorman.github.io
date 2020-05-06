import React, {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom'
import { GlobalContext } from '../App'

export const SidebarTopButtons = ({navCollapse, setRenderWelcome, setRenderBulletinBoard, setRenderUserProfile, setRenderMessages, setRenderTeamPage, setActiveComponent}) => {
  
  const { ready, setReady, history, setHistory, uniqueId, userId, setUniqueId, setLastView, setCameFromProfile, profileLink, setProfileLink } = useContext(GlobalContext)

    return (
      <div className={navCollapse ? "buttons_outerwrapper shrink" : "buttons_outerwrapper"}>
        <div className={navCollapse ? "wrapper_window shrink" : "wrapper_window"}>
          <div className={navCollapse ? "sidebar_topline one shrink" : "sidebar_topline one"}></div>
          <div className={navCollapse ? "buttons_wrapper fadeout" : "buttons_wrapper fadein"}>
            <div className={navCollapse ? "buttons fadeout" : "buttons fadein"}>
              {/* <NavLink exact to="/profile" onClick={() => history.push('/profile')}> */}
              {/* <NavLink exact to="/profile" onClick={() => setHistory([...(history || []), '/profile'])}> */}
                  <FontAwesomeIcon
                    icon="user"
                    class={navCollapse ? "button shrink" : "button"}
                    onClick={e => {
                      e.preventDefault();
                      setRenderWelcome(false);
                      setRenderBulletinBoard(false);
                      setRenderUserProfile(true);
                      setRenderMessages(false);
                      setRenderTeamPage(false);
                      setActiveComponent("profile");
                      // setCameFromProfile(true)
                      setLastView('profile')
                      setUniqueId(userId.id)
                      setProfileLink(`/profile/${userId.id}`)
                      history.push(`${profileLink}`)
                      // history.push(`${profileLink}/info`)
                  }}/>
              {/* </NavLink> */}
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
    );
}