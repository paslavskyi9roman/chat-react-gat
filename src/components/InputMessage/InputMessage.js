import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './InputMessage.css'

const InputMessage = () => {
  return (
    <div className="input-message">
      <input
        className="input-txt"
        type="text"
        name="input-message"
        placeholder="Type your message"
      />
      <a className="input-btn" href="#">
        <FontAwesomeIcon icon={faPaperPlane} />
      </a>
    </div>
  )
}

export default InputMessage
