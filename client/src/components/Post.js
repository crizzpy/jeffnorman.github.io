import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from "react-spring";
import {UserContext, UniqueIdContext} from '../App'

import { PostDelConfirmPrompt } from "./PostDelConfirmPrompt";



export const Post = ({key, post, delBtn, setActiveComponent, setRenderUserProfile}) => {

  const { userId, setUserId } = useContext(UserContext)
  const { uniqueId, setUniqueId} = useContext(UniqueIdContext)

    const [confirmPostDel, setConfirmPostDel] = useState(false);
    const [confirmedPostDel, setConfirmedPostDel] = useState(false);
    const [abortedPostDel, setAbortedPostDel] = useState(false);

    const transition = useTransition(confirmPostDel, null, {
        from: {opacity: 1, width: "0px"},
        enter: {opacity: 1,  width: "80px"},
        leave: {opacity: 1, width: "0px"},
        config: {
            default: config.wobbly,
            duration: 200
        }
    })
    const posterName = `${post.userFirstName} ${post.userLastName}`
    // const profileLink = `/profile/:${uniqueId}`;

    return (
      <React.Fragment>
        <li>
        <div className={post.adminsOnly && !userId.isAdmin ? "hide" : "" }>
          <div className={confirmPostDel ? "renderedpost_wrapper stretch" : "renderedpost_wrapper" } style={post.adminsOnly ? {border: "blue solid 1px"} : {background: "#ffd900"}  }>
            <div className={confirmPostDel ? "render_innerwrap shrink" : "render_innerwrap" }>
                <div className="poster_info_wrap">
                    <div className="poster_innerwrap">
                        <div className="poster_info" style={{width: posterName.length * 10 }}>
                          <NavLink exact to={delBtn == "delbutton" ? "profile" : `/profile/:${post.userId}` }>
                            <div onClick={e => {
                              e.preventDefault();
                              setRenderUserProfile(true);
                              setActiveComponent("profile");
                              setUniqueId(post.userId)
                            }}>
                              <b>{posterName}</b>
                            </div>
                          </NavLink>
                        </div>
                        <div className={post.userIsAdmin ? "admin-badge-wrap" : "hide" }>
                            <FontAwesomeIcon icon="user-shield" style={{color: "ffbb00"}}/>
                        </div>
                    </div>
                    <div className={post.adminsOnly ? "admins-only" : "hide" }>
                        <FontAwesomeIcon icon="shield-alt" style={{color: "blue"}}/>
                    </div>
                </div>
              
                <div className="postText">
                    {post.content}
                </div>
            </div>
            <div className="delbtn_wrap">
              <div
                className={delBtn}
                onClick={e => {
                  setConfirmPostDel(!confirmPostDel)
                }}
              >
                <FontAwesomeIcon icon="times-circle" class={delBtn} />
              </div>
            </div>
                {transition.map(({ item, props, key }) => (
                    item && (
                        <animated.div className="confirm_prompt" style={props}>
                            <PostDelConfirmPrompt 
                                key={key}
                                post={post}
                                delBtn={delBtn}
                                confirmPostDel={confirmPostDel} 
                                setConfirmPostDel={setConfirmPostDel} 
                                confirmedPostDel={confirmedPostDel} 
                                setConfirmedPostDel={setConfirmedPostDel} 
                                abortedPostDel={abortedPostDel} 
                                setAbortedPostDel={setAbortedPostDel} 
                            />
                        </animated.div>
                )
                ))}
            </div>
          </div>
        </li>
      </React.Fragment>
    );
}