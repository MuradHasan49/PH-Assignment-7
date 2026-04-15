
const NoFriendshipData = () => {
    return (
        <div className="relative container mx-auto rounded-3xl border  border-gray-600/40 bg-base-100 p-12 text-center overflow-hidden">

            <div className="relative z-10 flex flex-col items-center">

                <div className="mb-8 relative">

                    <div className="absolute inset-0 rounded-full bg-error/20 animate-ping"></div>

                    <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-base-200 border border-gray-600/20 shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-error"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>


                <h2 className="text-3xl font-black tracking-tight text-base-content mb-3 uppercase italic">
                    No Stats Found
                </h2>

                <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed mb-10">
                    The analytics system couldn't retrieve any data for this view. Please try again or return to the Home.
                </p>

                <button
                    onClick={() => window.history.back()}
                    className="btn btn-primary rounded-full px-12 gap-3 hover:scale-105 transition-transform"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                </button>
            </div>


            <div className="mt-8">
                <span className="badge badge-ghost gap-2 opacity-50 py-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                    Waiting for Data
                </span>
            </div>
        </div>
    );
};

export default NoFriendshipData;