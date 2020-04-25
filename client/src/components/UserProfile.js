
// ooooo-----ooo--.oooooo..o-oooooooooooo-ooooooooo.-------------ooooooooo.---ooooooooo.-----.oooooo.---oooooooooooo-ooooo-ooooo--------oooooooooooo-
// `888'-----`8'-d8P'----`Y8-`888'-----`8-`888---`Y88.-----------`888---`Y88.-`888---`Y88.--d8P'--`Y8b--`888'-----`8-`888'-`888'--------`888'-----`8-
// -888-------8--Y88bo.-------888----------888---.d88'------------888---.d88'--888---.d88'-888------888--888----------888---888----------888---------
// -888-------8---`"Y8888o.---888oooo8-----888ooo88P'-------------888ooo88P'---888ooo88P'--888------888--888oooo8-----888---888----------888oooo8----
// -888-------8-------`"Y88b--888----"-----888`88b.---------------888----------888`88b.----888------888--888----"-----888---888----------888----"----
// -`88.----.8'--oo-----.d8P--888-------o--888--`88b.-------------888----------888--`88b.--`88b----d88'--888----------888---888-------o--888-------o-
// ---`YbodP'----8""88888P'--o888ooooood8-o888o--o888o-----------o888o--------o888o--o888o--`Y8bood8P'--o888o--------o888o-o888ooooood8-o888ooooood8-


import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { GlobalContext } from '../App'
import { ProfileImg } from './ProfileImg'
import {useParams} from 'react-router-dom'
import { UserInfo } from './UserInfo'
import {ProfileSettings} from './ProfileSettings'
import { WebcamComponent } from './WebCam'
import { Switch, Route, __RouterContext, useHistory } from 'react-router-dom'

export const UserProfile = ({userInfoReady, setUserInfoReady, activeUser, setActiveUser, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen}) => {
  const { userId, setUserId,
          history, setHistory,
          uniqueId, setUniqueId,
          ready, setReady } = useContext(GlobalContext)

  useEffect(() => {
    // setHistory('/profile')
    loadUser()
  }, [])

  const [viewId, setViewId] = useState({})
  const [editProfileSettingsOpen, setEditProfileSettingsOpen] = useState(false)

  const webCamTransition = useTransition(webCamOpen, null, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  }) 
  const settingsTransition = useTransition(editProfileSettingsOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  }) 
  const { location } = useContext(__RouterContext)
  const screenTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(0, 100%)' },
    enter: { opacity: 1, transform: 'translate(0, 0)' },
    leave: { opacity: 0, transform: 'translate(0, -100%)', margin: "0 -100% 0 0" }
  })

  // const profileTransitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate(0, -100%)' },
  //   enter: { opacity: 1, transform: 'translate(0, 0)' },
  //   leave: { opacity: 0, transform: 'translate(0, 100%)', margin: "0 -100% 0 0" }
  // })


  const loadUser = () => {
    // setTimeout(() => {
    setTimeout(() => {
      if (userId.id !== uniqueId) {
        const user = {
          uniqueId
        }
        axios.post('/users/load', user)
          .then(res => {
            setViewId(res.data)
            console.log('true')
          })
          .catch(err => console.log(err))
      } else {
        setViewId(userId)
        console.log('true')
      }
      // setTimeout(() => {
        setUserInfoReady(true)
        console.log('testtrue')
      // }, 200)
    }, 400)
    // }, 400)
  }

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const addPhotoFade = useSpring({
      opacity: addPhotoOpen ? 1 : 0,
  })

  const takePhotoFade = useSpring({
    opacity: takePhotoOpen ? 1 : 0,
  });

 

  const [aboutText, setAboutText] = useState('')
  const [showAboutMe, setShowAboutMe] = useState(false)
  return (
    <React.Fragment>
      <animated.div className="profilepage_wrapper" style={fade}>
        <ProfileImg
          takePhotoOpen={takePhotoOpen}
          setTakePhotoOpen={setTakePhotoOpen}
          addPhotoOpen={addPhotoOpen}
          setAddPhotoOpen={setAddPhotoOpen}
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
          webCamOpen={webCamOpen}
          setWebCamOpen={setWebCamOpen}
          viewId={viewId}
          setViewId={setViewId}
          editProfileSettingsOpen={editProfileSettingsOpen}
          setEditProfileSettingsOpen={setEditProfileSettingsOpen}
        />
        {screenTransitions.map(({item, props, key}) => (
          <animated.div key={key} style={props} >
            <Switch location={item}>
              <Route exact path="/">
                <UserInfo
                  userInfoReady={userInfoReady}
                  viewId={viewId}
                  setViewId={setViewId}
                  showAboutMe={showAboutMe}
                  setShowAboutMe={setShowAboutMe}
                />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </animated.div>
      {webCamTransition.map(({ item, props, key }) => (
        item && (
          <animated.div className="profilepage_wrapper"style={props}>
            {/* <div className="webcamwrap-inner"> */}
              <WebcamComponent
                setWebCamOpen={setWebCamOpen}
              />
            {/* </div> */}
          </animated.div>
        )
      ))}
      {settingsTransition.map(({item, props, key}) => (
        item && (
          <animated.div className="profilepage_wrapper" style={props}>
            <ProfileSettings 
              setEditProfileSettingsOpen={setEditProfileSettingsOpen}
            />
          </animated.div>
        )
      ))}
    </React.Fragment>
  );
}