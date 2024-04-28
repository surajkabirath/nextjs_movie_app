import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
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
      <div className="flex gap-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <div className="flex gap-4">
      <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
