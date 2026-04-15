"use client"
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-base-100 px-6 overflow-hidden">
            <div className="relative flex flex-col items-center">

                <div className="relative mb-12">

                    <div className="absolute inset-0 scale-150 bg-primary/10 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 scale-125 bg-secondary/5 rounded-full animate-ping"></div>

                    <div className="relative z-10 w-32 h-32 bg-base-200 border border-gray-600/20 rounded-3xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-primary animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>


                <div className="text-center z-10">
                    <h1 className="text-9xl font-black tracking-tighter text-base-content/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
                        404
                    </h1>

                    <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase italic tracking-widest mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 max-w-sm mx-auto text-sm md:text-base leading-relaxed mb-12 font-medium">
                        The coordinates you entered don`t exist in our current database.
                        It seems you`ve reached the edge of the digital map.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => window.history.back()}
                            className="group btn btn-outline border-2 rounded-2xl px-8 gap-3 hover:bg-base-content hover:text-base-100 transition-all duration-300 w-full sm:w-auto"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Go Back
                        </button>

                        <Link
                            href="/"
                            className="btn btn-primary rounded-2xl px-10 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                        >
                            Home
                        </Link>
                    </div>
                </div>


                <div className="absolute top-0 -left-20 w-4 h-4 bg-primary rounded-full animate-bubble opacity-20"></div>
                <div className="absolute bottom-20 -right-10 w-6 h-6 bg-secondary rounded-full animate-bounce opacity-20"></div>
            </div>
        </div>
    );
};

export default NotFoundPage;