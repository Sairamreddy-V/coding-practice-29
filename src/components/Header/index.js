// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <ul className="ul-container">
      <Link to="/">
        <li className="home-link">Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  )
}

export default Header
