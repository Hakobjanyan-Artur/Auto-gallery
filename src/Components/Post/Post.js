import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'

function Post({title, img, about, id}) {
    const navigate = useNavigate()
  return (
    <div className='postImg'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{about}</p>
        <button className='postBtn' onClick={() => navigate(`/posts/${id}`)}>Read more</button>
    </div>
  )
}

export default Post