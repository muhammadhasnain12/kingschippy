import Image from "next/image";
import React from "react";
import img from "../../public/burger.jpg";
import img1 from "../../public/b-1.jpg";
import img2 from "../../public/b-2.jpg";
import img3 from "../../public/b-3.jpg";
import img4 from "../../public/b-4.jpg";

function Hero() {
  return (
    <div className="mx-auto ">
      <div className=" absolute w-full md:w-2/5 h-full text-gray-200 max-h-max  md:text-overlay__large text-overlay__small flex flex-col justify-center items-center gap-5 ">
        <p>ENJOY YOUR HEALTHY DELICIOUS MEAL</p>
        <h1 className=" px-4 text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold " style={{ fontFamily: 'Nunito' }}>
          Treat <span className="text-orange-500">Yourself</span>  
        </h1>
        <p className='text-white font-[600] tracking-wide	text-[25px] font-medium leading-9 font-serif'>
          Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <button className="bg-orange-500 border-orange-500 border px-5 py-2 rounded-full">EXPLORE NOW</button>

      </div>

    </div>
  );
}

export default Hero;
