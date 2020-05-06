import React, {useContext} from 'react'
import { GlobalContext } from '../App'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring } from 'react-spring/renderprops'
import { HomeBtnIcon } from './HomeBtnIcon'

export const ProfileHomeBtn = ({ setHomeBtnOpen }) => {
    const { cameFromProfile } = useContext(GlobalContext)

    // const Script = Keyframes.Spring(async next => {
    //     while (true) {
    //         await next({ transform: "translateX(-80px) translateY(px)", from: { transform: "translateX(0px) translateY(0px)" }, reset: false })
    //     }
    // })

    return(
        <Spring 
            from={{ transform: "translateX(0px)" }}
            to={{ transform: "translateX(-140px)" }}
        >
            {props => (
                <div style={props}>
                    <HomeBtnIcon setHomeBtnOpen={setHomeBtnOpen} />
                </div>
            )}
        </Spring>
    )
}