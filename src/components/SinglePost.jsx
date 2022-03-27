import React from 'react'
import axios from 'axios'
import '../assets/styles/components/SinglePost.css'


function SinglePost () {
  const id = (window.location.href).split('/').slice(-1).toString()
  const [post, setPost] = React.useState({})

  React.useEffect(()=> {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://api-blog-express.herokuapp.com/api/v1/article/${id}`
      )
      setPost(res.data.data)
    }

    fetchPost()
  }, [])
  
  return (
    <div className='singlePost'>
      <img
        className='singlePostImg'
        src={post.image}
        alt='NodeJS'
      />
      <div className='singlePostWrapper'>
        <h1 className='singlePostTitle'>{post.name}</h1>
        <p className='singlePostContent'>
          {post.content}
        </p>
      </div>
    </div>
  )
}

export default SinglePost
