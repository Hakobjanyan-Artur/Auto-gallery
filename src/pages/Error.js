import {React, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './Error.css'

function Error() {
  const fortun = useRef(null)
  const navigate = useNavigate()
  const rotClick = () => {
    const random = Math.floor(Math.random() * 10+ 1)
    fortun.current.classList.add(`variant-${random}`)

    switch (random) {
      case 1:
       setTimeout(() => {
        navigate(`/posts/2`)
       }, 4000)
      break;
      case 2:
       setTimeout(() => {
        navigate(`/posts/3`)
       }, 4000)
      break;
      case 3:
         setTimeout(() => {
          navigate(`/posts/4`)
         }, 4000)
      break;
      case 4:
           setTimeout(() => {
            navigate(`/posts/5`)
           }, 4000)
      break;
      case 5:
         setTimeout(() => {
          navigate(`/posts/6`)
         }, 4000)
      break;
      case 6:
         setTimeout(() => {
          navigate(`/posts/7`)
         }, 4000)
      break;
      case 7:
         setTimeout(() => {
          navigate(`/posts/9`)
         }, 4000)
      break;
      case 8:
         setTimeout(() => {
          navigate(`/posts/13`)
         }, 4000)
      break;
      case 9:
         setTimeout(() => {
          navigate(`/posts/14`)
         }, 4000)
      break;
      case 10:
         setTimeout(() => {
          navigate(`/posts/1`)
         }, 4000)
      break;
       default: 
       navigate(`/posts`)
    }
  }
  return (
    <>
    <div className="box">
    <div className="errorText">
        <img src={`https://pbs.twimg.com/media/EZdLpohWsAIETcw.jpg`} alt="" />
        <p>spin the fortune and choose a random car</p>
        </div>
      <div className="content">
      <div className="choice"></div>
        <div ref={fortun} className="fortune">
          <div className="click" onClick={rotClick}>Click</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Error