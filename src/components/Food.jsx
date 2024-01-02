import React, { useState } from "react";
import { data } from "../data/data.js";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";


function Food() {
  const [foods, setFoods] = useState(data);

  //   Filter type burger/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" m-auto px-4 py-12 app-padding">
      <h1 className=" text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items{" "}
      </h1>

      {/* Filter Row */}
      <div className=" flex flex-col lg:flex-row  justify-between ">
        {/* Filter type */}
        <div className="">
          <p className=" font-bold text-gray-700 ">Filter Type</p>
          <div className=" flex flex-wrap ">
            <button
              onClick={() => setFoods(data)}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 px-10 md:px-5"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1  px-10 md:px-5"
            >
              Pizza
            </button>
            {/* <button
              onClick={() => filterType("salad")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              Salads
            </button> */}
            <button
              onClick={() => filterType("fish")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              Fish & Chips
            </button>
          </div>
        </div>
        {/* Filter price */}
        {/* <div className="">
          <p className=" font-bold text-gray-700 ">Filter price</p>
          <div className=" flex justify-between max-w-[390px] w-full ">
            <button
              onClick={() => filterPrice("$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$$$
            </button>
          </div>
        </div> */}
      </div>
      {/* Display Foods */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className=" border shadow-lg rounded-lg hover:scale-105 duration-300 "
          >
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.name}
              className=" w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className=" flex justify-between px-2 py-4 ">
              <p className=" font-bold "> {item.name} </p>
              {/* <p className="bg-orange-500 text-white p-1 rounded-full">
                  <FaShoppingCart className="p-0.5" />
        
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
