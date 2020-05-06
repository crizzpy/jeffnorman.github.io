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
import { faUserCog, faArrowCircleLeft, faTimes, faCameraRetro, faUserEdit, faEdit, faShieldAlt, faUserShield, faUndoAlt, faCheckCircle, faTimesCircle, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition} from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { LoadingScreen } from './components/LoadingScreen'
import { Dashboard } from './components/Dashboard'
import { Login } from "./components/Login";


library.add(fab, faUserCog, faArrowCircleLeft, faTimes, faCameraRetro, faUserEdit, faEdit, faShieldAlt, faUserShield, faUndoAlt, faCheckCircle, faTimesCircle, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt)


// export const UserContext = createContext(null)
// export const LoginContext = createContext(null)
// export const LoggedInContext = createContext(null) 
// export const SignupContext = createContext(null);
// export const PostsContext = createContext(null);
// export const ActiveComponentContext = createContext(null)
// export const PageIndexContext = createContext(null)
// export const HistoryContext = createContext([])
// export const UniqueIdContext = createContext(null)
// export const ReadyContext = createContext(null) 
export const GlobalContext = createContext(null)

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
  const [activeUser, setActiveUser] = useState('')
  const [pageReady, setPageReady] = useState(false)
  const [userInfoReady, setUserInfoReady] = useState(false)
  const [navCollapse, setNavCollapse] = useState(false);
  const [errors, setErrors] = useState(false) 
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [addPostOpen, setAddPostOpen] = useState(false)
  const [confirmPostDel, setConfirmPostDel] = useState(false)
  const [addPhotoOpen, setAddPhotoOpen] = useState(false)
  const [takePhotoOpen, setTakePhotoOpen] = useState(false);
  const [webCamOpen, setWebCamOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [renderWelcome, setRenderWelcome] = useState(false)
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
  const [loggedIn, setLoggedIn] = useState(true)
  const [posts, setPosts] = useState([])
  const [activeComponent, setActiveComponent] = useState(null)
  const [pageIndex, setPageIndex] = useState(null)
  const [history, setHistory] = useState(['none'])
  const [uniqueId, setUniqueId] = useState(null)
  const [ready, setReady] = useState(null)
  const [previewCardOpen, setPreviewCardOpen] = useState(null)
  const [hidePreview, setHidePreview] = useState(null)
  const [previewCardLabel, setPreviewCardLabel] = useState(null)
  const [previewCardDirection, setPreviewCardDirection] = useState(null)
  const [xCoordinate, setXCoordinate] = useState(null)
  const [yCoordinate, setYCoordinate] = useState(null)
  const [lastView, setLastView] = useState(null)
  const [cameFromProfile, setCameFromProfile] = useState(null)
  const [cameFromWorking, setCameFromWorking] = useState(null)
  const [profileLink, setProfileLink] = useState(null)

  const globalProviderValue = useMemo(
    () => ({
      userId,
      setUserId,
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo,
      showSignup,
      setShowSignup,
      posts,
      setPosts,
      activeComponent,
      setActiveComponent,
      pageIndex, 
      setPageIndex,
      loggedIn,
      setLoggedIn,
      history,
      setHistory,
      uniqueId,
      setUniqueId,
      ready,
      setReady,
      previewCardOpen,
      setPreviewCardOpen,
      hidePreview,
      setHidePreview,
      previewCardLabel,
      setPreviewCardLabel,
      previewCardDirection,
      setPreviewCardDirection,
      xCoordinate,      
      setXCoordinate,
      yCoordinate,
      setYCoordinate,
      lastView,
      setLastView,
      cameFromProfile, 
      setCameFromProfile,
      cameFromWorking,
      setCameFromWorking,
      profileLink,
      setProfileLink
    }),
    [
      userId,
      setUserId,
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo,
      showSignup,
      setShowSignup,
      posts,
      setPosts,
      activeComponent,
      setActiveComponent,
      pageIndex,
      setPageIndex,
      loggedIn,
      setLoggedIn,
      history,
      setHistory,
      uniqueId,
      setUniqueId,
      ready,
      setReady,
      previewCardOpen,
      setPreviewCardOpen,
      hidePreview,
      setHidePreview,
      previewCardLabel,
      setPreviewCardLabel,
      previewCardDirection,
      setPreviewCardDirection,
      xCoordinate,      
      setXCoordinate,
      yCoordinate,
      setYCoordinate,
      lastView,
      setLastView,
      cameFromProfile, 
      setCameFromProfile,
      cameFromWorking,
      setCameFromWorking,
      profileLink,
      setProfileLink
    ]
  )

  return (
    <React.Fragment>
      <Router>
        <Route>
          <GlobalContext.Provider value={globalProviderValue}>
            {testing && <Testing testing={testing} isTesting={isTesting} />}
            {!loggedIn && (
              <Login
                showSignup={showSignup}
                setShowSignup={setShowSignup}
                renderBulletinBoard={renderBulletinBoard}
                setRenderBulletinBoard={setRenderBulletinBoard}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                errors={errors}
                setErrors={setErrors}
                setPageReady={setPageReady}
                setRenderWelcome={setRenderWelcome}
              />
            )}
            {!pageReady && (
              <LoadingScreen
                pageReady={pageReady}
                setPageReady={setPageReady}
              />
            )}
            {pageReady && loggedIn && (
              <React.Fragment>
                <Dashboard
                  key={"key2"}
                  navCollapse={navCollapse}
                  setNavCollapse={setNavCollapse}
                  pageReady={pageReady}
                  setPageReady={setPageReady}
                  userInfoReady={userInfoReady}
                  setUserInfoReady={setUserInfoReady}
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
                  confirmPostDel={confirmPostDel}
                  setConfirmPostDel={setConfirmPostDel}
                  setPageReady={setPageReady}
                />
              </React.Fragment>
            )}
          </GlobalContext.Provider>
        </Route>
      </Router>
    </React.Fragment>
  ); 
};


export default App;