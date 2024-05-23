import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Logo from "../assets/disney-logo.png";
import HeaderItems from "./HeaderItems";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = [
    {
      name: "Accueil",
      icon: FaHome,
    },

    {
      name: "Recherche",
      icon: FaSearch,
    },

    {
      name: "Ma liste",
      icon: FaPlus,
    },

    {
      name: "Films",
      icon: RiMovie2Line,
    },

    {
      name: "Séries",
      icon: PiTelevisionBold,
    },

    {
      name: "Originals",
      icon: FaStar,
    },
  ];

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 px-4 p-4 z-50 w-full transition-all duration-500 ease-in-out ${
        scrollPosition > 30 ? "bg-[#1a1e26]" : "bg-transparent"
      } z-[1000] flex space-x-4 justify-between items-center`}
    >
      <nav className="flex items-center gap-6">
        <img
          src={Logo}
          alt="Logo Disney plus"
          className=" max-w-[80px] object-cover gap-4 md:ml-4 md:mr-8"
        />

        <div className="hidden lg:flex items-center gap-14">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
          ;
        </div>

        <div className="flex lg:hidden items-center gap-6">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems key={item.name} Icon={item.icon} />
          )}
        </div>

        <div className="relative lg:hidden" onClick={handleMenu}>
          <HeaderItems name={""} Icon={BsThreeDotsVertical} />

          {menuOpen && (
            <div className="absolute mt-4 -ml-16 z[100]  bg-[#22262D] border border-gray-600 px-6 py-3 flex flex-col gap-2 rounded-md ">
              {menu.map((item, index) =>
                index > 2 ? (
                  <HeaderItems
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                ) : null
              )}
            </div>
          )}
        </div>
      </nav>

      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/48A531D5FA06BD087151D82A68AA98FFC6BBE16D342DFF4AA09FDCEB8D8F59E8/scale?width=96&format=png"
        alt=" Profil "
        className="w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
