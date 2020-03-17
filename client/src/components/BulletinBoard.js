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
import {UserContext, PostsContext} from '../App'
import { AbsoluteWrapper } from './AbsoluteWrapper'
import { ScrollWindow } from './ScrollWindow'
import { Post } from './Post'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {LoadingScreen} from './LoadingScreen'

export const BulletinBoard = ({pageReady, setPageReady, addPostOpen, setAddPostOpen, activeUser, setActiveUser, postsLoaded, setPostsLoaded, setActiveComponent, setRenderUserProfile}) => {
  const { userId, setUserId } = useContext(UserContext)
  const { posts, setPosts } = useContext(PostsContext)

  // const fadein = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity: 1
  // });

  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  let delBtn = ""

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
        <div
          className="addPost"
          onClick={e => {
            e.preventDefault();
            setAddPostOpen(!addPostOpen);
            console.log(addPostOpen);
        }}>
          <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
        </div>
        {/* <ScrollWindow> */}
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
                    <Post key={post.id} post={post} delBtn={delBtn} setActiveComponent={setActiveComponent} setRenderUserProfile={setRenderUserProfile} />
                  );
                })}
              </ul>
            )}
            {!postsLoaded && (
              <LoadingScreen pageReady={pageReady} setPageReady={setPageReady} />
            )}
          </div>
        </div>
        {/* </ScrollWindow> */}
        {addPostOpen && (
          <div className="postbuilder">
            <div className="postbuilder_innercontainer">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitPost();
                }}
              >
                {/* <div
                      contentEditable="true"
                      className="post_compose"
                      value={postContent}
                      onChange={e => {
                          setPostContent(e.target.innerHtml)
                          console.log(postContent)
                        }
                      }/> */}
                <textarea
                  className="post_compose"
                  value={postContent}
                  onChange={e => {
                    setPostContent(e.target.value);
                    console.log(postContent);
                  }}
                />
                <div className="postbuilder_bottomwrapper">
                  <div className="bottomicon_wrap">
                    <FontAwesomeIcon icon="bold" class="bottomicon" />
                  </div>
                  <div className="bottomicon_wrap">
                    <FontAwesomeIcon icon="italic" class="bottomicon" />
                  </div>
                  <div className="bottomicon_wrap" id="send">
                    <FontAwesomeIcon
                      icon="paper-plane"
                      class="bottomicon"
                      onClick={e => {
                        e.preventDefault();
                        submitPost();
                      }}
                    />
                  </div>

                  <div
                    className={userId.isAdmin ? "bottomicon_wrap" : "hide"}
                    onClick={e => {
                      setPostAdminsOnly(!postAdminsOnly);
                    }}
                  >
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={postAdminsOnly ? true : false}
                      onChange={e => setPostAdminsOnly(!postAdminsOnly)}
                    />
                    <p>Admins only</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AbsoluteWrapper>
  );
}
