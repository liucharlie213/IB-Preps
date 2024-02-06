import React from 'react'
import './Header.css'

function Header() {
  return (
    // <Header>
      <div className="header__container">
          <div className="header__logo">
            {/* <img src={}></img> */}
            <p>IB PREPS</p>
          </div>
          <div className="header__search__and__profile">
            <div className="header__search">
              <p>SEARCH BAR</p>
            </div>
            <div className="header__profile">
            {/* <img src={}></img> */}
            <div className="header__profile__info">
              <p>First Last</p>
              <p>Grade 11</p>
            </div>
          </div>
        </div>
          
      </div>
    // {/* </Header> */}
    
  )
}

export default Header