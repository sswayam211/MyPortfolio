import React, { useState, useEffect } from 'react';
import my1 from '../Images/my1.jpg';

const Home = () => {
  const Name = "SWAYAM SINGH";  // Full name to animate letter by letter
  const [animatedName, setAnimatedName] = useState('');  // State to hold animated name
  const [index, setIndex] = useState(0);  // State to track current index

  useEffect(() => {
    if (index < Name.length) {
      const timeout = setTimeout(() => {
        setAnimatedName((prev) => prev + Name[index]);  // Add next letter to animatedName
        setIndex(index + 1);  // Increment index
      }, 100);  // Adjust delay for animation speed

      // Clean up the timeout when component unmounts or updates
      return () => clearTimeout(timeout);
    }
  }, [index, Name]);  // Re-run effect every time index changes

  return (
    <div className="home">
      <div className='container'>
        <div className="col-1">
          <div style={{width:"80%",margin : "auto"}}> 
            <h1>Hi, I am <br />
              <span style={{ color: "yellow", wordWrap: 'break-word' }}>{animatedName}</span>
            </h1>
            <br />
            <p >Web Developer <br />Welcome to My Protfolio.</p>
          </div>
        </div>
        <div className="col-2">
          <img src={my1} alt="myImage" />
        </div>
      </div>
    </div>
  );
}

export default Home;
