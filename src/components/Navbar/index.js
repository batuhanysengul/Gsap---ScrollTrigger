import React, {useRef, useEffect} from "react";
import "./style.css";
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
 

  useEffect(() => {
    gsap.from(navRef.current, {
      duration: 1,
      opacity: 0,
      y: -100,
    })
  
  }, []);

  return (
    <div className="nav-container" ref={navRef}>
      <div className="nav-logo">
        <h1>Arc</h1>
      </div>

      <div className="contact">
        <p>hello@bys.com</p>
        <p>0553 069 09 68</p>
      </div>

      <div className="nav-links">
        <a href="#about">Projects</a>
        <a href="#projects">About</a>
        <a href="#contact">Contact</a>
      </div>

    
    </div>
  );
};

export default Navbar;
