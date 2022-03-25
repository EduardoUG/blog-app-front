import React from 'react'
import '../assets/styles/components/Post.css'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className='post'>
      <Link
        to='/post/122424525'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img
          className='postImg'
          src='https://img.redbull.com/images/c_crop,w_6720,h_3360,x_0,y_757,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/07/17/4f3fb5c2-8f05-48a9-9720-f58d934752c2/music-collection'
          alt='NodeJS'
        />
        <div className='postInfo'>
          <div className='postName'>NodeJS server, Up and running</div>
          <div className='postDescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            viverra quam, non blandit erat
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
