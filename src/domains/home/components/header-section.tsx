import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavMenu } from "./nav-menu";

export const HeaderSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative w-full h-16 md:h-20 flex items-center justify-between px-5 py-2 bg-linear-to-r from-blue-300 to-violet-500 border border-b-violet-500">
      <div className="flex items-center justify-between gap-3">
        <img
          src="/belajar-bareng-aa-logo.png"
          className="w-14 h-10 md:w-24 md:h-16"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-base md:text-2xl text-blue-900">
            Belajar Bareng Aa
          </h4>
          <p className="text-xs md:text-sm text-slate-800">
            Belajar lebih santai, lebih dekat, lebih paham
          </p>
        </div>
      </div>
      {showMenu ? (
        <X
          className="w-8 h-8 md:w-8 md:h-8 text-white hover:cursor-pointer hover:opacity-80"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      ) : (
        <Menu
          className="w-8 h-8 md:w-8 md:h-8 text-white hover:cursor-pointer hover:opacity-80"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      )}

      <NavMenu showMenu={showMenu} />
    </header>
  );
};
