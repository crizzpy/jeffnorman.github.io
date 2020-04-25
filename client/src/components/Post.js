import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from "react-spring";
import { GlobalContext } from '../App'

import { PostContainer } from "./PostContainer";



export const Post = ({key, post, delBtn, setActiveComponent, setRenderUserProfile, postsLoaded}) => {

  const { userId, setUserId,
          uniqueId, setUniqueId,
          ready, setReady,
          history, setHistory } = useContext(GlobalContext)

  const [confirmPostDel, setConfirmPostDel] = useState(false);
  const [confirmedPostDel, setConfirmedPostDel] = useState(false);
  const [abortedPostDel, setAbortedPostDel] = useState(false);


  const transition1 = useTransition(postsLoaded, null, {
    from: { opacity: 0, height: "0%", background: 'black' },
    enter: { opacity: 1, height: "auto", background: 'red' },
    leave: { opacity: 0, height: "0%", background: 'green' }
  })
  const transition2 = useTransition(!postsLoaded, null, {
    from: { opacity: 1, height: "auto" },
    enter: { opacity: 1, height: "auto" },
    leave: { opacity: 0, height: "0%" }
  })


    // const profileLink = `/profile/:${uniqueId}`;

    return (
      <React.Fragment>
        <li>
          {/* <div className={post.adminsOnly && !userId.isAdmin ? "hide" : "" }> */}
            {/* <div className="postwrapper"> */}
              {transition1.map(({item, props, key}) => (
                item && (
                  <animated.div height={props.height} opacity={props.opacity} className={post.adminsOnly && !userId.isAdmin ? "hide" : "" }>
                    <PostContainer
                      delBtn={delBtn}
                      confirmPostDel={confirmPostDel}
                      setConfirmPostDel={setConfirmPostDel}
                      confirmedPostDel={confirmedPostDel}
                      setConfirmedPostDel={setConfirmedPostDel}
                      post={post}
                      abortedPostDel={abortedPostDel}
                      setAbortedPostDel={setAbortedPostDel}
                      setRenderUserProfile={setRenderUserProfile}
                      setActiveComponent={setActiveComponent}
                      key={key}
                      postsLoaded={postsLoaded}
                    />
                 </animated.div>
                )
              ))}
              {/* {transition2.map(({ item, props, key }) => (
                item && (
                  <animated.div height={props.height} opacity={props.opacity} className={post.adminsOnly && !userId.isAdmin ? "hide" : "" }>
                    <PostContainer
                      delBtn={delBtn}
                      confirmPostDel={confirmPostDel}
                      setConfirmPostDel={setConfirmPostDel}
                      confirmedPostDel={confirmedPostDel}
                      setConfirmedPostDel={setConfirmedPostDel}
                      post={post}
                      abortedPostDel={abortedPostDel}
                      setAbortedPostDel={setAbortedPostDel}
                      setRenderUserProfile={setRenderUserProfile}
                      setActiveComponent={setActiveComponent}
                      postsLoaded={postsLoaded}
                    />
                  </animated.div>
                )
              ))} */}
            {/* </div> */}
          {/* </div> */}
        </li>
      </React.Fragment>
    );
}