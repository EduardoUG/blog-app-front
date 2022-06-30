import React from 'react'
import '../assets/styles/components/TopBar.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBarTitles'>
        <span className='topBarTitleSm'>ServiceNow & NodeJS</span>
        <span className='topBarTitleLg'>Blog</span>
      </div>
      <img className='topBarImg' src='https://images.unsplash.com/photo-1552845108-5f775a2ccb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D' alt='blog' />
    </div>
  )
}

export default TopBar