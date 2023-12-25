import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {  menu , close } from '../assets';
import logo4 from '../assets/logo4.svg';
import { github, linkedin } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <div className="flex items-center gap-2">
        <Link to="/" className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo4} alt="logo" className='w-9 h-9 object-contain ' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Tom Kondat</p>&nbsp;&nbsp;
        </Link>
        <div className="flex items-center gap-2">
        <a href="https://github.com/TomKondat">
              <img src={github} alt="github" className="w-9 h-9" />
            </a>
            <a href="https://www.linkedin.com/in/tom-kondat/">
              <img src={linkedin} alt="linkedin" className="w-9 h-9" />
            </a>
        </div>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
            key={Link.id}
            className={`${
              active === Link.title ? "text-white" : "text-secondary"
            }
            hover:text-white text-[18px] font-meduim cursor-pointer`}
            onClick={() => 
              setActive(Link.title)
            }
            >
              <a href={`#${Link.id}`}>
                {Link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((Link) => (
            <li
            key={Link.id}
            className={`${
              active === Link.title ? "text-white" : "text-secondary"
            } font-poppins font-meduim cursor-pointer text-[16px]`}
            onClick={() => {
              setToggle(!toggle);
              setActive(Link.title);
            }
            }
             
            >
              <a href={`#${Link.id}`}>
                {Link.title}
              </a>
            </li>
          ))}
        </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar