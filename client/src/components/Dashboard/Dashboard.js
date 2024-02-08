import React from 'react'
import Layout from '../Layout/Layout'
import './Dashboard.css'

function Dashboard() {
    
    // dynamic data to grab from database
    const subjects = [
        "Mathematics HL",
        "Biology HL",
        "English SL",
    ]
    const subjectsToShow = subjects.slice(0, 3);

    const schedules = [
        "Mathematics HL Exam",
        "English SL Comparative Essay",
    ]
    const schedulesToShow = schedules.slice(0,2);

  return (
    <Layout>
    <div className="dashboard__container">
        <div className="dashboard__welcome">
            <div className="dashboard__welcome__date">
                <p id="dashboard__welcome__date">current date</p>
            </div>
            <div className="dashboard__welcome__message">
                <p id="dashboard__welcome__title">Welcome back, NAME</p>
                <p id="dashboard__welcome__quote">You have everything in your hands to achieve your goal.</p>
                <p id="dashboard__welcome__quote">Let's make it happen!</p>
            </div>
           
        </div>
            
        <div className="dashboard__subjects">
            <div className="dashboard__subjects__text">
                <p>My Subjects</p>
                <a>See all</a>
            </div>
            <div className="dashboard__subjects__items">
                {subjectsToShow.map((subject, index) => (
                    <div key={index} className="dashboard__subject__item">
                        <p>{subject}</p>
                    </div>
                ))}
                <div className="dashboard__subject__item">Add Subject</div>
            </div>
        </div>
        <div className="dashboard__schedule">
            <div className="dashboard__schedule__text">
                <p>My Schedule</p>
                <a>See all</a>
            </div>
            <div className="dashboard__schedule__items">
                    {schedulesToShow.map((schedule, index) => (
                    <div key={index} className="dashboard__schedule__item">
                        <p id="dashboard__schedule__topic">{schedule}</p>
                        <p id="dashboard__schedule__date">date</p>
                    </div>
                    ))}
                    <div className="dashboard__schedule__item" id="dashboard__schedule__add">Add Schedule</div>        
            </div>
        </div>
        <div className="dashboard__disclaimer">IB® is a registered trademark of the International Baccalaureate™. The International Baccalaureate does not endorse nor is it affiliated in any way with IB Prep or any content of this website.</div>
    </div>
    </Layout>
  )
}

export default Dashboard;