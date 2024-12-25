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
      <MobileNav />

      <div className="flex">
        <Sidebar />

        <div className="pt-4 pb-[4rem] lg:py-7 px-4 lg:px-10 w-full">
          <Header />
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
