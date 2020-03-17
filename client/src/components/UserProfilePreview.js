import React from 'react'
import { useSpring, animated, config, useTransition } from 'react-spring'
import {NavLink} from 'react-router-dom'

export const UserProfilePreview = ({navCollapse, setRenderWelcome, setRenderBulletinBoard, renderUserProfile, setRenderUserProfile, setRenderMessages, setRenderTeamPage, setActiveComponent}) => {
  
  const transition = useTransition(!renderUserProfile, null, {
    from: { transform: "translate(-100%, 0)" },
    enter: { transform: "translate(0, 0)" },
    leave: { transform: "translate(-100%, 0)" }
  })

  
  return (
      <div className={navCollapse ? "profilepreview_wrap shrink" : "profilepreview_wrap"}>
          <React.Fragment>
            {transition.map(({ item, props, key }) => (
              item && (
                <animated.div style={props}>
                  <div className={navCollapse ? "profileImgInset shrink" : "profileImgInset"}>
                    <div className={navCollapse ? "profileImgLrg shrink" : "profileImgLrg"}>
                      <NavLink exact to="/profile">

                        <img
                          src={require("../images/img.jpg")}
                          className={navCollapse ? "imageLrg shrink" : "imageLrg"}
                          onClick={e => {
                            e.preventDefault();
                            setRenderWelcome(false);
                            setRenderBulletinBoard(false);
                            setRenderUserProfile(true);
                            setRenderMessages(false);
                            setRenderTeamPage(false);
                            setActiveComponent("profile");
                          }}
                        />
                      </NavLink>
                    </div>
                    
                    {/* <div className="preview_extended">
                      Hi
                    </div> */}
                    {/* <div className="preview_styleoverlay">
                      
                    </div> */}
                  </div>
                </animated.div>
              )))}
              </React.Fragment>
      </div>
    );
}