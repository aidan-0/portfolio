import React, {useEffect, useState} from 'react';
// import Header from './Header';
import Content from './Content';
import Navbar from './Navbar';

export default function App() {
    const [y, setY] = useState(0);
  
    const handleMouseMove = (e) => {
      setY(e.clientY);
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);



  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', e.clientX + 'px');
      document.body.style.setProperty('--mouse-y', e.clientY + 'px');
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);




  return (
    <div className='page-content'>
      <div className="follower--left" style={{ top: y }}></div>
      <div className="follower--right" style={{ top: y }}></div>
      {/* <Header /> */}
      <div className='main-content'>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
