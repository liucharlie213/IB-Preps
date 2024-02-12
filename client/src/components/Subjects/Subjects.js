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

  const [activeContent, setActiveContent] = useState(false);
  // dynamic data to grab from database
  const contentTopics = [
    "Algebra",
    "Calculus"
  ]

  const [activeExam, setActiveExam] = useState(false);
  // dynamic data to grab from database
  const examSet = [
    "Mock Exam 1",
    "Mock Exam 2"
  ]

  const handleClickContent = () => {
    setActiveContent(current => !current);
    setActiveExam(false);
    // method to grab data from database and set the contentTopics array
  }

  const handleClickExam = () => {
    setActiveExam(current => !current);
    setActiveContent(false);
    // method to grab data from database and set the examSet array
  }


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
        <div onClick={handleClickContent} className="subjects__mode" id="subjects__mode__content">
          {/* <img src={}></img> */}
          <p>Content</p>
        </div> 
        <div className="subjects__mode">
          {/* <img src={}></img> */}
          <p>Exploration</p>  
        </div>
        <div onClick={handleClickExam} className="subjects__mode" id="subjects__mode__exams">
          {/* <img src={}></img> */}
          <p>Mock Exams</p>
        </div>
      </div>
      {/* <div className="subejcts__milestones"></div> */}
    </div>

    {activeContent && (
      <div className="subjects__container">
        <div className="subjects__content__topics">
          {contentTopics.map((topic, index) => (
            <div key={index} className="subjects__content__topic">
              <div className="subjects__content__topic__progress">
                {topic}
                {/* <span></span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {activeExam && (
      <div className="subjects__container">
        <div className="subjects__exams__mocks">
         {examSet.map((topic, index) => (
           <div key={index} className="subjects__exams__mock">
            <div className="subjects__exams__topic__progress">
              {topic}
              {/* <span className="subjects__content__topic__progress"></span> */}
            </div>
          </div>
         ))}
        </div>
      </div>
       
    )}
    </Layout>
  )
}

export default Subjects