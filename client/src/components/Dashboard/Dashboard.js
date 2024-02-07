import React from 'react'
import Layout from '../Layout/Layout'
import './Dashboard.css'

function Dashboard() {
  return (
    <Layout>
    <div className="dashboard__container">
        <div className="dashboard__welcome">
            <div className="dashboard__welcome__date">
                <p>current date</p>
            </div>
            <div className="dashboard__welcome__message">
                <p>Welcome back, NAME</p>
                <p>You have everything in your hands to achieve your goal.</p>
                <p>Let's make it happen!</p>
            </div>
           
        </div>
            
        <div className="dashboard__subjects">
            <div className="dashboard__subjects__text">
                <p>My Subjects</p>
                <a>See all</a>
            </div>
        </div>
        <div className="dashboard__schedule">
            <div className="dashboard__schedule__text">
                <p>My Schedule</p>
                <a>See all</a>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default Dashboard;