import Button from "./Button";
import DebitCard from "./DebitCard";

// Hero section
const PersonalisedCard = () => {
    return (
        <div className="md:flex w-full justify-between px-[1.5rem] md:px-[3rem] pt-[3rem] md:pt-[4rem] text-white">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">Design your personalized</h1>
                <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">credit card.</h1>
                <h2 className="text-[0.75rem] font-light text-gray-400 pr-[6rem] py-[0.5rem]">You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary.</h2>
                <Button text="Create New Card" hasArrow={true} />
            </div>
            <div className="pt-[3rem] md:pt-[1rem]">
            <DebitCard cardStyle="card-backdrop" rotate="rotate" />
          </div>
        </div>
    );
};

export default PersonalisedCard;