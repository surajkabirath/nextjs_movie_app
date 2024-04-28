import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import NavbarItem from "./NavbarItem";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto bg-gray-600 lg:text-lg dark:bg-dark">
      <div className="flex items-center gap-4">
       
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg text-white-500 ">
            IMDb
          </span>
          
        </Link>
      </div>
     
      <div className='flex gap-4'>
        {/* <MenuItem title='home' address='/' Icon={AiFillHome} />
        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} /> */}
         <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
      </div>
     
      <div className="flex gap-4">
      <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
