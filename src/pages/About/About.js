import React from 'react'
import "./About.css"
function About() {
  return (
    <>
       <div className="about-page">
      <div className="about-container">
        <div className="about-image">
          <img
            src="images/iam.jpg" 
            alt="Car Rental"
            className="about-image-img"
          />
        </div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>Welcome to our car rental service! We provide luxury, reliable, and affordable cars to make your journeys memorable. Whether you're going on a business trip, a family vacation, or an adventurous road trip, we've got the perfect vehicle for you.</p>
          
          <h3>Our Fleet</h3>
          <p>We offer a wide range of cars, including compact cars, SUVs, and luxury vehicles. All our cars are well-maintained, clean, and equipped with modern features for a smooth ride.</p>
          
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Affordable prices</li>
            <li>24/7 customer support</li>
            <li>Flexible rental options</li>
            <li>Wide variety of vehicles</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
