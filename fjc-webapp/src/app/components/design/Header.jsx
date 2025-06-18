import background from "@/assets/oldComputer.jpg";
import Image from "next/image";
import React from "react";


export const HamburgerMenu = () => {
    return (
      <div className="absolute inset-0 pointer-events-none lg:hidden z-30">
        {/* Solid background layer to block main page content */}
        <div className="absolute inset-0 "></div>
        
        {/* Your background image on top of the solid background */}
        <div className="absolute inset-0 opacity-30">
          <Image
            className="w-full h-full object-cover"
            src={background}
            width={688}
            height={953}
            alt=""
          />
        </div>
      </div>
    );
  };