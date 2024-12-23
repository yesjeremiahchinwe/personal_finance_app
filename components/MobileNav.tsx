"use client"

import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileNav = () => {
  const links = sidebarLinks();

  return (
    <footer className="max-lg:flex items-center justify-center hidden bg-[#201F24] rounded-t-xl fixed bottom-0 w-full h-[60px] md:h-[74px]">
      <div className="flex justify-between items-center gap-6 w-[90%] mx-auto">
        {links.map(({ link, text, icon, isActive, id }) => (
          <Link
            key={id}
            href={link}
            className={cn(
              "flex px-6 mt-4 md:mt-6 flex-col gap-1 text-[#B3B3B3] items-center font-medium rounded-tl-[9px] pt-4 md:pt-2 pb-4 text-sm rounded-tr-[9px] border-b-[13px] md:border-b-[20px] border-transparent",
              isActive &&
                "bg-white text-[#201F24] border-b-[13px] md:border-b-[20px] border-[#277C78] font-semibold"
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
