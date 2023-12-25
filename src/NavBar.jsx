import Button from "./Button";
import Exclude from "./assets/Exclude.png";

const NavBar = () => {
  return (
    <nav className="py-[1.2rem] px-[1.2rem] md:px-[1.5] flex justify-between items-center">
      <div className="flex items-center">
        <img src={Exclude} alt="exclude" className="h-[.7rem] md:h-[1rem] pr-[0.2rem] md:pr-[0.5rem]" />
        <a className="text-[0.7rem] font-semibold md:text-[1rem]" href="#">GreenBank</a>
      </div>
      <ul className="display: flex space-x-4 md:space-x-8 text-[0.4rem] md:text-[0.6rem] font-light">
        <li><a className="hover:text-gray-300" href="#">Why Us</a></li>
        <li><a className="hover:text-gray-300" href="#">Services</a></li>
        <li><a className="hover:text-gray-300" href="#">Our Process</a></li>
        <li><a className="hover:text-gray-300" href="#">Payment</a></li>
        <li><a className="hover:text-gray-300" href="#">FAQs</a></li>
      </ul>
      <Button text="Contact" buttonColor='transparent' textColor='green'/>
    </nav>
  )
}

export default NavBar