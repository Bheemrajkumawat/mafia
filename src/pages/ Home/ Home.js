import React from "react";
import "./Home.css";
import CarCard from "../../components/CarCard/CarCard";

const Home = () => {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          <img src="/log/mahindra-logo.png" alt="Mahindra Logo" />
          <img src="/log/tata-logo.png" alt="Tata Logo" />
          <img src="/log/ford-logo-2017-640.png" alt="Ford Logo" />
          <img src="/log/jeep-logo-1993-640.png" alt="Jeep Logo" />
          <img src="/log/lexus-logo.png" alt="Lexus Logo" />
          <img src="/log/mitsubishi-logo.png" alt="Mitsubishi Logo" />
          <img src="/log/mg-logo.png" alt="MG Logo" />
          <img src="/log/toyota-logo.png" alt="Toyota Logo" />
        </div>
      </div>

      <CarCard/>
    </>
  );
};

export default Home;
