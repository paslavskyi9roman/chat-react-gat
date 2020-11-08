import React from 'react'
import Message from '../Message/Message'
import InputMessage from '../InputMessage/InputMessage'
import SingleContact from '../SingleContact/SingleContact'
import { messages } from '../../../static/data/data'
import './Chat.css'

const Chat = () => {
  return (
    <div className="сhat">
      <div className="chat-top">
        <SingleContact contactName="John" />
      </div>

      <div className="messeges">
        {messages.map(message => {
          return (
            <Message
              value={message.value}
              time={message.created_at}
              key={message.id}
            />
          )
        })}
      </div>

      <InputMessage />
    </div>
  )
}

export default Chat
