"use client";

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
            "pb-[6rem] lg:pb-[8rem] duration-500 transition-[width] ml-auto w-full",
            isMinimizeMenu
              ? "lg:w-[calc(100%-70px)]"
              : "lg:w-[calc(100%-300px)]"
          )}
        >
          <Header />
          <div className="mt-5 px-4 lg:px-10">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardClient;
