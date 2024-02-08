import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__items">
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>Dashboard</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>My Subjects</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>Theory of Knowledge</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>Extended Essay</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>IB Diploma</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>Live Sessions</p>
        </div>
        <div className="sidebar__item">
          {/* <img src={}></img> */}
          <p>Ask a Tutor</p>
        </div>
      </div>
      <div className="sidebar__item">
        {/* <img src={}></img> */}
        <p>Log out</p>
      </div>
      

    </div>
  )
}

export default Sidebar