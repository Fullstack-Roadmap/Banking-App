import React from "react";

const Accolades = () => {
  return (
    <div className="flex justify-center">
      <div className="h-56 md:h-20 w-screen mx-10 bg-[#0f4c37]/[0.25] z-20 rounded-[2rem] backdrop-blur-sm">
        <ul className="text-xs m-10 gap-8 grid grid-rows-2 grid-cols-2 place-content-center">
          <li className="accolades-li">
            <h2 className="accolades-h2">16y</h2>
            <p className="text-center">Experience</p>
          </li>
          <li className="accolades-li">
            <h2 className="accolades-h2">250+</h2>
            <p className="text-center">Merchant Partner</p>
          </li>
          <li className="accolades-li">
            <h2 className="accolades-h2">18+</h2>
            <p className="text-center">World Experience</p>
          </li>
          <li className="accolades-li">
            <h2 className="accolades-h2">10.2k+</h2>
            <p className="text-center">Worldwide Clients</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accolades;
