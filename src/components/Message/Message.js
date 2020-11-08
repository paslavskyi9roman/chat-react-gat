import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import './Message.css'

const Message = props => {
  return (
    <div className="message">
      <div className="message-body">
        <UserIcon />
        <div>
          <div className="message-text text">{props.value}</div>
        </div>
      </div>
      <div className="message-time">{props.time}</div>
    </div>
  )
}

export default Message
