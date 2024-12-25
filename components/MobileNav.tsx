"use client"

import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileNav = () => {
  const links = sidebarLinks();

  return (
    <footer className="max-lg:flex items-center justify-center hidden bg-[#201F24] rounded-t-xl fixed bottom-0 w-full">
      <div className="flex justify-between items-center gap-6 w-[90%] mx-auto">
        {links.map(({ link, text, icon, isActive, id }) => (
          <Link
            key={id}
            href={link}
            className={cn(
              "flex px-6 mt-2 flex-col gap-2 text-[#B3B3B3] items-center font-medium rounded-tl-[9px] py-3 text-sm rounded-tr-[9px] border-b-[3px] border-transparent",
              isActive &&
                "bg-white text-[#201F24] border-b-[3px] border-[#277C78] font-semibold"
            )}
          >
            <span>{icon}</span>
            <span className="hidden md:flex">{text}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default MobileNav;
