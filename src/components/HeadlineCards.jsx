import React from "react";
import Image from "next/image";
import img from "../../public/kingschippy_fish.avif";
import img1 from "../../public/burder_and_chips.avif";
import img2 from "../../public/icecream.avif";

function HeadlineCards() {
  return (
    <div className=" mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 app-padding">
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/10 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
          Oceanic Fry Delight
          </p>
          <p className=" px-2 ">Through 8/26</p>
          {/* <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button> */}
        </div>

        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img}
          alt="Picture of egg"
        />
      </div>
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/30 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">Burger Junction</p>
          <p className=" px-2 ">Added Daily</p>

        </div>
        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img1}
          alt="Picture of egg"
        />
      </div>
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/30 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
          Frozen Delight Dessert Haven
          </p>
          <p className=" px-2 ">Tasty Treats</p>

        </div>
        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img2}
          alt="Picture of egg"
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
