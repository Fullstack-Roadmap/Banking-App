import React from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import DebitCard from "./DebitCard";
import HeroImage from "./assets/Frame 19.png";

const Hero = () => {
  return (
    <>
      <nav className="flex flex-col justify-between p-3">
        <NavBar />
      </nav>
      <section className="flex justify-between gap-6">
        <div>
          <header>Discover the Perfect</header>
          <p>Discover the power</p>
          <Button />
          <div className="flex justify-between items-center">
            <img src={HeroImage} alt="image" className="z-2 h-8" />
            <div className="flex flex-col justify-center">
              <header>10.2k+</header>
              <p>Active users</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <DebitCard btnStyle="button-green" />
          <DebitCard btnStyle="button-backdrop" />
          <span className="absolute -right-6 h-48 rounded-full -translate-y-28 w-48 bg-green-400"></span>
        </div>
      </section>
    </>
  );
};

export default Hero;
