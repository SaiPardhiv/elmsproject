import React, { useEffect, useState } from 'react';
import homepic from './homepic.png';

function EmployeeLeaveManagementSystem() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const detailsElement = document.getElementById('details');
      if (!scrolled && isInViewport(detailsElement)) {
        detailsElement.style.opacity = 1;
        detailsElement.style.transform = "translateY(0)";
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleHover = () => {
    const detailsElement = document.getElementById('details');
    detailsElement.style.transform = "scale(1.2)";
  };

  const handleHoverOut = () => {
    const detailsElement = document.getElementById('details');
    detailsElement.style.transform = "scale(1)";
  };

  return (
    <div
      style={{
        backgroundImage: `url(${homepic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        marginTop: '0vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center content vertically
        padding: '100px',
        color: 'black',
        textAlign: 'center'
      }}
    >
      
      <div
        id="details"
        style={{
          textAlign: 'center',
          fontSize: '1.2em',
          marginTop: '50vh',
          padding: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          color: '#333',
          borderRadius: '20px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          opacity: 40,
          transform: 'translateY(30px)',
          transition: 'opacity 60s, transform 1s',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <p>Welcome to the Leave management system</p>
        <p>The system aims to ensure accurate leave tracking, improve leave planning, and enhance the overall efficiency of managing employee leave.</p>
      </div>
    </div>
  );
}

export default EmployeeLeaveManagementSystem;
