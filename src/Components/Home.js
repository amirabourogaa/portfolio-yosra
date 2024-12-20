import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home=() =>{
  return (
    <body className='home'>
    <nav>
        <ul className="navigation">
          <li><Link to="/details">About This Project</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    
      <h1>Welcome to My React Project</h1>
      <p>Explore various styling techniques and design elements implemented in this portfolio.</p>
      <button className="learn-more" onClick={() => alert('Let’s dive into the details!')}>Learn More</button>
   
    
    </body>
    
  )
}
export default Home
