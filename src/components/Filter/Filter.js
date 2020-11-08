import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Filter.css'

const Filter = () => {
  return (
    <div className="search-box">
      <a className="search-btn" href="#">
        <FontAwesomeIcon icon={faSearch} />
      </a>
      <input
        className="search-txt"
        type="text"
        name="search-txt"
        placeholder="Search or start new chat"
      />
    </div>
  )
}

export default Filter
