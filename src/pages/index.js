import React from 'react'
import ChatList from '../components/ChatList/ChatList'
import Chat from '../components/Chat/Chat'
import '../styles/global.css'

const Home = () => {
  return (
    <section>
      <ChatList />
      <Chat />
    </section>
  )
}

export default Home
