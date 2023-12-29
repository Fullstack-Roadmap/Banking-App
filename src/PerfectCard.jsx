import Button from "./Button";
import DebitCard3 from "./DebitCard3";


const PerfectCard = () => {
  return (
    <div className="mt-8 md:flex w-full justify-between items-center px-[2rem] md:px-[4rem] pt-[2rem] md:pt-[1rem] text-white">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Find the Perfect Credit
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold">
          Card for You
        </h1>
        <h2 className="text-[0.75rem] font-light text-gray-400 pr-[6rem] py-[0.5rem]">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
        </h2>
        <Button text="Learn More" hasArrow={false} />
      </div>

      {/* Not done with this yet */}
      <div className="pt-[3rem] sm:translate-x-5">
        <DebitCard3 />
      </div>
    </div>
  );
};

export default PerfectCard;
