import React from 'react'
import rakuten from "./assets/rakuten.png";
import nyt from "./assets/nyt.png";
import upWork from "./assets/Vector.png";
import petal from "./assets/petal.png";
import vice from "./assets/vice.png";
import dell from "./assets/dell.png";


const Clients = () => {
  return (
    <div className="my-12 mx-6">
      <ul className="h-15 grid grid-cols-3 grid-rows-2">
        <li className="client-li">
          <img src={upWork} alt="" />
        </li>
        <li className="client-li">
          <img src={petal} alt="" />
        </li>
        <li className="client-li">
          <img src={rakuten} alt="" />
        </li>
        <li className="client-li">
          <img src={nyt} alt="" />
        </li>
        <li className="client-li">
          <img src={dell} alt="" />
        </li>
        <li className="client-li">
          <img src={vice} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Clients