import React, { useContext, useEffect, useState } from 'react'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { LoadingScreen2 } from './LoadingScreen2.js'
// import { useTransition, animated } from 'react-spring'
import { Keyframes } from 'react-spring/renderprops'
import delay from 'delay'
import { GlobalContext } from "../App";


export const UserInfoContainer = ({userInfoReady, viewId, showAboutMe, setShowAboutMe}) => {
    
    const { posts, setPosts } = useContext(GlobalContext);

    const Script1 = Keyframes.Spring(async next => {
        while (true) {
            await next({ transform: "translate(0, -50%)", from: { transform: "translate(0, 0)" }, reset: true })
            await next({ transform: "translate(0, 50%)", from: { transform: "translate(0, -50%)" }, reset: true });
            await next({ transform: "translate(0, 0)", from: { transform: "translate(0, 50%)" }, reset: true });
        }
    })
    const Script2 = Keyframes.Spring(async next => {
        while (true) {
            await delay(50)
            await next({ transform: "translate(0, -50%)", from: { transform: "translate(0, 0)" }, reset: true })
            await next({ transform: "translate(0, 50%)", from: { transform: "translate(0, -50%)" }, reset: true });
            await next({ transform: "translate(0, 0)", from: { transform: "translate(0, 50%)" }, reset: true });
        }
    })
    const Script3 = Keyframes.Spring(async next => {
        while (true) {
            await delay(100)
            await next({ transform: "translate(0, -50%)", from: { transform: "translate(0, 0)" }, reset: true })
            await next({ transform: "translate(0, 50%)", from: { transform: "translate(0, -50%)" }, reset: true });
            await next({ transform: "translate(0, 0)", from: { transform: "translate(0, 50%)" }, reset: true });
        }
    })

    const transition = useTransition(viewId.id, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    
    if (!viewId.id) {
        return (
            // <div className="userinfo_outerwrapper">
            //     <div className="userinfo_innerwrapper">
                    // <div className="defaultinfo_wrap">
                        <LoadingScreen2
                            userInfoReady={userInfoReady}
                            key="load2"
                        />
                    // </div>
            //     </div>
            // </div>
        )
    } else {
        return(
            transition.map(({item, props, key}) => (
                item && (
                    <animated.div style={props}>
                        <div className="userinfo_outerwrapper">
                            <div className="userinfo_innerwrapper">
                                <div className="defaultinfo_wrap">
                                    <p className="profile_info-top">{viewId.firstName + ' ' + viewId.lastName}</p>
                                    <p><b>Department: </b>{viewId.department}</p>
                                    <p><b>Role: </b>{viewId.role}</p>
                                </div>
                                <div className="aboutme_outerwrapper">
                                    {showAboutMe && (
                                        <animated.div className="aboutme_textareawrap">
                                            <textarea />
                                        </animated.div>
                                    )}
                                    {!showAboutMe && (
                                        <div className="aboutme_innerwrapper">

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </animated.div>
                )
            ))
        )
    }
}