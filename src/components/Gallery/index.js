import React, { useEffect } from "react";
import "./style.css";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });

      tl.from(container, {
        duration: 1.5,
        xPercent: -100,
        ease: Power2.out,
      });

      tl.from(image, {
        duration: 1.5,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592130494976040/311921209_2415402091947786_2070781457884290102_n.jpg?width=536&height=670"
            alt="random"
          />
        </div>
      </div>
      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592123297529886/285654081_771985477518658_8084222060050000553_n.jpg?width=536&height=670"
            alt="random"
          />
        </div>
      </div>

      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592123582746645/287485786_571942771173668_350450206717451132_n.jpg?width=615&height=670"
            alt="random"
          />
        </div>
      </div>


      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592130004234240/310992936_945080413115835_6376652952755820469_n.jpg?width=670&height=670"
            alt="random"
          />
        </div>
      </div>


      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592123930890270/290195419_1092904324976123_9016544317739157278_n.jpg?width=536&height=670"
            alt="random"
          />
        </div>
      </div>


      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592124471939082/301837523_640280383984590_3432725290875811971_n.jpg?width=670&height=670"
            alt="random"
          />
        </div>
      </div>


      <div className="gallery-item">
        <div className="reveal">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/1015548474856591402/1032592124765556756/305372419_156897530282893_8311450006754631577_n.jpg?width=536&height=670"
            alt="random"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
