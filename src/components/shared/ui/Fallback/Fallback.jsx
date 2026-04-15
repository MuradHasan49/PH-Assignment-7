
const Fallback = () => {
    return (
        <>
            <div className=" container mx-auto flex flex-col items-center justify-center min-h-[50vh]">
                <span className="loading loading-ring loading-lg text-primary scale-150"></span>
                <h2 className="text-2xl font-black uppercase italic mt-8 animate-pulse">
                    Data Loading...
                </h2>
            </div>
        </>
    )
}

export default Fallback