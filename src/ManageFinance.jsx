import IOSImage from "./assets/image 108.png";
import AppStore from "./assets/appstore.svg";
import GooglePlay from "./assets/googleplay.svg";

// Hero section
const ManageFinance = () => {
  return (
    <div className="translate-y-10 grid place-content-center ipad:flex w-full md:justify-between items-center px-[2rem] md:px-[4rem] md:pt-[2rem] text-white">
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
        <div className="flex py-[0.5rem] space-x-[1rem] h-[3rem] md:h-[4rem]">
          <img src={AppStore} alt="image" />
          <img src={GooglePlay} alt="image" />
        </div>
      </div>
      <div>
        <img src={IOSImage} alt="image" className="h-[17rem] md:h-[20rem]" />
      </div>
    </div>
  );
};

export default ManageFinance;
