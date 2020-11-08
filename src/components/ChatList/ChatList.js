import React from 'react'
import SingleContact from '../SingleContact/SingleContact'
import Filter from '../Filter/Filter'
import LoggedUser from '../LoggedUser/LoggedUser'
import './ChatList.css'

let today = new Date()
let currentTime = today.getHours() + ':' + today.getMinutes()

const ChatList = () => {
  return (
    <div className="wrapper">
      <div className="сhatlist">
        <LoggedUser className="loggedUser" />
        <Filter />
      </div>
      <div className="contactContainer">
        <span>Chats</span>
        <SingleContact
          contactName="Oleg"
          lastMessage="hey yo!"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Roman"
          lastMessage="call me back!"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
        <SingleContact
          contactName="Taras"
          lastMessage="have you heard about ps5?"
          lastMessageDate={currentTime}
        />
      </div>
    </div>
  )
}
export default ChatList
