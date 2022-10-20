import React, {useRef, useEffect} from "react";
import gsap from 'gsap';
import "./style.css";

const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1.5,
      opacity: 0,
      x: -100,
    })
    gsap.from(imgRef.current, {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 1,
    })

  }, []);

 
  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-top">
        <h1 className="title">My taste in cars.</h1>

        <div className="hero-contact">
          <p className="city">Ankara</p>
          <p className="date">2022</p>
        </div>

        <div className="hero-name">
          <p className="name">Batuhan Y.</p>
          <p className="name">Sengul</p>
        </div>
      </div>

      <div className="hero-bottom" ref={imgRef}>
        <div className="bottom-left">
        <img src="https://images.unsplash.com/photo-1597607242521-9b5dccd37438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>

        <div className="bottom-right">
        <img src="https://cdn.discordapp.com/attachments/1015548474856591402/1032592122701942825/274533345_4634267670033719_6507469439267119448_n.jpg" alt="" />
          <div className="bottom-text">
            as claimed by the belief, <br />
            not only simple but <br />
            elegant geometric shapes <br />
            were invented based on <br />
            the deliberate purpose of <br />
            a car or an object.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
