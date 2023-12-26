import Button from "./Button";

// Hero section
const ManageFInance = () => {
  return (
    <div className="mt-12 md:flex w-full justify-between px-[1.5rem] md:px-[3rem] pt-[3rem] md:pt-[4rem] text-white">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">
          Easy Way to manage
        </h1>
        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">
          your finances
        </h1>
        <h2 className="text-[0.75rem] font-light text-gray-400 pr-[6rem] py-[0.5rem]">
          Easy to use mobile app that support on android and ios.
        </h2>
        <Button text="Create New Card" hasArrow={true} />
      </div>
    </div>
  );
};

export default ManageFInance;
