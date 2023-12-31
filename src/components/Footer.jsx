/* eslint-disable @next/next/no-img-element */

import { socialIcons } from "@/data/config";
import { GiKnifeFork } from "react-icons/gi";


// import Copyrights from "./copyright";
const CopyRight = (    <div className='border-t pb-10 pt-5'>
<p className='text-center text-sm text-gray-100'>
  © Copyright 2023{' '}
  <a
    href='https://muhammadhasnaininfo.vercel.app'
    className='text-primary'
  >
    Muhammad Hasnain
  </a>{' '}
  . All rights reserved.
</p>
</div>)


const Footer = () => {
  return (
    <div className="px-0 mt-10 bg-[#645f56] text-white">
      <div className='mx-auto px-0 sm:max-w-xl md:max-w-7xl md:px-24 md:pr-0 lg:max-w-7xl lg:px-0 pt-[70px] '>
        <div className='row-gap-10 mb-8 grid gap-16 lg:grid-cols-2 '>
          <div className='md:max-w-md px-6 md:px-0'>
            <a
              href='#home'
              aria-label='Go home'
              title='AcuCare'
              className='inline-flex items-center'
            >
              <GiKnifeFork className="h-11 w-11" />
              <h2 className='text-babag-light font-semibold text-[18px] md:text-[24px]'><span className='text-primary'>Kings</span> Chippy</h2>
            </a>
            <div className='mt-4 md:pl-2 lg:max-w-sm'>
              <p className='text-sm text-babag-light'>
              At Kings Chippy, we take pride in delivering not just a meal but a culinary experience that reflects the essence of our vibrant locale. Join us on a journey of taste and tradition, where every bite tells a story of quality and satisfaction.
               Come savor the flavors that make Kings Chippy a true gem in Glasgow's dining scene.
              </p>  
              <div className='mt-4 flex items-center space-x-4'>
                {socialIcons.map((data) => (
                  <a
                    href={data.link}
                    className='text-babag-light transition-colors duration-300 hover:text-babag-light'
                    key={data.id}
                  >
                    {data.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='row-gap-8 grid grid-cols-1 gap-5 px-6 md:grid-cols-2 md:gap-0 md:px-0'>
            <div>
              <h2 className='text-[20px] font-semibold tracking-wide text-babag-light'>
                Services
              </h2>
              <ul className='mt-2 space-y-3 text-babag-light'>
                {['Fast Food', 'Pizza', 'Wings', 'Latest Deals'].map(
                  (data) => (
                    <li key={data} className='py-1'>
                      <a
                        href='/services'
                        className='transition-colors duration-300 hover:text-babag-light text-[15px] font-thin '
                      >
                        {data}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h2 className='text-[20px] font-semibold tracking-wide text-babag-light'>
                Get In Touch
              </h2>
              <ul className='mt-2 space-y-5 text-babag-light'>
                <li className="flex flex-row gap-1 text-[14px] font-thin">
                  <p className="text-babag-light ">Phone:</p>
                  <p>+(44) 1416329989</p>
                </li>
                <li className="flex flex-row gap-2 text-[14px] font-thin">
                  <p>Email:</p>
                  <p> foodlike786@yahoo.com</p>
                </li>
                <li className="flex flex-row gap-2 text-[14px] font-thin">
                  <p>Address:</p>
                  <p>253 Castlemilk Road, Glasgow, G444LE </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {CopyRight}
    </div>
  );
};

export default Footer;