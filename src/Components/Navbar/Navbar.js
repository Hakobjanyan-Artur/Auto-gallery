import {React} from "react"
import {NavLink, useNavigate} from 'react-router-dom'
import './Nabar.css'
function Navbar({search, setSearch, styleFix}) {
    const navigate = useNavigate()
    return (
        <div style={{
          width: '100%',
          background: '#222224',
          position: styleFix && 'fixed'
        }}>
        <div className="container">
      <header>
        <nav>
          <ul>
            <li><NavLink className={({isActive}) => isActive ? 'act' : ''} to="/" end><span className="li">Home</span></NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'act' : ''} to="/about"><span className="li">About</span></NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'act' : ''} to="/posts"><span className="li">Posts</span></NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'act' : ''} to="/chat"><span className="li">Chat</span></NavLink></li>
          </ul>
        </nav>
        <div className="logoBtn">
        <button className="navBtnBack" onClick={() => {navigate(-1)}}>Back</button>
      <div className="logo">
        <h1>C I</h1>
        <p>Cars Info</p>
      </div>
      <button className="navBtnNext" onClick={() =>{navigate(1)}}>Next</button>
      </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="navInput" type="text" placeholder="Search"/>
    </header>
    </div>
    <div className="navbarHr"></div>
        </div>
    )
}

export default Navbar