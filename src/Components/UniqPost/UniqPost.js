import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './UniqPost.css'

function UniqPost({posts}) {
  const [currentPost, setCurrentPost] = useState({}) 
   const {id} = useParams()
   const navigate = useNavigate()
   useEffect(() => {
    setCurrentPost(posts.find(post => post.id === id))
   },[])
   return (
    <div className="container">
      <div className='divUniq'>
          <h1>{currentPost.title}</h1>
          <img src={currentPost.img} alt=""/>
          <p>{currentPost.aboutAll}</p>
          <button className='uniqBtn' onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  )
}

export default UniqPost