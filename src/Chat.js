import React from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';

function Chat() {
  return (
    <div className="chat">

      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last active at...</p>
        </div>
        <div className="chat_headerRight">
          <SearchIcon />
          <AttachFile />
          <MoreVertIcon />
        </div>

      </div>

      <div className="chat_body">{/*Could make component*/}
        <p className="chat_message">
          <span className="chat_name">Allan</span>
         This is a message

          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>

        </p>
        <p className="chat_receiver">
          <span className="chat_name">Allan</span>
         This is a message

          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>

        </p>
      </div>
    </div>
  )
}

export default Chat
