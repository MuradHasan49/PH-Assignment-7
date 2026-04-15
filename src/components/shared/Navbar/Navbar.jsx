"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoHome, IoTimeOutline } from "react-icons/io5"
import { MdOutlineQueryStats } from "react-icons/md"

const Navbar = () => {

    const path = usePathname()

    return (
        <>
            <div className=" bg-white  shadow-sm border-b border-gray-500/55 sticky top-0 z-999">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn bg-base-100 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <div
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <Link href={"/"}>
                                        <button className={`${path == "/" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline w-30`}><IoHome /> Home</button>
                                    </Link>
                                    <Link href={"/timeline "}>
                                        <button className={`${path == "/timeline" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline  w-30`}><IoTimeOutline /> Timeline</button>
                                    </Link>
                                    <Link href={"/stats"}>
                                        <button className={`${path == "/stats" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline  w-30`}><MdOutlineQueryStats />Stats</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href={"/"} className="text-black font-black text-xl lg:text-3xl">Keen<span className="text-[#244D3F] text-xl lg:text-3xl font-semibold">Keeper</span></Link>
                    </div>
                    <div className="navbar-end hidden lg:flex gap-2 text-gray-600">
                        <Link href={"/"}>
                            <button className={`${path == "/" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline w-30`}><IoHome /> Home</button>
                        </Link>
                        <Link href={"/timeline "}>
                            <button className={`${path == "/timeline" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline  w-30`}><IoTimeOutline /> Timeline</button>
                        </Link>
                        <Link href={"/stats"}>
                            <button className={`${path == "/stats" ? " bg-[#244D3F] text-white border-none" : ""} btn btn-outline  w-30`}><MdOutlineQueryStats />Stats</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar