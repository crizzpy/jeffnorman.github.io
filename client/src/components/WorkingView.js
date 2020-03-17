import React, {useState, useContext} from 'react'
import {Switch, Route, __RouterContext} from 'react-router-dom'
import { PageIndexContext, ActiveComponentContext, HistoryContext } from '../App'
import { BulletinBoard } from "./BulletinBoard"
import { Messages } from "./Messages"
import { TeamPage } from "./TeamPage"
import { UserContext, PostsContext } from '../App'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
// import "bootstrap/dist/css/bootstrap.min.css"

export const WorkingView = ({ pageReady, setPageReady, addPostOpen, setAddPostOpen, activeUser, setActiveUser, userProfileRendered, setUserProfileRendered, bulletinBoardRendered, setBulletinBoardRendered, teamPageRendered, setTeamPageRendered, messagesPageRendered, setMessagesPageRendered, postsLoaded, setPostsLoaded, confirmPostDel, setConfirmPostDel, setRenderUserProfile }) => {
    const { activeComponent, setActiveComponent } = useContext(ActiveComponentContext)
    const { userId, setUserId } = useContext(UserContext)
    const { pageIndex, setPageIndex } = useContext(PageIndexContext)
    const {history, setHistory} = useContext(HistoryContext)
    const { location } = useContext(__RouterContext)

    


    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate(100%, 0)' },
        enter: { opacity: 1, transform: 'translate(0, 0)' },
        leave: { opacity: 0, transform: 'translate(-100%, 0)', margin: "0 -100% 0 0" }
    })

    // const transitions = useTransition(location, location => location.pathname, {
    //     from: { opacity: 0, transform: 'translate(0, 0)' },
    //     enter: { opacity: 1, transform: 'translate(0, 0)' },
    //     leave: { opacity: 0, transform: 'translate(-100%, 0)', margin: "0 -100% 0 0" }
    // })

    

    return (
        transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props} >
                <Switch location={item}>
                    <Route exact path="/dashboard">
                        <BulletinBoard 
                            confirmPostDel={confirmPostDel} 
                            setConfirmPostDel={setConfirmPostDel} 
                            postsLoaded={postsLoaded} 
                            addPostOpen={addPostOpen} 
                            setAddPostOpen={setAddPostOpen} 
                            setActiveComponent={setActiveComponent}
                            setRenderUserProfile={setRenderUserProfile}
                            pageReady={pageReady}
                            setPageReady={setPageReady}
                        />
                    </Route>
                    <Route exact path="/messages" component={Messages} />
                    <Route exact path="/team" component={TeamPage} />
                </Switch>
            </animated.div>
        ))
    )
}