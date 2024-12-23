"use client";

import {
  ArrowDownUp,
  DollarSign,
  HomeIcon,
  LineChart,
  StoreIcon
} from "lucide-react";
import { usePathname } from "next/navigation";

export const sidebarLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      id: "overview",
      text: "Overview",
      link: "/",
      icon: (
        <HomeIcon size={18} color={pathname === "/" ? "#277C78" : "#B3B3B3"} />
      ),
      isActive: pathname === "/",
    },
    {
      id: "transactions",
      text: "Transactions",
      link: "/transactions",
      icon: (
        <ArrowDownUp
          size={18}
          color={pathname.includes("/transactions") ? "#277C78" : "#B3B3B3"}
        />
      ),
      isActive: pathname.includes("/transactions"),
    },
    {
      id: "budgets",
      text: "Budgets",
      link: "/budgets",
      icon: (
        <DollarSign
          size={18}
          color={pathname.includes("/budgets") ? "#277C78" : "#B3B3B3"}
        />
      ),
      isActive: pathname.includes("/budgets"),
    },
    {
      id: "pots",
      text: "Pots",
      link: "/pots",
      icon: (
        <StoreIcon
          size={18}
          color={pathname.includes("/pots") ? "#277C78" : "#B3B3B3"}
        />
      ),
      isActive: pathname.includes("/pots"),
    },
    {
      id: "recurring-bills",
      text: "Recurring Bills",
      link: "/recurring-bills",
      icon: (
        <LineChart
          size={18}
          color={pathname.includes("/recurring-bills") ? "#277C78" : "#B3B3B3"}
        />
      ),
      isActive: pathname.includes("/recurring-bills"),
    },
  ];

  return links;
};
