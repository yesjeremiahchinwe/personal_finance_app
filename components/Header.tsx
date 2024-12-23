"use client"
import { sidebarLinks } from "@/constants/sidebarLinks"

const  Header = () => {
    const links = sidebarLinks()

    return (
        <header className="">
            {links.map(({ id, text, isActive}) => (
                <h1 className="text-[#201F24] font-bold text-2xl" key={id}>{isActive && text}</h1>
            ))}
        </header>
    )
}

export default Header