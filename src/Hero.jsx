import NavBar from "./NavBar";
import Button from "./Button";
import DebitCard from "./DebitCard";
import HeroImage from "./assets/Frame 19.png";

// Hero section
const Hero = () => {
  return (
    <div className="flex flex-col text-white">
      <NavBar />
      <div className="md:flex w-full justify-between px-[1.5rem] md:px-[3rem] pt-[2rem] md:pt-[3rem]">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
            Discover the Perfect
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
            Credit Card For You
          </h1>
          <h2 className="text-[0.75rem] font-light text-gray-400 pr-[6rem] py-[0.5rem]">
            Discover the power of our secure and rewarding credit cards. Explore
            our range of credit cards and take control of your finances today.
          </h2>
          <Button text="Get Started" hasArrow={true} />
          <div className="flex py-[0.5rem] items-center">
            <img src={HeroImage} alt="image" className="h-8" />
            <div className="pl-[0.7rem]">
              <h1 className="text-[0.7rem] md:text-[0.9rem] font-medium">
                10.2k+
              </h1>
              <h2 className="text-[0.45rem] font-light text-gray-400">
                Active users around
              </h2>
              <h2 className="text-[0.45rem] font-light text-gray-400">
                the world
              </h2>
            </div>
          </div>
        </div>
        <div className="relative h-[23rem] w-[25rem] mt-12">
          <span className="absolute top-[1rem] bottom-0 right-[-3rem] md:right-[-4rem] h-[18rem] w-[18rem] rounded-full bg-my-bright-green"></span>
          <div className="absolute top-[2rem] bottom-0 right-[3rem] md:right-[2rem]">
            <DebitCard cardStyle="card-backdrop" rotate="rotate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
