import React from 'react'
import './Header.css'

function Header() {
  return (
    // <Header>
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo">
            {/* <img src={}></img> */}
            <p id="header__name">IB PREPS</p>
          </div>
        
          <div className="header__profile">
          {/* <img src={}></img> */}
          <div className="header__profile__info">
            <p id="header__profile__name">First Last</p>
            <p id="header__profile__grade">Grade 11</p>
          </div>
        </div>
          
        </div>
          
      </div>
    // {/* </Header> */}
    
  )
}

export default Header