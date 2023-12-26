import Button from "./Button";
import DebitCard from "./DebitCard";

// Hero section
const PerfectCard = () => {
  return (
    <div className="mt-12 md:flex w-full justify-between px-[1.5rem] md:px-[3rem] pt-[3rem] md:pt-[4rem] text-white">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">
          Find the Perfect Credit
        </h1>
        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">
          Card for You
        </h1>
        <h2 className="text-[0.75rem] font-light text-gray-400 pr-[6rem] py-[0.5rem]">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
        </h2>
        <Button text="Create New Card" hasArrow={true} />
      </div>

      {/* Not done with this yet */}
      <div className="pt-[3rem] md:pt-[1rem]">
        <DebitCard cardStyle="card-backdrop" />
        <div className="-translate-y-10">
          <DebitCard cardStyle="card-green" rotate="transform-left" />
        </div>
      </div>
    </div>
  );
};

export default PerfectCard;
