import React, {useContext} from 'react'
import {Route, Switch, __RouterContext} from 'react-router-dom'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { UserInfo } from './UserInfo'
import { ProfileSettings } from './ProfileSettings'
import { UserSettings } from './UserSettings'
import { GlobalContext } from '../App'
import { AbsoluteWrapper } from './AbsoluteWrapper'
import { ProfileHomeBtn } from './ProfileHomeBtn'


export const ProfileView = ({userInfoReady, viewId, setViewId, showAboutMe, setShowAboutMe, profileLink, homeBtnOpen, setHomeBtnOpen}) => {

    const fade = 'translate(0, 100%)'
    const slide = 'translate(0, 0)'
    const {lastView, cameFromProfile} = useContext(GlobalContext)
    const { location } = useContext(__RouterContext)
    const screenTransitions = useTransition(location, location => location.pathname, {
      from: cameFromProfile == true ? { opacity: 1, transform: fade } : { opacity: 1, transform: slide },
      enter: { opacity: 1, transform: 'translate(0, 0)' },
      leave: { opacity: 0, transform: 'translate(0, -100%)', margin: "0 -100% 0 0" }
    })
    const homeBtnTransition = useTransition(homeBtnOpen, null, {
        from: { opacity: 0, transform: "translate(0,0)" },
        enter: { opacity: 1, transform: "translate(0,0)" },
        // enter: { opacity: 1, transform: "translate(-80px,0)" },
        leave: { opacity: 0, transform: "translate(0,0)" }
        // leave: { opacity: 0, transform: "translate(-80px,0)" }
    })
    // const screenTransitions = useTransition(location, location => location.pathname, {
    //     from: lastView == "profile" && cameFromProfile == true ? { transform: 'translate(0, 100%)' } : { transform: "translate(0, 0)" },
    //     enter: { opacity: 1, transform: 'translate(0, 0)' },
    //     leave: { opacity: 0, transform: 'translate(0, -100%)', margin: "0 -100% 0 0" }
    // })
    return(
        <React.Fragment>
            <div className="userinfo_outerwrapper">
                {screenTransitions.map(({ item, props, key }) => (
                    // item && (
                        <animated.div key={key} style={props} >
                            <Switch location={item}>
                                <Route exact path={`${profileLink}/info`}>
                                    <AbsoluteWrapper>
                                        <UserInfo
                                            userInfoReady={userInfoReady}
                                            viewId={viewId}
                                            setViewId={setViewId}
                                            showAboutMe={showAboutMe}
                                            setShowAboutMe={setShowAboutMe}
                                        />
                                    </AbsoluteWrapper>
                                </Route>
                                <Route exact path={`${profileLink}/edit`}>
                                    <ProfileSettings homeBtnOpen={homeBtnOpen} setHomeBtnOpen={setHomeBtnOpen} />
                                </Route>
                                <Route exact path={`${profileLink}/settings`}>
                                    <UserSettings homeBtnOpen={homeBtnOpen} setHomeBtnOpen={setHomeBtnOpen} />
                                </Route>
                                
                                {/* <Route path={`${profileLink}/edit-user-info`} component={ProfileSettings} /> */}
                                {/* <Route exact path='/edit'> */}
                                {/* <Route strict exact path="/edit">
                                    <AbsoluteWrapper>
                                        <ProfileSettings />
                                    </AbsoluteWrapper>
                                </Route> */}
                            </Switch>
                        </animated.div>
                    // )
                ))}                
                    
                {homeBtnTransition.map(({item, props, key}) => (
                    item && (
                        <animated.div className="profile-homebtn-container" style={props} key={key}>
                            <ProfileHomeBtn setHomeBtnOpen={setHomeBtnOpen} />
                        </animated.div>
                    )
                ))}
            </div>
        </React.Fragment>
    )
}