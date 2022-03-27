import React from 'react'
import Post from './Post'
import '../assets/styles/components/Posts.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = new useState([])

  useEffect(() => {
    const fetchedPost = async () => {
      const res = await axios.get(
        'https://api-blog-express.herokuapp.com/api/v1/article'
      )
      setPosts(res.data.data)
    }

    fetchedPost()
  }, [setPosts])
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Posts
