"use client";
import {navigation} from "@/constants";
import Button from "@/components/Button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "@/components/design/Header";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';

const Nav = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  // Clean scroll control with useEffect
  useEffect(() => {
    if (openNavigation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openNavigation]);

  const toggleNavigation = () => {
    setOpenNavigation(prev => !prev);
  };

  const handleClick = () => {
    if (!openNavigation) {
      return;
    }
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-5 ${
        openNavigation ? "bg-n-1" : "bg-n-1/90 backdrop-blur-sm"
      } lg:bg-n-1/90 lg:backdrop-blur-sm`}
    >
      <div className="flex bg-n-1 items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/#hero">
          <div className="flex items-center px-5 space-x-3">
            <div className="shrink-0 w-10 h-10 rounded-full bg-n-3 border border-white flex items-center justify-center">
              <span className="text-[12px] font-bold leading-none text-black">FJC.</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-n-3">FranciscoJC</h1>
          </div>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.5rem] left-0 right-0 bottom-0 bg-n-1 z-40 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          {/* Changed: Items now align to the right, removed mx-auto, added ml-auto */}
          <div className="relative z-50 flex flex-col items-center justify-center m-auto lg:flex-row lg:items-center lg:justify-end lg:space-x-2 lg:m-0">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                  px-5 py-5 md:py-8 lg:px-4 xl:px-6 lg:text-base lg:font-semibold lg:whitespace-nowrap ${
                  item.url === pathname ? "z-2 lg:text-n-3" : "lg:text-n-3/50"
                } lg:leading-5 lg:hover:text-n-3 ${
                  item.title?.toLowerCase() === 'contact' ? 'lg:text-n-1 lg:bg-n-5 lg:rounded-md lg:border lg:my-2 lg:py-2' : ''
                } after:content-[''] after:absolute after:left-8 after:bottom-5 after:h-[2px] after:bg-n-3 after:transition-all after:duration-300 after:w-0 lg:hover:after:w-1/3 lg:after:left-1/2 lg:after:transform lg:after:-translate-x-1/2 ${
                  item.title?.toLowerCase() === 'contact' ? 'lg:after:bottom-1' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation} 
          href={undefined}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Nav;