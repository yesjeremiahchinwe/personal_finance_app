import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
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
    return (
        <main>
          <Header />
          <Sidebar />
          <MobileNav />

          <div>
            {children}
          </div>
        </main>
    )
  }