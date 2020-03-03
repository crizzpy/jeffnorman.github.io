import React, {useState, useEffect, useCallback, useRef, createContext, useContext, useMemo} from "react";
import Webcam from "react-webcam";

// import express from 'express'
// import io from 'socket.io-client'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition} from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { LoadingScreen } from './components/LoadingScreen'
import { Dashboard } from './components/Dashboard'
import { LoginPage } from './components/LoginPage'


library.add(fab, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt)


export const UserContext = createContext(null)
export const LoginContext = createContext(null)
export const SignupContext = createContext(null);
export const PostsContext = createContext(null);
export const ActiveComponentContext = createContext(null)
export const PageIndexContext = createContext(null)



const Testing = () =>{

  // const [index, setIndex] = useState(0)

  // const toggle = e => {
  //   setIndex(index === 2 ? 0 : index + 1)
  // }

  const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
  ]

  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translateX(1200px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-1200px)' },
  })
  return (
    <div style={require('./style/testing.css')}>
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    </div>
  )

  // const pages = [
  //   style => (
  //     <animated.div style={{ ...style, padding: "20px", width: "100%", height: "100%", background: '#b3FFBD' }}>A</animated.div>
  //   ),
  //   style => (
  //     <animated.div style={{ ...style, padding: "20px", width: "100%", height: "100%", background: '#B2DBBF' }}>B</animated.div>
  //   ),
  //   style => (
  //     <animated.div style={{ ...style, padding: "20px", width: "100%", height: "100%", background: '#12DBBF' }}>C</animated.div>
  //   ),
  // ]

 

  // return(
  //   <>
  //   <div className="login_container" style={require('./style/testing.css')}>
  //     {/* <div className="background">
  //       <img src={require("./images/marble-background.jpg")}  />
  //     </div> */}
  //     {/* <div className="form_container"> */}
  //       {/* <div className="form_innercontainer">
  //         <div className="input_wrapper">
  //           <input placeholder="Username" />
  //         </div>
  //         <div className="input_wrapper">
  //           <input placeholder="Password" type="password" />
  //         </div>
  //       </div> */}
  //         <div className="form_container" onClick={toggle}>
  //           {transitions.map(({ item, props, key }) => {
  //             const Page = pages[item]
  //             return <Page key={key} style={props} />
  //           })}
  //         </div>
  //     {/* </div> */}
  //   </div>
  //   </>
  // )
}








// ------.o.-------ooooooooo.---ooooooooo.-------------ooooooooo.---oooooooooooo-ooooo------ooo-oooooooooo.---oooooooooooo-ooooooooo.---
// -----.888.------`888---`Y88.-`888---`Y88.-----------`888---`Y88.-`888'-----`8-`888b.-----`8'-`888'---`Y8b--`888'-----`8-`888---`Y88.-
// ----.8"888.------888---.d88'--888---.d88'------------888---.d88'--888----------8-`88b.----8---888------888--888----------888---.d88'-
// ---.8'-`888.-----888ooo88P'---888ooo88P'-------------888ooo88P'---888oooo8-----8---`88b.--8---888------888--888oooo8-----888ooo88P'--
// --.88ooo8888.----888----------888--------------------888`88b.-----888----"-----8-----`88b.8---888------888--888----"-----888`88b.----
// -.8'-----`888.---888----------888--------------------888--`88b.---888-------o--8-------`888---888-----d88'--888-------o--888--`88b.--
// o88o-----o8888o-o888o--------o888o------------------o888o--o888o-o888ooooood8-o8o--------`8--o888bood8P'---o888ooooood8-o888o--o888o-


