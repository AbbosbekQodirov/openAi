import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-wrap justify-between navbar container text-right">
      <div className="logo">
        <Link to="/">
          Abbosbek's <span>AI</span>
        </Link>
      </div>
      <div className="links">
        <NavLink to="/">ChatGpt</NavLink>
        <NavLink to="/midjourney">MidJourney</NavLink>
      </div>
    </div>
  );
}

export default Navbar