import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/home'>Home</Link>
            <Link to='/sign'>Sign</Link>
            <Link to='/contact'>Contact</Link>
            {/* <a href="/home">Home</a> ||
            <a href="/sign">Sign in</a> ||
            <a href="/contact">Contact</a>  */}
        </li>
      </ul>
    </div>
  )
}

export default Menu
