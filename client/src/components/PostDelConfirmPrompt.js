import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUndoAlt, faCheckCircle, faTimesCircle, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import {UserContext, PostsContext} from '../App'
import { AbsoluteWrapper } from "./AbsoluteWrapper";
import { ScrollWindow } from './ScrollWindow'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const PostDelConfirmPrompt = ({key, post, delBtn, confirmPostDel, setConfirmPostDel, confirmedPostDel, setConfirmedPostDel, abortedPostDel, setAbortedPostDel}) => {
    const {posts, setPosts} = useContext(PostsContext)
    const confirmedDel = id => {
      console.log("confirmed");
      
      setTimeout(() => {
        axios.delete('/posts/delete', { data: { postId: id } })
        .then(res => {
          console.log(res.data)
          setPosts([...posts.filter(post => post.id !== res.data)])
        //   return true
        })
        .catch(err => console.log(err))
      }, 1)
      
    };

    const [loadBtns, setLoadBtns] = useState(true)

    const transition = useTransition(loadBtns, null, {
      from: { opacity: 1, width: "20px" },
      enter: { opacity: 1, width: "20px" },
      leave: { opacity: 0, width: "20px", transform: "translate(10px,0)", margin: "5px" },
      config: {
        default: config.wobbly,
        duration: 200
      }
    });
    const transition1 = useTransition(loadBtns, null, {
      from: { opacity: 1, width: "10px" },
      enter: { opacity: 1, width: "10px" },
      leave: { opacity: 0, width: "10px", transform: "translate(10px,0)" },
      config: {
        default: config.wobbly,
        duration: 200
      }
    });

    const transition2 = useTransition((!loadBtns), null, {
      from: { opacity: 0, width: "77px", transform: "translate(100%, 0)"},
      enter: { opacity: 0, width: "77px", transform: "translate(0, 0)"},
      leave: { opacity: 0, width: "77px", height: "0px" }
    });

    const Spring1 = Keyframes.Spring(async next => {
      await next({transform: "translate(0, 0)", opacity: 1, x: 100})
      await next({transform: "translate(0,0)", opacity: 1, x: 0})

    })
    return (
      <div className="confirm_prompt2">
        {transition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props}>
                <div className="del-icon" style={{ color: "white" }} onClick={e => {
                    setLoadBtns(!loadBtns);
                    setTimeout(() => {
                      confirmedDel(post.id);
                      setConfirmedPostDel(!confirmedPostDel);
                      setConfirmPostDel(!confirmPostDel)
                    }, 2000);
                  }}
                >
                  <FontAwesomeIcon icon="check-circle" className="del-icon-icon" id="confirm" />
                </div>
              </animated.div>
            )
        )}
        {/* <div className="del-icon">
            <svg width="22" height="22" fill="none">
                <path stroke="white" stroke-width="1" fill="none" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" />
            </svg>
        </div> */}
        {transition1.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props}>
                <div style={{ margin: "10px 5px 0 3px" }}>|</div>
              </animated.div>
            )
        )}
        {transition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props}>
                <div className="del-icon" onClick={e => {
                    setConfirmPostDel(!confirmPostDel);
                  }}
                >
                  <FontAwesomeIcon icon="undo-alt" className="del-icon-icon" />
                </div>
              </animated.div>
            )
        )}
        {!loadBtns && (
            <Spring1 config={config.mollasses}>
                {style => (
                    <div className="confirm_prompt3">
                        <div className="del-icon">
                            <svg width="40" height="40" viewBox="0 0 33 33" stroke-width="4" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray={100} stroke-dashoffset={style.x}>
                                {/* <path pathLength={100} stroke-dashoffset={style.x} stroke="white" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" /> */}
                                {/* <path pathLength={100} stroke="white" d="m 37.789062,0.97265625 c -20.32464,0 -36.81640575,16.50543475 -36.81640575,36.83007775 0,20.324648 16.49176575,36.814454 36.81640575,36.814454 20.324648,0 36.828118,-16.489806 36.828126,-36.814454 0,-11.380864 -5.175988,-21.562127 -13.298829,-28.3203121 -0.287954,0.2876248 -0.575596,0.5755951 -0.863281,0.8632811 -0.208143,0.208144 -0.362074,0.357786 -0.49414,0.525391 7.760399,6.395289 12.705078,16.082868 12.705078,26.93164 0,19.272465 -15.604485,34.876954 -34.876954,34.876954 -19.272468,0 -34.8652339,-15.604489 -34.8652339,-34.876954 0,-19.272472 15.5927659,-34.8789059 34.8652339,-34.8789059 7.971044,0 15.309852,2.6755704 21.181641,7.1699219 C 59.1338,9.8868712 59.290394,9.7252282 59.5625,9.453125 59.815793,9.1998307 60.069022,8.946603 60.322266,8.6933594 54.09076,3.8604142 46.27692,0.97265625 37.789062,0.97265625 Z" /> */}
                                <path pathLength={100} stroke="white" d="m 16.5,1.5 c -7.991767,0.12898 -14.436137,6.576105 -14.436137,14.501854 0,8.006281 6.575055,14.501854 14.679293,14.501854 8.104242,0 14.685344,-6.495573 14.685347,-14.501854 0,-7.901555 -6.411456,-14.333131 -14.369507,-14.500145 0.002,0.03165 0.0011,0.06319 0.0035,0.09492 0.007,0.138949 -0.0091,0.271981 -0.03722,0.408623 -0.0083,0.04165 -0.01513,0.08411 -0.03029,0.123943 -0.01816,0.04791 -0.04542,0.09184 -0.06835,0.137613 7.599593,0.0974 13.723114,6.204047 13.723114,13.735043 0,7.591799 -6.221865,13.738458 -13.906561,13.738458 -7.684696,0 -13.901366,-6.146659 -13.901366,-13.738458 0,-7.468028 6.016479,-13.533961 13.527549,-13.729913 -0.0012,-0.09597 0.01137,-0.190181 0.06922,-0.273556 0.0044,1.56e-4 0.0106,0.0038 0.01214,0 0.0124,-0.03358 0.01714,-0.06879 0.02597,-0.103442 0.0074,-0.02979 0.01955,-0.05927 0.02337,-0.08981 0.0067,-0.05541 -7.11e-4,-0.11325 0.0044,-0.169273 -0.0032,-0.04546 -0.0021,-0.09057 -0.0044,-0.135941 z" />
                                <path pathLength={100} stroke="white" d="m9.729774,17.57686c0,0 5.420712,4.530744 5.420712,4.530744c0,0 8.414239,-9.951456 8.414239,-9.951456" />
                            </svg>
                        </div>
                    </div>
                )}
                
            </Spring1>
        )}
        {/* {transition2.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props}>
                <div className="confirm_prompt2">
                  <div className="del-icon"> */}
                    {/* <svg width="22" height="22" strokeDasharray={100} strokeDashoffset={props.x}>
                        <path pathLength="100" stroke="white" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" /> */}

                    {/* <path pathLength="100" stroke="white" strokeDasharray={100} strokeDashoffset={props.x} > */}
                    {/* <animate attributeName="d" dur="800ms" to="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" fill="freeze" /> */}
                    {/* </path> */}
                    {/* </svg> */}
                    {/* <Spring from={{ x: 100 }} to={{ x: 0 }} config={config.molasses}>
                      {props => (
                        <svg strokeDashoffset={props}>
                          <path stroke="white" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" />
                        </svg>
                      )}
                    </Spring> */}
                    {/* <Spring
                        from={{ value: 100 }}
                        to={{ value: 0 }}
                    >
                        {props => (
                            <svg stroke-width="1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="100" stroke-dashoffset={props.value}>
                                <path stroke="white" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" />
                            </svg>
                        )}
                    </Spring> */}
                    {/* <Spring
                            native
                            reset
                            delay={200}
                            from={{ x: 0, opacity: 0 }}
                            to={{ x: 100, opacity: 1 }}
                            config={config.molasses}
                        >
                            {({x, opacity}) => (
                                // <svg stroke="white" width="22" height="22" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={100} strokeDashoffset={x}>
                                <div style={{color: "white", width: x, height: x, opacity: opacity}}>    
                                    <path stroke-width="1" fill="none" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" />
                                </div>
                                // </svg>
                            )}
                        </Spring> */}

                    {/* <Spring
                        native
                        reset
                        delay={1000}
                        from={{ x: 100, opacity: 0, color: "white" }}
                        to={{ x: 0, opacity: 1, color: "white" }}
                        config={config.molasses}
                    >
                        {({ x, opacity, color }) => (
                            <animated.svg
                            className={"icon"}
                            style={{ opacity, color }}
                            width="22"
                            height="22"
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={100}
                            strokeDashoffset={x}
                            >
                                <circle pathLength="100" cx="1" cy="1" r="15" />
                                <path pathLength="100" d="M20.174,15.755l-2.905,3.874a.75.75,0,0,1-1.13.08l-1.5-1.5" />
                                <path pathLength="100" d="m 10,0.2 c -5.377561,0 -9.740557,4.366765 -9.740557,9.744327 0,5.377563 4.362996,9.740557 9.740557,9.740557 5.377563,0 9.744325,-4.362994 9.744327,-9.740557 0,-5.377562 -4.366764,-9.744327 -9.744327,-9.744327 z m 0,0.516231 c 5.099174,0 9.228095,4.128921 9.228095,9.228096 0,5.099173 -4.128921,9.228094 -9.228095,9.228094 -5.099174,0 -9.224327,-4.128921 -9.224327,-9.228094 0,-5.099175 4.125153,-9.228096 9.224327,-9.228096 z" />

                            </animated.svg>
                        )}
                    </Spring> */}
                  {/* </div>
                </div>
              </animated.div>
            )
        )} */}
      </div>
    );
    
}