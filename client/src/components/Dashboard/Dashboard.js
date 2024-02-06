import React from 'react'
import './Dashboard.css'
function Dashboard() {
  return (
    <div className="dashboard__container">
        <div className="dashboard__welcome"></div>
            <p>current date</p>
            <p>Welcome back, NAME</p>
            <p>You have everything in your hands to achieve your goal.</p>
            <p>Let's make it happen!</p>
        <div className="dashboard__subjects">
            <div className="dashboard__subjects__text">
                <p>My Subjects</p>
                <p>See all</p>
            </div>
        </div>
        <div className="dashboard__schedule">
            <div className="dashboard__schedule__text">
                <p>My Schedule</p>
                <p>See all</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard