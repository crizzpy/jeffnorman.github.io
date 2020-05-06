// oooooooooo.---------.o.--------.oooooo..o-ooooo---ooooo-oooooooooo.----.oooooo.---------.o.-------ooooooooo.---oooooooooo.---
// `888'---`Y8b-------.888.------d8P'----`Y8-`888'---`888'-`888'---`Y8b--d8P'--`Y8b-------.888.------`888---`Y88.-`888'---`Y8b--
// -888------888-----.8"888.-----Y88bo.-------888-----888---888-----888-888------888-----.8"888.------888---.d88'--888------888-
// -888------888----.8'-`888.-----`"Y8888o.---888ooooo888---888oooo888'-888------888----.8'-`888.-----888ooo88P'---888------888-
// -888------888---.88ooo8888.--------`"Y88b--888-----888---888----`88b-888------888---.88ooo8888.----888`88b.-----888------888-
// -888-----d88'--.8'-----`888.--oo-----.d8P--888-----888---888----.88P-`88b----d88'--.8'-----`888.---888--`88b.---888-----d88'-
// o888bood8P'---o88o-----o8888o-8""88888P'--o888o---o888o-o888bood8P'---`Y8bood8P'--o88o-----o8888o-o888o--o888o-o888bood8P'---

import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { GlobalContext } from '../App'
import { WorkingView } from "./WorkingView"
import { AddUser } from "./AddUser"
import { Welcome } from './Welcome'
import { NavBar } from './NavBar'
import { UserProfile } from './UserProfile'
import { WebcamComponent } from './WebCam'
import { LoadingScreen } from './LoadingScreen'


export const Dashboard = ({ navCollapse, setNavCollapse, pageReady, setPageReady, userInfoReady, setUserInfoReady, addUserOpen, setAddUserOpen, errors, setErrors, addPostOpen, setAddPostOpen, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen, userProfileRendered, setUserProfileRendered, bulletinBoardRendered, setBulletinBoardRendered, teamPageRendered, setTeamPageRendered, messagesPageRendered, setMessagesPageRendered, postsLoaded, setPostsLoaded, renderWelcome, setRenderWelcome, confirmPostDel, setConfirmPostDel }) => {
  useEffect(() => {
      retrievePosts()
      renderDefault()
  }, [])

  
  // useEffect(() => {
    //   // setTimeout(() => {
      //     if(userInfoReady){
        //       setReady(true)
        //       console.log('testing')
        //     }
        //   // }, 100)
        // }, userInfoReady)
        
  const { ready, setReady, 
          activeComponent, setActiveComponent, 
          pageIndex, setPageIndex, 
          uniqueId, setUniqueId, 
          posts, setPosts, 
          userId, setUserId, 
          loggedIn, setLoggedIn,
          cameFromProfile, setCameFromProfile,
          cameFromWorking, setCameFromWorking,
          profileLink, setProfileLink } = useContext(GlobalContext)

  const retrievePosts = () => {
    axios
      .get("/posts/retrieve")
      .then(res => {
          res.data.map(post => {
              // setPosts([...posts, post]);
              posts.push(post)
          });
          setPostsLoaded(true);
          
      })
      .catch(err => console.log(err));
  }

  const handleLogout = () => {
    setUserId(null)
    // setLoggedIn(false)
    window.location.reload();
  }

  const renderDefault = () => {
    if (!activeComponent) {
      setActiveComponent("welcome")
      if (!renderWelcome && !renderUserProfile && !renderMessages && !renderTeamPage && !renderBulletinBoard) {
        setRenderWelcome(true)
      }
    }
  }

  if (!userId) {
    setUserId({
        hasAdmin: true,
        isAdmin: true,
        headmin: "self",
        date: "2020 - 02 - 25T00: 08: 31.591Z",
        _id: "5e4188831c9d4400000ba31e",
        id: "6a7e487d-efcc-4feb-ae53-b38f23e95ca8",
        username: 'chrispy',
        firstName: 'Jeff',
        lastName: 'Norman',
        password: 'hallybird101',
        email: 'jeff_norman@live.com',
        department: 'A',
        role: 'Analyst'
    })
    setRenderWelcome(true)
  }

  return (
    
    
    <div
      style={require("../style/dashboard.css")}
      className={navCollapse ? "main_container shrink" : "main_container"}
    >
        
      {/* {userId.isAdmin == true && ( */}
        <div className="addUserBtn">
          <FontAwesomeIcon
            icon="plus"
            className="plus_icon"
            onClick={e => {
              e.preventDefault();
              setAddUserOpen(!addUserOpen);
            }}
          />
          <AddUser
            addUserOpen={addUserOpen}
            setAddUserOpen={setAddUserOpen}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
      {/* )}  */}

      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <NavBar
        navCollapse={navCollapse}
        setNavCollapse={setNavCollapse}
        renderWelcome={renderWelcome}
        setRenderWelcome={setRenderWelcome}
        renderBulletinBoard={renderBulletinBoard}
        setRenderBulletinBoard={setRenderBulletinBoard}
        renderUserProfile={renderUserProfile}
        setRenderUserProfile={setRenderUserProfile}
        renderMessages={renderMessages}
        setRenderMessages={setRenderMessages}
        renderTeamPage={renderTeamPage}
        setRenderTeamPage={setRenderTeamPage}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        userInfoReady={userInfoReady}
        setUserInfoReady={setUserInfoReady}
      />
      <div className={navCollapse ? "container_window shrink" : "container_window"}>
        <h1>{activeComponent}</h1>
      </div>
      <div className={navCollapse ? "content_container shrink" : "content_container"}>
      

        {renderWelcome && (
          <React.Fragment>
            <Redirect push to="/welcome" />
              <Route exact path="/welcome" component={Welcome} />
          </React.Fragment>
        )}
        
        
          {renderUserProfile && (
            <React.Fragment>
              <Redirect push to={`${profileLink}/info`} />
              {/* <Route exact path={profileLink}> */}
                <UserProfile
                  userInfoReady={userInfoReady}
                  setUserInfoReady={setUserInfoReady}
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
                  profileLink={profileLink}
                  setRenderUserProfile={setRenderUserProfile}
                />
              {/* </Route> */}
            </React.Fragment>
          )}

        {!renderUserProfile && !renderWelcome && (
          <div className="component_container">
            {!pageReady && (
              <LoadingScreen setPageReady={setPageReady} />
            )}
            <WorkingView
              pageReady={pageReady}
              setPageReady={setPageReady}
              addPostOpen={addPostOpen}
              setAddPostOpen={setAddPostOpen}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
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
              renderUserProfile={renderUserProfile}
              setRenderUserProfile={setRenderUserProfile}
            />
          </div>
        )}
      </div>
    </div>
    // </LoadingScreen>
  );
  
}
