import React, {useContext} from 'react'
import {Route, Switch, __RouterContext} from 'react-router-dom'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { UserInfo } from './UserInfo'
import { ProfileSettings } from './ProfileSettings'
import { GlobalContext } from '../App'
import { AbsoluteWrapper } from './AbsoluteWrapper'


export const ProfileView = ({userInfoReady, viewId, setViewId, showAboutMe, setShowAboutMe, profileLink}) => {
    const { userId, setUserId,
        history, setHistory,
        uniqueId, setUniqueId,
        ready, setReady,
        lastView, cameFromProfile } = useContext(GlobalContext)
    const { location } = useContext(__RouterContext)
    const screenTransitions = useTransition(location, location => location.pathname, {
      from: { transform: 'translate(0, 100%)' },
      enter: { opacity: 1, transform: 'translate(0, 0)' },
      leave: { opacity: 0, transform: 'translate(0, -100%)', margin: "0 -100% 0 0" }
    })
    // const screenTransitions = useTransition(location, location => location.pathname, {
    //     from: lastView == "profile" && cameFromProfile == true ? { transform: 'translate(0, 100%)' } : { transform: "translate(0, 0)" },
    //     enter: { opacity: 1, transform: 'translate(0, 0)' },
    //     leave: { opacity: 0, transform: 'translate(0, -100%)', margin: "0 -100% 0 0" }
    // })
    return(
        screenTransitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props} >
                <Switch location={item}>
                    <Route strict exact path={profileLink}>
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
                    {/* <Route path={`${profileLink}/edit-user-info`} component={ProfileSettings} /> */}
                    {/* <Route exact path='/edit'> */}
                    {/* <Route strict exact path="/edit">
                        <AbsoluteWrapper>
                            <ProfileSettings />
                        </AbsoluteWrapper>
                    </Route> */}
                    <Route path="/edit" component={ProfileSettings} />
                </Switch>
            </animated.div>
        ))
    )
}