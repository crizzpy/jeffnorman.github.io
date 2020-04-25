import React, {useContext, useEffect, useState} from 'react'
import { LoadingScreen2 } from './LoadingScreen2.js'
import { useSpring, animated, config, useTransition } from 'react-spring'
import axios from 'axios'
import {UserInfoContainer} from './UserInfoContainer'


export const UserInfo = ({userInfoReady, viewId, setViewId, showAboutMe, setShowAboutMe}) => {
    
  // const { userId, setUserId } = useContext(UserContext)
  // const { history, setHistory } = useContext(HistoryContext)
  // const { uniqueId, setUniqueId } = useContext(UniqueIdContext)
  // const { ready, setReady } = useContext(ReadyContext)



  const [infoReady, setInfoReady] = useState(false)

    return(
      <UserInfoContainer 
        userInfoReady={userInfoReady} 
        viewId={viewId} 
        showAboutMe={showAboutMe} 
        setShowAboutMe={setShowAboutMe} 
      />
    )
}