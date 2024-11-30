// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
// } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";
import React, { useState } from "react";
import Logo from "../assets/pokemon.png";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-around items-center px-4 bg-gradient-to-r from-green-700 to-green-300 text-gray-300">
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "200px" }}
          className="ml-5"
        />
      </div>
      <div className="flex justify-center items-center w-full mt-2">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Cari Pokemon"
            className="duration-200 w-full h-[45px] text-black py-1.5 px-5 pr-10 border border-[#c1c4cd] rounded-full outline-none"
          />
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
            <ImSearch size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
