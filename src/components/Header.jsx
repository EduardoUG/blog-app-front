import React from 'react'
import '../assets/styles/components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='menu'>
        <ul>
          <li className='menuItem'>Portfolio</li>
          <li className='menuItem'>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog
            </Link>
          </li>
          <li className='menuItem'>
            <Link
              to='/write'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Write
            </Link>
          </li>
          {/* <li className='menuItem'>Contact</li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
