import React, {useContext, useEffect} from 'react'
import {useTransition, animated} from 'react-spring'
import { Keyframes } from 'react-spring/renderprops'
import delay from 'delay'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const LoadingScreen2 = ({userInfoReady}) => {

    // const {ready, setReady} = useContext(ReadyContext)
    
    // const transition1 = useTransition(!ready, null, async () =>  {
    //     while(true) {
    //         await next({transform: "translate(0, -50%)"})
    //         await next({ transform: "translate(0, 0)" })
    //         await next({ transform: "translate(0, 50%)"})
    //     }
    // })
    // const transition2 = useTransition(!ready, null, async () => {
    //     while (true) {
    //         await delay(200)
    //         await next({ transform: "translate(0, -50%)" })
    //         await next({ transform: "translate(0, 0)" })
    //         await next({ transform: "translate(0, 50%)" })
    //     }
    // })
    // const transition3 = useTransition(!ready, null, async () => {
    //     while (true) {
    //         await delay(400)
    //         await next({ transform: "translate(0, -50%)" })
    //         await next({ transform: "translate(0, 0)" })
    //         await next({ transform: "translate(0, 50%)" })
    //     }
    // })
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
    // const loadInfo = () => {
    //     console.log('hello')
    //     setReady(true)
    // }         

    return(
        <div className="loading2wrapper">
            <div className="loader_wrap">
                
                {/* <Script1 config={{
                    duration: 200
                }}>
                    {style => (
                        <animated.div className="loader" style={style}>
                            <svg viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="2" />
                            </svg>
                        </animated.div>
                    )}
                </Script1>
                <Script2 config={{
                    duration: 200
                }}>
                    {style => (
                        <animated.div className="loader" style={style}>
                            <svg viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="2" />
                            </svg>
                        </animated.div>
                    )}
                </Script2>
                <Script3 config={{
                    duration: 200
                }}>
                    {style => (
                        <animated.div className="loader" style={style}>
                            <svg viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="2" />
                            </svg>
                        </animated.div>
                    )}
                </Script3> */}
                <div className="spinner_wrap">
                    <FontAwesomeIcon icon="spinner" className="spinner" />
                </div>
            </div>
        </div>
        
    )
}