import DashboardClient from "@/components/DashboardClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Personal Finance App",
    template: "%s | Personal Finance App",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <DashboardClient children={children} />
}
