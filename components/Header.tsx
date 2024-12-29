"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import AddBudgetsModal from "./modals/AddBudgetsModal";
import { useState } from "react";
import AddNewPot from "./modals/AddNewPot";
// import { logoutAccount } from "@/lib/actions/user.actions"
// import { redirect } from "next/navigation"

const Header = () => {
  const links = sidebarLinks();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNewPot, setIsOpenNewPot] = useState(false);

  // const handleLogOut = async () => {
  //     await logoutAccount()
  //     redirect("/sign-in")
  // }

  return (
    <>
      <header className="w-full h-[74px] lg:h-24 flex items-center px-4 lg:px-10">
        <div className="flex items-center justify-between flex-grow">
          {links.map(({ id, text, isActive }) => (
            <h1
              className="text-[#201F24] font-bold text-2xl self-start"
              key={id}
            >
              {isActive && text}
            </h1>
          ))}

          <div className="ml-auto">
            {pathname.includes("/budgets") && (
              <Button
                className="h-10 font-semibold"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <PlusIcon className="-mr-1" /> Add New Budget
              </Button>
            )}

            {pathname.includes("/pots") && (
              <Button
                className="h-10 font-semibold"
                onClick={() => setIsOpenNewPot((prev) => !prev)}
              >
                <PlusIcon className="-mr-1" /> Add New Pot
              </Button>
            )}
          </div>
        </div>
        {/* <Button onClick={handleLogOut}>Logout</Button> */}
      </header>

      <AddBudgetsModal
        loading={false}
        isOpen={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
        onConfirm={() => setIsOpen((prev) => !prev)}
      />
      <AddNewPot
        loading={false}
        isOpen={isOpenNewPot}
        onClose={() => setIsOpenNewPot((prev) => !prev)}
        onConfirm={() => setIsOpenNewPot((prev) => !prev)}
      />
    </>
  );
};

export default Header;
