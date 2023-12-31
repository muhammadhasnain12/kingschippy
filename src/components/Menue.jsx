import React from "react";
import MenueAccordionRight from "./MenueAccordionRight.jsx";
import MenueAccordionLeft from "./MenueAccordionLeft.jsx";

function Menues() {
  return (
    <div className=" m-auto px-4 py-12 app-padding" id='menues'>
      <h1 className=" text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
        <MenueAccordionLeft />
        <MenueAccordionRight />
      </div>
    </div>
  );
}

export default Menues;
