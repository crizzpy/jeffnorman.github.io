// oooooooooo.--ooooo-----ooo-ooooo--------ooooo--------oooooooooooo-ooooooooooooo-ooooo-ooooo------ooo-----------oooooooooo.----.oooooo.---------.o.-------ooooooooo.---oooooooooo.---
// `888'---`Y8b-`888'-----`8'-`888'--------`888'--------`888'-----`8-8'---888---`8-`888'-`888b.-----`8'-----------`888'---`Y8b--d8P'--`Y8b-------.888.------`888---`Y88.-`888'---`Y8b--
// -888-----888--888-------8---888----------888----------888--------------888-------888---8-`88b.----8-------------888-----888-888------888-----.8"888.------888---.d88'--888------888-
// -888oooo888'--888-------8---888----------888----------888oooo8---------888-------888---8---`88b.--8-------------888oooo888'-888------888----.8'-`888.-----888ooo88P'---888------888-
// -888----`88b--888-------8---888----------888----------888----"---------888-------888---8-----`88b.8-------------888----`88b-888------888---.88ooo8888.----888`88b.-----888------888-
// -888----.88P--`88.----.8'---888-------o--888-------o--888-------o------888-------888---8-------`888-------------888----.88P-`88b----d88'--.8'-----`888.---888--`88b.---888-----d88'-
// o888bood8P'-----`YbodP'----o888ooooood8-o888ooooood8-o888ooooood8-----o888o-----o888o-o8o--------`8------------o888bood8P'---`Y8bood8P'--o88o-----o8888o-o888o--o888o-o888bood8P'---


import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUndoAlt, faCheckCircle, faTimesCircle, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import {GlobalContext} from '../App'
import { AbsoluteWrapper } from './AbsoluteWrapper'
import { LoadingScreen2 } from './LoadingScreen2'
import { ScrollWindow } from './ScrollWindow'
import { Post } from './Post'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { LoadingScreen } from './LoadingScreen'
import {PostBuilder} from './PostBuilder'
import {PreviewCard} from './PreviewCard'

export const BulletinBoard = ({pageReady, setPageReady, addPostOpen, setAddPostOpen, activeUser, setActiveUser, postsLoaded, setPostsLoaded, setActiveComponent, setRenderUserProfile}) => {
  
  const { userId, setUserId, 
          posts, setPosts, 
          history, setHistory, 
          setPreviewCardOpen, setPreviewCardLabel, 
          setXCoordinate, setYCoordinate,
          previewCardOpen, xCoordinate,
          hidePreview, setHidePreview } = useContext(GlobalContext)
 
  // const fadein = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity: 1
  // });

  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  let delBtn = ""

  const transition = useTransition(addPostOpen, null, {
    from: { height: "60px", width: "170px", opacity: 0 },
    enter: { height: "150px", width: "350px", opacity: 1 },
    leave: { height: "60px", width: "170px", opacity: 0 },
  })


  //Replace xCoordinate somehow
  // const previewTransition1 = useTransition(previewCardOpen, null, {
  //   from: { opacity: 0, position: "absolute", width: "auto", left: xCoordinate, top: "0px", background: "black", borderRadius: "5px", height: "25px", padding: "5px" },
  //   enter: { opacity: 1, position: "absolute", width: "auto", left: xCoordinate, top: "0px", background: "black", borderRadius: "5px", height: "25px", padding: "5px" },
  //   leave: { opacity: 0, position: "absolute", width: "auto", left: xCoordinate, top: "0px", background: "black", borderRadius: "5px", height: "25px", padding: "5px" }
  // })

  const submitPost = () => {
    console.log('submit post')
    console.log(postContent)
    if (postContent) {
      console.log(postAdminsOnly)
      const data = {
        userId: userId.id,
        userIsAdmin: userId.isAdmin,
        userFirstName: userId.firstName,
        userLastName: userId.lastName,
        id: uuid.v4(),
        adminsOnly: postAdminsOnly,
        content: postContent
      }
      axios.post('/posts/add', data)
      .then(res=> {
        console.log(res.data)
        setPosts([res.data, ...posts ])
      })
      .catch(err => console.log(err))
      setPostContent("");
      setPostAdminsOnly(false);
      setAddPostOpen(false); 
    }
    else{
      return
    }
  }

  

  return (
    <AbsoluteWrapper>
      <div>
        {/* {previewTransition1.map(({item, props, key}) => (
          item && (
            <animated.div style={props}> */}
        <div style={{height: "auto", position: "absolute", zIndex: 100}}>
          <PreviewCard />
        </div>
            {/* </animated.div>
             
          )
        ))} */}
        <div
          className="addPost"
          id="add-post"
          onClick={e => {
            e.preventDefault();
            setAddPostOpen(!addPostOpen);
            setPreviewCardOpen(false)
            console.log(addPostOpen);
          }}
          onMouseEnter={() => {
            if (!addPostOpen) {
              setPreviewCardOpen(true)
              setPreviewCardLabel("Create a Post")
              let elem = document.getElementById("add-post")
              let coords = elem.getBoundingClientRect()
              setXCoordinate(coords.left - 195 + "px")
              setYCoordinate("15px")
            }
          }}
          onMouseLeave={() => {
            setPreviewCardOpen(false)
            // setTimeout(() => {
            //   setPreviewCardLabel("")
            // }, 500)
          }}
        >
          <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
        </div>
        <div className="posts_window">
          <div className="posts_innerwrap">
            {postsLoaded && (
              <ul>
                {posts.map(post => {
                  if (userId.id == post.userId) {
                    delBtn = "delbutton";
                  } else {
                    delBtn = "hide";
                  }
                  return (
                    
                        <Post 
                          key={post.id} 
                          post={post} 
                          delBtn={delBtn} 
                          setActiveComponent={setActiveComponent} 
                          setRenderUserProfile={setRenderUserProfile} 
                          postsLoaded={postsLoaded}
                        />
                )})}
              </ul>
            )}
            {!postsLoaded && (
              // null
              <LoadingScreen2 />
              // <LoadingScreen pageReady={pageReady} setPageReady={setPageReady} />
            )}
          </div>
        </div>

        {transition.map(({ item, props, key }) => (
          item && (
            <animated.div className="postbuilder" id="postbuilder" style={props}>
                  <PostBuilder
                    postAdminsOnly={postAdminsOnly}
                    setPostAdminsOnly={setPostAdminsOnly}
                    postContent={postContent}
                    setPostContent={setPostContent}
                    addPostOpen={addPostOpen}
                    setAddPostOpen={setAddPostOpen}
                  />
              </animated.div>
          )))}
      </div>
    </AbsoluteWrapper>
  );
}
