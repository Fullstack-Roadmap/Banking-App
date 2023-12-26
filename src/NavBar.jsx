import { useState } from 'react';
import Button from "./Button";
import Exclude from "./assets/Exclude.png";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <nav className="w-full py-[1.2rem] px-[1.2rem] md:px-[3rem] flex justify-between items-center">
      <div className="flex items-center">
        <img src={Exclude} alt="exclude" className="h-[.7rem] md:h-[1rem] pr-[0.3rem] md:pr-[0.5rem]" />
        <a className="text-[0.8rem] font-semibold md:text-[1rem]" href="#">GreenBank</a>
      </div>
      <ul className="hidden md:flex space-x-8 text-[0.7rem] font-light">
        <li><a className="hover:text-gray-300" href="#">Why Us</a></li>
        <li><a className="hover:text-gray-300" href="#">Services</a></li>
        <li><a className="hover:text-gray-300" href="#">Our Process</a></li>
        <li><a className="hover:text-gray-300" href="#">Payment</a></li>
        <li><a className="hover:text-gray-300" href="#">FAQs</a></li>
      </ul>
      <div className="display: flex">
        <Button text="Contact" buttonColor="transparent" textColor="green" />
        <button className="text-white md:hidden pl-[0.7rem]" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>


      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 bg-green-900 bg-opacity-80 z-50">
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-left hover:text-gray-300 px-[5rem] space-y-[1rem]">
            <li><a href="#">Why Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar