import React, {useContext} from 'react'
import { GlobalContext } from '../App'
import uuid from 'uuid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useSpring, animated, config, useTransition } from 'react-spring'



export const PostBuilder = ({postAdminsOnly, setPostAdminsOnly, postContent, setPostContent, addPostOpen, setAddPostOpen}) => {
    
    const { userId, setUserId, posts, setPosts } = useContext(GlobalContext)
    
    

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
                .then(res => {
                    console.log(res.data)
                    setPosts([res.data, ...posts])
                })
                .catch(err => console.log(err))
            setPostContent("");
            setPostAdminsOnly(false);
            setAddPostOpen(false);
        }
        else {
            return
        }
    }

    return(
        <React.Fragment>
            <div className="postbuilder_innercontainer">
                <form
                onSubmit={e => {
                    e.preventDefault();
                    submitPost();
                }}>
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
                    }}>
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
          </React.Fragment>
    )
}
