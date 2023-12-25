import PropTypes from 'prop-types';

// Importing images from assets folder
import mastercard from "./assets/Exclude (1).png";
import wifi from "./assets/Vector (Stroke).png";
import scanLogo from "./assets/Vector (1).png";

// Debit card component, takes some props that i'll use to
// change the background color and some other properties in the css for different variations of this DebitCard component
const DebitCard = ({ cardStyle, rotate, transform }) => {
  return (
    // Main div to wrap evrything instead of an empty tag since i need to change
    // styles of the entire card for the other variants(green and backdrop blur versions)
    // When making for the largest screens, multiple variables by 1.3
    <div
      className={`box-border font-normal text-[0.75rem] flex flex-col items-between justify-center gap-4 z-30 text-white bg-gray-200/20 rounded-[1.75rem] w-[19.2rem] h-[12.15rem] border-[2px] border-gray-300/80 px-[1.875rem] tracking-wide ${cardStyle} ${rotate} ${transform}`}
    >
      <div className="flex justify-between">
        <img src={mastercard} alt="mastercard" className="h-[1.315rem]" />
        <img
          src={wifi}
          alt="wifi"
          className="h-[1.5rem] scale-y-125 translate-x-1"
        />
      </div>

      <div className="flex flex-col justify-between gap-[0.4rem]">
        <span>Credit Card No.</span>
        <span className="text-[0.875rem] font-semibold">
          <ul className="flex gap-[0.85rem] scale-x-100 scale-y-125 w-48">
            <li>1602</li>
            <li>0911</li>
            <li>2019</li>
            <li>2021</li>
          </ul>
        </span>
      </div>

      <div>
        <ul className="flex justify-between items-center">
          <li className="-translate-y-1.875 flex flex-col">
            <p className="-translate-y-[0.125rem]">Name</p>
            <p>OKOYE DIVINE</p>
          </li>

          <li className="-translate-y-1.875 flex flex-col gap-[0.1rem] -translate-x-8">
            <p>Exp.</p>
            <p>05/16</p>
          </li>

          <li className="translate-y-2 translate-x-1.5 scale-125">
            <img src={scanLogo} alt="scan" className="h-6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

DebitCard.propTypes = {
  cardStyle: PropTypes.string.isRequired,
  rotate: PropTypes.string,
  transform: PropTypes.string
}

export default DebitCard;
