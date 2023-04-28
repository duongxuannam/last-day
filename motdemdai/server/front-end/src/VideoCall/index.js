import React from 'react'
import Header from './components/Header'
import ChatBox from './components/ChatBox'
import VideoBox from './components/VideoBox'

import './style.css'

export default function VideoCall() {
    return (
        <>
            <Header />
            <div className="main">
                <VideoBox />
                <ChatBox />
            </div>
        </>
    )
}