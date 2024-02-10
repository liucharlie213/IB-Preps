import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import './Subjects.css'

function Subjects() {

  // dynamic data to grab from database
  const subjects = [
    "Mathematics HL",
    "Biology HL",
    "English SL",
  ]
  const subjectsToShow = subjects.slice(0, 3);

  //dynamic data to grab from database
  const subjectContent = [
    "Numbers and Algebra",
    "Functions"
  ]

  return (
    <Layout>
    <div className="subjects__container">
      <div className="subjects__subjects">
        <div className="subjects__subjects__text">
           <p>My Subjects</p>
        </div>
        <div className="subjects__subjects__items">
          {subjectsToShow.map((subject, index) => (
                        <div key={index} className="subjects__subjects__item">
                            <p>{subject}</p>
                        </div>
                    ))}
          <div className="subjects__subjects__item" id="subjects__subjects__add">Add Subject</div>
        </div>
      </div>
    
      <div className="subjects__modes">
        <div className="subjects__mode">
          {/* <img src={}></img> */}
          <p>Content</p>
        </div> 
        <div className="subjects__mode">
          {/* <img src={}></img> */}
          <p>Exploration</p>  
        </div>
        <div className="subjects__mode">
          {/* <img src={}></img> */}
          <p>Mock Exams</p>
        </div>
      </div>
      {/* <div className="subejcts__milestones"></div> */}
    </div>
    </Layout>
  )
}

export default Subjects