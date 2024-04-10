import React from "react";
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold"><Image width={50} height={50} src="/icon.png" alt="Picture of the author" /></div> 
        </div>
        <div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
