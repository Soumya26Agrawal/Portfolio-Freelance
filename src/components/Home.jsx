import React, { useEffect, useRef } from "react";
import AOS from "aos";
import Typed from "typed.js";
function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration: 1s
    const typed = new Typed(typedRef.current, {
      strings: [
        "Data Analyst",
        "Problem Solver",
        "Strategist",
        "Tech Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <img
          src="assets\img\pexels-alesiakozik-6781008.jpg"
          alt=""
          data-aos="fade-in"
          className=""
          style={{ filter: "brightness(0.4)" }}
        />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Shikhar Agrawal</h2>
          <p>
            I'm a {"   "}
            <span
              ref={typedRef}
              className="typed"
              //   data-typed-items="Data Analyst, Problem Solver, Strategist, Tech Enthusiast"
            >
              Designer
            </span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
