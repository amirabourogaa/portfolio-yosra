import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Home=() =>{
    const [email,setEmail]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email) {
            localStorage.setItem('userEmail', email);
            setEmail('');
          } else {
            alert('Please enter a valid email')
    }
}

  return (
 <body className='home'>
    <nav>
        <ul className="navigation">
          <li><Link to="/details">About This Project</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
 <main>
      <h1>Welcome to My React Project</h1>
      <p>Explore various styling techniques and design elements implemented in this portfolio.</p>
      <button className="learn-more" onClick={() => alert('Let’s dive into the details!')}>Learn More</button>
 </main>
 <footer className='footer'>
    <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter your email address' value={email}/>
            <button type="submit" className='submit'>Sign Up</button>
    </form>
    <section className="social-links">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin size={30} />
            </a>
          </div>
          <section className="about">
          <h3>More Info</h3>
          <p>
            This website is a portfolio showcasing various web development and design techniques.
            The goal is to create an interactive experience while demonstrating technical skills.
          </p>
        </section>
        </section>

 </footer>
    
    </body>
    
  )
}
export default Home
