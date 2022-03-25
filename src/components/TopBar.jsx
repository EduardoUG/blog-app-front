import React from 'react'
import '../assets/styles/components/TopBar.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBarTitles'>
        <span className='topBarTitleSm'>ServiceNow & NodeJS</span>
        <span className='topBarTitleLg'>Blog</span>
      </div>
      <img className='topBarImg' src='https://www.iucn.org/sites/dev/files/styles/slide_image/public/content/slide/blue.jpg?itok=Q3sP5aF7' alt='blog' />
    </div>
  )
}

export default TopBar