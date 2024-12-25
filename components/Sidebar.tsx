"use client";

import { sidebarLinks } from "@/constants/sidebarLinks";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const links = sidebarLinks();
  const [isMinimizeMenu, setIsMinimizeMenu] = useState(false);

  return (
    <aside
      className={cn(
        "hidden relative top-0 left-0 lg:block h-screen bg-[#201F24] rounded-tr-xl rounded-br-xl duration-500 transition-all",
        isMinimizeMenu ? "basis-[30px]" : "basis-[300px]"
      )}
    >
      <div className="pt-8 pb-6 px-7">
          <Image src="/assets/mobile_logo.svg" alt="Logo" width={16} height={16} className={`delay-500 ${isMinimizeMenu ? "flex" : "hidden"}`} />
          <Image src="/assets/logo.png" alt="Logo" width={100} height={50} className={`delay-500 ${isMinimizeMenu ? "hidden" : "flex"}`} />
      </div>

      <div className="py-6 flex flex-col gap-6 max-w-[90%]">
        {links.map(({ link, text, icon, isActive, id }) => (
          <Link
            key={id}
            href={link}
            className={cn(
              "flex gap-3 text-[#B3B3B3] items-center py-3 px-6 font-medium rounded-tr-[9px] text-sm rounded-br-[9px] duration-1000 delay-1000 transition-[display]",
              isActive &&
                "bg-white text-[#201F24] border-l-[4px] border-[#277C78] font-semibold"
            )}
          >
            <span>{icon}</span>
            <span className={`${isMinimizeMenu ? "hidden" : "flex"}`}>{text}</span>
          </Link>
        ))}
      </div>

      <Button
        className="mb-6 ml-1 w-fit bg-transparent hover:bg-transparent shadow-none border-none absolute bottom-4 duration-500 transition-all"
        onClick={() => setIsMinimizeMenu((prev) => !prev)}
      >
        {isMinimizeMenu ? (
          <Image src="/assets/chevron_right.png" alt="Logo" width={20} height={20} />
        ) : (
          <Image src="/assets/chevron_left.png" alt="Logo" width={20} height={20} />
        )}
        <span className={isMinimizeMenu ? "hidden" : "flex"}>Minimize Menu</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
