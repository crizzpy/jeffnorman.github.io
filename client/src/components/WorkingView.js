import React, {useState, useContext} from 'react'
import {Switch, Route, __RouterContext, useHistory } from 'react-router-dom'
import { GlobalContext } from '../App'
import { BulletinBoard } from "./BulletinBoard"
import { Messages } from "./Messages"
import { TeamPage } from "./TeamPage"
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
// import "bootstrap/dist/css/bootstrap.min.css"

export const WorkingView = ({ pageReady, setPageReady, addPostOpen, setAddPostOpen, activeUser, setActiveUser, userProfileRendered, setUserProfileRendered, bulletinBoardRendered, setBulletinBoardRendered, teamPageRendered, setTeamPageRendered, messagesPageRendered, setMessagesPageRendered, postsLoaded, setPostsLoaded, confirmPostDel, setConfirmPostDel, setRenderUserProfile }) => {
    const { activeComponent, setActiveComponent, 
            userId, setUserId,
            pageIndex, setPageIndex,
            history, setHistory,
            lastView, cameFromProfile } = useContext(GlobalContext)
    
    const { location } = useContext(__RouterContext)

    // const navigateFromAwayTransition = useTransition()
    // const navigateFromWorkingViewTransition = useTransition()

    const lastPage = history[history.length - 2]
    console.log(lastPage, 'test')
    // const lastPage = "/dashboard"
    const slide = 'translate(100%, 0)'
    const fade = 'translate(0, 0)'

    const transition1 = useTransition(location, location => location.pathname, {
        from: lastView == "working" && cameFromProfile == false ? { opacity: 1, transform: slide } : { opacity: 0, transform: fade },
        enter: { opacity: 1, transform: 'translate(0, 0)' },
        leave: { opacity: 0, transform: 'translate(-100%, 0)', margin: "0 -100% 0 0" }
    })

    const transition2 = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate(0, 0)' },
        enter: { opacity: 1, transform: 'translate(0, 0)' },
        leave: { opacity: 0, transform: 'translate(-100%, 0)', margin: "0 -100% 0 0" }
    })

    // const transitions = useTransition(location, location => location.pathname, {
    //     from: { opacity: 0, transform: 'translate(0, 0)' },
    //     enter: { opacity: 1, transform: 'translate(0, 0)' },
    //     leave: { opacity: 0, transform: 'translate(-100%, 0)', margin: "0 -100% 0 0" }
    // })

    

    // if (history[history.length - 1] == "/dashboard" || "/messages" || "/team") {
    //  console.log(history[history.length - 1], 'heyo')
    // console.log(lastPage, history[history.length - 2], 'heyo')  
    console.log(lastView) 
        return (
            transition1.map(({ item, props, key }) => (
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
    // } else {
    //     console.log(history[history.length - 1], 'heyo')
    //     return (
    //         transition2.map(({ item, props, key }) => (
    //             <animated.div key={key} style={props} >
    //                 <Switch location={item}>
    //                     <Route exact path="/dashboard">
    //                         <BulletinBoard
    //                             confirmPostDel={confirmPostDel}
    //                             setConfirmPostDel={setConfirmPostDel}
    //                             postsLoaded={postsLoaded}
    //                             addPostOpen={addPostOpen}
    //                             setAddPostOpen={setAddPostOpen}
    //                             setActiveComponent={setActiveComponent}
    //                             setRenderUserProfile={setRenderUserProfile}
    //                             pageReady={pageReady}
    //                             setPageReady={setPageReady}
    //                         />
    //                     </Route>
    //                     <Route exact path="/messages" component={Messages} />
    //                     <Route exact path="/team" component={TeamPage} />
    //                 </Switch>
    //             </animated.div>
    //         ))
    //     )
    // }
}