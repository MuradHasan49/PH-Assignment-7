'use client';

import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';

const Error = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 font-sans bg-[#F8FAFC]">
            <div className="container mx-auto bg-white rounded-4xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-10 md:p-14 flex flex-col items-center text-center">

                <div className="mb-6 bg-red-50 rounded-full p-5 border border-red-100">
                    <BiErrorCircle className="text-5xl text-red-500" />
                </div>

                <h2 className="text-[#112D23] text-3xl font-bold tracking-tight mb-3">
                    Page Not Available
                </h2>

                <p className="text-[#64748b] text-[17px] mb-10 leading-relaxed max-w-md">The page you’re looking for isn’t available right now. Please go back to the previous page or return to the home page to continue browsing.</p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-[#475569] font-medium text-[16px] px-8 py-3.5 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-gray-100"
                    >
                        <FaArrowLeft className="text-sm" />
                        <span>Go Back</span>
                    </button>
                    <Link href={"/"}>
                        <button
                            className="flex items-center w-full justify-center gap-2.5 bg-[#112D23] hover:bg-[#1a4233] text-white font-medium text-[16px] px-8 py-3.5 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200"
                        >
                            <IoHome className="text-sm" />
                            <span>Home</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Error;