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
import { faTimesCircle, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import {UserContext, PostsContext} from '../App'
import { AbsoluteWrapper } from './AbsoluteWrapper'

export const BulletinBoard = ({addPostOpen, setAddPostOpen, activeUser, setActiveUser, postsLoaded, setPostsLoaded, confirmPostDel, setConfirmPostDel}) => {
  const { userId, setUserId } = useContext(UserContext)
  const { posts, setPosts } = useContext(PostsContext)

  // const fadein = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity: 1
  // });

  // const slideIn = useTransition({
  //   from: {
  //     transform: "translateX(1200px)"
  //   },
  //   enter: {
  //     transform: "translateX(0px)"
  //   },
  //   leave: {
  //     transform: "translateX(-1200px)"
  //   }
  // })
  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  let delBtn = ""


  const submitPost = () => {
    console.log('submit post')
    console.log(postContent)
    if (postContent) {
      // console.log(postContent);
      // console.log(postAdminsOnly);
      console.log(postAdminsOnly)
      const data = {
        userId: userId._id,
        userFirstName: userId.firstName,
        userLastName: userId.lastName,
        id: uuid.v4(),
        adminsOnly: postAdminsOnly,
        content: postContent
      }
      axios.post('/posts/add', data)
      .then(res=> {
        console.log(res.data)
        setPosts([...posts, res.data])
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

  const delPost = (id) => {
    console.log('post delete try')

    axios.delete('/posts/delete', {data: { postId: id }})
      .then(res => {
        console.log(res.data)
        setPosts([...posts.filter(post => post.id !== res.data)])

      })
      .catch(err => console.log(err))
  }
  

  return (
    <AbsoluteWrapper>
          <div>
            <div
              className="addPost"
              onClick={e => {
                e.preventDefault();
                setAddPostOpen(!addPostOpen);
            }}>
              <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
            </div>
            <div className="posts_window">
              <div className="posts_innerwrap">
                {postsLoaded && (
                  <ul>
                    {console.log(posts)}
                    
                    {posts.map(post => {
                      if (userId._id == post.userId) {
                        delBtn = "delbutton"
                      } else {
                        delBtn = "hide"
                      }
                      return (
                        <div className="renderedpost_wrapper">
                          <div className="postText">
                            {post.content}
                          </div>
                          <div className={delBtn}>
                            <FontAwesomeIcon
                              icon="times-circle"
                              class="delBtn"
                              onClick={e => {
                                e.preventDefault();
                                console.log(post.id)
                                delPost(post.id)
                              }}
                            />
                          </div>
                        </div>
                      )       
                      }
                    )}
                  </ul>
                )}
                {!postsLoaded && <div className="test">Loading</div>}
              </div>
            </div>
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
                          setPostContent(e.target.value)
                          console.log(postContent)
                        }} />
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
                          onClick={(e) => {
                            e.preventDefault()
                            submitPost()
                          }}
                        />
                      </div>

                      <div
                        className="bottomicon_wrap"
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
