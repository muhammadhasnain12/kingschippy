import { BsTelephoneOutbound } from 'react-icons/bs';
import {
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { SiJusteat } from 'react-icons/si';


export const contactDetails = [
  {
    id: 1,
    title: 'Our Location',
    details: '255 Castlemilk Road, Rutherglen, Glasgow, G44 4LE',
    icon: <GoHome className='h-7 w-7' />,
  },
  {
    id: 2,
    title: 'Phone Number',
    details: '(+44) 1416329989',
    icon: <BsTelephoneOutbound className='h-7 w-7' />,
  },
  {
    id: 3,
    title: 'Email Address',
    details: '',
    icon: <MdOutlineEmail className='h-7 w-7' />,
  },
];

export const socialIcons = [

  {
    id: 'instagram',
    icon: <FaInstagram className='h-6 w-6' />,
  },
  {
    id: 'facebook',
    icon: <FaFacebook className='h-6 w-6' />,
  },
  {
    id: 'Just Eact',
    icon: <SiJusteat className='h-6 w-6' />,
    link: 'https://kingschippy.co.uk/'
  }
];


export const navLinks = [
    {
      id: "home",
      title: "Home",
      link: "#home"
    },
    {
      id: "about",
      title: "About",
      link: "#about-us"
    },
    {
      id: "menues",
      title: "Menues",
      link: "#menues"
    },
    {
      id: "services",
      title: "Services",
      link: "#services"
    },
    {
      id: "Contact us",
      title: "Contact us",
      link: "#contact-us"
    },
  ];