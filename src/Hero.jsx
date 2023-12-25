import NavBar from "./NavBar";
import Button from "./Button";
import DebitCard from "./DebitCard";
import HeroImage from "./assets/Frame 19.png";

// Hero section
const Hero = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col relative text-white">
        <div className="container mx-auto">
          <NavBar />
        </div>
        <section className="flex flex-col justify-center items-center gap-10 ">
          <div>
            <header>Discover the Perfect...</header>
            <p>Discover the power...</p>
            <Button />
            <div className="flex justify-center items-center">
              <img src={HeroImage} alt="image" className="z-2 h-8" />
              <div className="flex flex-col justify-center items-center">
                <header>10.2k+</header>
                <p>Active users...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-6 h-auto">
            <div className="flex gap-6">
              <DebitCard cardStyle="card-backdrop" rotate="rotate" />
            </div>
          </div>
        </section>
        <span className="z-10 absolute h-80 w-80 rounded-full bg-my-bright-green top-[65vh] left-[50vw]"></span>
      </div>
    </>
  );
};

export default Hero;
