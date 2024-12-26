"use client"

import React, { ReactNode, useState } from "react";
import MobileNav from "./MobileNav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

const DashboardClient = ({ children }: { children: ReactNode }) => {
  const [isMinimizeMenu, setIsMinimizeMenu] = useState<boolean>(false);

  return (
    <main>
      <MobileNav />

      <div className="flex overflow-x-hidden">
        <Sidebar
          isMinimizeMenu={isMinimizeMenu}
          setIsMinimizeMenu={setIsMinimizeMenu}
        />

        <div
          className={cn(
            "pt-4 pb-[4rem] lg:py-7 px-4 lg:px-10 duration-500 transition-[width] ml-auto w-full",
            isMinimizeMenu ? "lg:w-[calc(100%-70px)]" : "lg:w-[calc(100%-240px)]"
          )}
        >
          <Header />
          <div className="mt-5 lg:mt-10">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardClient;
