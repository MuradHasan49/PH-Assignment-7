"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoHome, IoTimeOutline } from "react-icons/io5"
import { MdOutlineQueryStats } from "react-icons/md"

const Navbar = () => {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/", icon: <IoHome /> },
        { name: "Timeline", href: "/timeline", icon: <IoTimeOutline /> },
        { name: "Stats", href: "/stats", icon: <MdOutlineQueryStats /> },
    ]

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-1000">
            <div className="navbar container mx-auto px-4 flex justify-between items-center h-16 bg-white relative z-1001">

                <div className="flex-none">
                    <Link href={"/"} className="text-black font-black text-xl lg:text-2xl">
                        Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
                    </Link>
                </div>

                <div className="hidden lg:flex gap-2 ">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <button className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 font-medium 
                                ${path === link.href
                                    ? "bg-[#244D3F] text-white"
                                    : "text-gray-600 hover:bg-gray-100"}`}>
                                {link.icon} {link.name}
                            </button>
                        </Link>
                    ))}
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-ghost btn-circle relative"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                            <span className={`h-0.5 w-full bg-black rounded-lg transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                            <span className={`h-0.5 w-full bg-black rounded-lg transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`h-0.5 w-full bg-black rounded-lg transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 z-999 transform transition-all duration-500 ease-in-out lg:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col gap-2 p-5 bg-white text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            <button className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl transition-all duration-200 text-base font-semibold
                                ${path === link.href
                                    ? "bg-[#244D3F] text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-50 active:scale-95"}`}>
                                <span className="text-xl">{link.icon}</span> {link.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar