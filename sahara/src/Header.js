import React from 'react';
import './Header.css'

function Header() {
    return (
      <div className="Header">
        <div className="header_logo">SAHARA</div>
        <div className="Header_search">
          <input className="header_search_input" type="text" />

          <div className="header_nav">
            <div className="header-option"></div>
            <div className="header-option"></div>
            <div className="header-option"></div>
          </div>
        </div>
      </div>
    );
}

export default Header
