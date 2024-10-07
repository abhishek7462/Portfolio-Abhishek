import React, { useEffect, useRef, useState } from "react";
import pdf from "/pdf/Abhishek.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Abhishek Meena",
        "I am a Full-Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
            onError={() => setPdfError(true)}
            aria-label="Download Resume"
          >
            {pdfError ? "Unable to download resume" : "Download Resume"}
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            {imageError ? (
              <div
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Image failed to load.
              </div>
            ) : (
              <img
                src={`/assets/${hero.imgSrc}`}
                alt={`Profile picture of Abhishek Meena`}
                onError={() => setImageError(true)}
                aria-label="Profile Image"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
