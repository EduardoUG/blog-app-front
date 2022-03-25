import React from 'react'
import TopBar from '../components/TopBar'
import Posts from '../components/Posts'
import SideBar from '../components/SideBar'
import '../assets/styles/containers/Home.css'

const Home = () => {
  return (
    <>
      <TopBar />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home
