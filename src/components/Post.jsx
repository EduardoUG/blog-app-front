import React from 'react'
import '../assets/styles/components/Post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='post'>
      <Link
        to={`/post/${post._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img className='postImg' src={post.image} alt='NodeJS' />
        <div className='postInfo'>
          <div className='postName'>{post.name}</div>
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
