import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home=() =>{
  return (
    <div className='home'>
        <header>
        <h1>Welcome to My React Project</h1>
          <p>Explore various styling techniques and design elements implemented in this portfolio.</p>
              <button className="learn-more" onClick={() => alert("Let's dive into the details!")}>Learn More</button>
        </header>
        
            <ul>
          <li><Link to="/details">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
    </div>
  )
}
export default Home