const App = () => {

  const [testing, isTesting] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)
  const [activeUser, setActiveUser] = useState('')
  const [pageReady, setPageReady] = useState(false)
  const [navCollapse, setNavCollapse] = useState(false);
  const [errors, setErrors] = useState(false) 
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [addPostOpen, setAddPostOpen] = useState(false)
  const [addPhotoOpen, setAddPhotoOpen] = useState(false)
  const [takePhotoOpen, setTakePhotoOpen] = useState(false);
  const [webCamOpen, setWebCamOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [renderWelcome, setRenderWelcome] = useState(true)
  const [renderUserProfile, setRenderUserProfile] = useState(false);
  const [renderBulletinBoard, setRenderBulletinBoard] = useState(false)
  const [renderMessages, setRenderMessages] = useState(false);
  const [renderTeamPage, setRenderTeamPage] = useState(false)
  const [userProfileRendered, setUserProfileRendered] = useState(false)
  const [bulletinBoardRendered, setBulletinBoardRendered] = useState(false)
  const [messagesPageRendered, setMessagesPageRendered] = useState(false)
  const [teamPageRendered, setTeamPageRendered] = useState(false)
  const [postsLoaded, setPostsLoaded] = useState(false)
  // const posts = []
  const messages = []
  
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwordTwo, setPasswordTwo] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [posts, setPosts] = useState([])
  const [activeComponent, setActiveComponent] = useState(null)
  const [pageIndex, setPageIndex] = useState(null)
  const userProviderValue = useMemo(
    () => ({
      userId,
      setUserId,
    }),
    [
      userId,
      setUserId,
    ]
  );
  const loginProviderValue = useMemo(
    () => ({
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo
    }),
    [
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo
    ]
  );
  const signupProviderValue = useMemo(() => ({
    showSignup,
    setShowSignup
    }),
    [
      showSignup,
      setShowSignup
    ]
  )
  const postsProviderValue = useMemo(
    () => ({
      posts,
      setPosts
    }),
    [posts, setPosts]
  )
  const activeComponentProviderValue = useMemo(
    () => ({
      activeComponent,
      setActiveComponent
    }),
    [
      activeComponent,
      setActiveComponent
    ]
  );
  const pageIndexProviderValue = useMemo(
    () => ({
      pageIndex, setPageIndex
    }),
    [
      pageIndex, setPageIndex
    ]
  )

  return (
    <React.Fragment>
      <Router>
        <Route>
          <UserContext.Provider value={userProviderValue}>
            {testing && (
              <Testing testing={testing} isTesting={isTesting}/>
            )}

            {!loggedIn && (
              <LoginContext.Provider value={loginProviderValue}>
                <SignupContext.Provider value={signupProviderValue}>
                  <LoginPage
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    showSignup={showSignup}
                    setShowSignup={setShowSignup}
                    renderBulletinBoard={renderBulletinBoard}
                    setRenderBulletinBoard={setRenderBulletinBoard}
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                    errors={errors}
                    setErrors={setErrors}
                  />
                </SignupContext.Provider>
              </LoginContext.Provider>
            )}
            {!pageReady && (
              <LoadingScreen
                pageReady={pageReady}
                setPageReady={setPageReady}
              />
            )}
            {pageReady && loggedIn && (
              <React.Fragment>
                <PostsContext.Provider value={postsProviderValue}>
                  <ActiveComponentContext.Provider value={activeComponentProviderValue}>
                      <PageIndexContext.Provider value={pageIndexProviderValue}>
                      <Dashboard
                        key={"key2"}
                        loggedIn={loggedIn}
                        setLoggedIn={setLoggedIn}
                        navCollapse={navCollapse}
                        setNavCollapse={setNavCollapse}
                        pageReady={pageReady}
                        setPageReady={setPageReady}
                        addUserOpen={addUserOpen}
                        setAddUserOpen={setAddUserOpen}
                        errors={errors}
                        setErrors={setErrors}
                        addPostOpen={addPostOpen}
                        setAddPostOpen={setAddPostOpen}
                        renderBulletinBoard={renderBulletinBoard}
                        setRenderBulletinBoard={setRenderBulletinBoard}
                        renderUserProfile={renderUserProfile}
                        setRenderUserProfile={setRenderUserProfile}
                        renderMessages={renderMessages}
                        setRenderMessages={setRenderMessages}
                        renderTeamPage={renderTeamPage}
                        setRenderTeamPage={setRenderTeamPage}
                        renderWelcome={renderWelcome}
                        setRenderWelcome={setRenderWelcome}
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        addPhotoOpen={addPhotoOpen}
                        setAddPhotoOpen={setAddPhotoOpen}
                        takePhotoOpen={takePhotoOpen}
                        setTakePhotoOpen={setTakePhotoOpen}
                        uploadedFile={uploadedFile}
                        setUploadedFile={setUploadedFile}
                        webCamOpen={webCamOpen}
                        setWebCamOpen={setWebCamOpen}
                        userProfileRendered={userProfileRendered}
                        setUserProfileRendered={setUserProfileRendered}
                        bulletinBoardRendered={bulletinBoardRendered}
                        setBulletinBoardRendered={setBulletinBoardRendered}
                        teamPageRendered={teamPageRendered}
                        setTeamPageRendered={setTeamPageRendered}
                        messagesPageRendered={messagesPageRendered}
                        setMessagesPageRendered={setMessagesPageRendered}
                        postsLoaded={postsLoaded}
                        setPostsLoaded={setPostsLoaded}
                        // setPosts={setPosts}
                      />
                    </PageIndexContext.Provider>
                  </ActiveComponentContext.Provider>
                </PostsContext.Provider>
              </React.Fragment>
            )}
          </UserContext.Provider>
        </Route>
      </Router>
    </React.Fragment>
  ); 
};


export default App;
