// Home.jsx

import React from "react";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="column-left">
            <h1>Welcome to TourSafe!!!</h1>
            <p>
              Unlock Your Journey<br></br>Seamless Booking <br></br>
              Unforgettable Adventures
            </p>
            <div className="buttons">
              <a href="/login">
                <button className="btn">Login</button>
              </a>

              <a href="/signup">
                <button className="btn">SignUp</button>
              </a>
            </div>
          </div>
          <div className="column-right">
            <img
              src="/img2.svg" // Use the relative path from the public directory
              alt="illustration"
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
