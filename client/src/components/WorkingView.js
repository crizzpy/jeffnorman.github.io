import React, {useState, useContext} from 'react'
import {Switch, Route, __RouterContext} from 'react-router-dom'
import { PageIndexContext, ActiveComponentContext } from '../App'
import { BulletinBoard } from "./BulletinBoard"
import { Messages } from "./Messages"
import { TeamPage } from "./TeamPage"
import { UserContext, PostsContext } from '../App'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'

export const WorkingView = ({ addPostOpen, setAddPostOpen, activeUser, setActiveUser, userProfileRendered, setUserProfileRendered, bulletinBoardRendered, setBulletinBoardRendered, teamPageRendered, setTeamPageRendered, messagesPageRendered, setMessagesPageRendered, postsLoaded, setPostsLoaded }) => {
    const { activeComponent, setActiveComponent } = useContext(ActiveComponentContext)
    const { userId, setUserId } = useContext(UserContext)
    const { pageIndex, setPageIndex } = useContext(PageIndexContext)

    // const pages = [
    //     ({ style }) => (
    //         <animated.div style={{ style }}>
    //             <BulletinBoard
    //                 addPostOpen={addPostOpen}
    //                 setAddPostOpen={setAddPostOpen}
    //                 activeUser={activeUser}
    //                 setActiveUser={setActiveUser}
    //                 userProfileRendered={userProfileRendered}
    //                 setUserProfileRendered={setUserProfileRendered}
    //                 bulletinBoardRendered={bulletinBoardRendered}
    //                 setBulletinBoardRendered={setBulletinBoardRendered}
    //                 teamPageRendered={teamPageRendered}
    //                 setTeamPageRendered={setTeamPageRendered}
    //                 messagesPageRendered={messagesPageRendered}
    //                 setMessagesPageRendered={setMessagesPageRendered}
    //                 postsLoaded={postsLoaded}
    //                 setPostsLoaded={setPostsLoaded}
    //             />
    //         </animated.div>
    //     ),
    //     ({ style }) => (
    //         <animated.div style={{ style }}>
    //             <Messages
    //                 activeUser={activeUser}
    //                 setActiveUser={setActiveUser}
    //                 userProfileRendered={userProfileRendered}
    //                 setUserProfileRendered={setUserProfileRendered}
    //                 bulletinBoardRendered={bulletinBoardRendered}
    //                 setBulletinBoardRendered={setBulletinBoardRendered}
    //                 teamPageRendered={teamPageRendered}
    //                 setTeamPageRendered={setTeamPageRendered}
    //                 messagesPageRendered={messagesPageRendered}
    //                 setMessagesPageRendered={setMessagesPageRendered}
    //             />
    //         </animated.div>
    //     ),
    //     ({ style }) => (
    //         <animated.div style={{ style }}>
    //             <TeamPage
    //                 activeUser={activeUser}
    //                 setActiveUser={setActiveUser}
    //                 userProfileRendered={userProfileRendered}
    //                 setUserProfileRendered={setUserProfileRendered}
    //                 bulletinBoardRendered={bulletinBoardRendered}
    //                 setBulletinBoardRendered={setBulletinBoardRendered}
    //                 teamPageRendered={teamPageRendered}
    //                 setTeamPageRendered={setTeamPageRendered}
    //                 messagesPageRendered={messagesPageRendered}
    //                 setMessagesPageRendered={setMessagesPageRendered}
    //             />
    //         </animated.div>
    //     ),
    // ]

    const { location } = useContext(__RouterContext)


    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translateX(1200px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: { opacity: 0, transform: 'translateX(-1200px)' },
    })

    return (
        <div className="component_container">
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch>
                        <Route exact path="/dashboard" component={BulletinBoard} />
                        <Route exact path="/messages" component={Messages} />
                        <Route exact path="/team" component={TeamPage} />
                    </Switch>
                </animated.div>
            ))}
        </div>
    )
}