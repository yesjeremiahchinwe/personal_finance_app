"use client"
import { sidebarLinks } from "@/constants/sidebarLinks"
import { logoutAccount } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"
import { Button } from "./ui/button"

const  Header = () => {
    const links = sidebarLinks()

    const handleLogOut = async () => {
        await logoutAccount()
        redirect("/sign-in")
    }

    return (
        <header className="">
            {links.map(({ id, text, isActive}) => (
                <h1 className="text-[#201F24] font-bold text-2xl" key={id}>{isActive && text}</h1>
            ))}

            <Button onClick={handleLogOut}>Logout</Button>
        </header>
    )
}

export default Header