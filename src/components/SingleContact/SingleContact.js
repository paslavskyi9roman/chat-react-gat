import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import './SingleContact.css'

const SingleContact = props => {
  return (
    <div className="single-contact">
      <div className="single-Contact_group">
        <div className="user-icon">
          <UserIcon />
        </div>
        <div>
          <div className="contactName">{props.contactName}</div>
          <div className="last-message">{props.value}</div>
        </div>
      </div>
      {props.time}
    </div>
  )
}

export default SingleContact
