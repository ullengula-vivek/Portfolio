// client/src/components/Welcome.js
import React from 'react';
import Slideshow from './SildeShow';

function Welcome() {
  return (
    <div className="welcome">
      <Slideshow/>
      <div className="welcome-content">
        <h1 className='portfolio-heading'>🚀 Welcome to My Digital Playground! 👋</h1>
      <div className='welcome-container'>
      <p  className='welcome-text'>I'm Vivek Ullengula, a web developer 🌐 with a passion for crafting stunning online experiences. 
          💻 Explore my creations, from sleek interfaces to powerful apps. 
          🎨 Let's turn ideas into captivating realities together. 
          🤝 Get inspired, collaborate, and join me on this web adventure! 
          🌟Feel free to adapt and use this short welcome note on your portfolio website to make a memorable first impression.
          </p>
      </div>
        
      </div>
    </div>
  );
}

export default Welcome;
