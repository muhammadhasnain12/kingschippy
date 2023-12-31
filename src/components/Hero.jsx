import React from "react";

function Hero() {
  return (
    <div className="mx-auto ">
      <div className=" absolute w-full md:w-2/5 h-full text-gray-200 max-h-max  md:text-overlay__large text-overlay__small flex flex-col justify-center items-center gap-5 ">
        <p>ENJOY YOUR HEALTHY DELICIOUS MEAL</p>
        <h1 className=" px-4 text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold " style={{ fontFamily: 'Nunito' }}>
          Treat <span className="text-orange-500">Yourself</span>  
        </h1>
        <p className='text-white font-[600] tracking-wide	text-[25px] font-medium leading-9 font-serif'>
        🌊  Dive into a sea of flavor with our signature Fish & Chips, expertly crafted for that perfect crunch and succulent bite. Our commitment to using the freshest catches ensures a maritime journey on every plate.
        </p>
        <a className="bg-orange-500 border-orange-500 border px-5 py-2 font-medium rounded-full cursor-pointer text-white" href='#menues'>EXPLORE NOW</a>

      </div>

    </div>
  );
}

export default Hero;
