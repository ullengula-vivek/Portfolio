import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className='button-anim' to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className='button-anim' to="api/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="resume-button">
        <a href="Vivek_Ullengula_Resume.docx" download>
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header;