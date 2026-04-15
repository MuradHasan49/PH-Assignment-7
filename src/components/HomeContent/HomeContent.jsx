import { Suspense } from "react";
import ProfileCard from "../shared/ui/ProfileCard/ProfileCard";
import Fallback from "../shared/ui/Fallback/Fallback";

const HomeContent = async () => {
    const dataPromise = await fetch("http://localhost:3000/apidata.json")
    const data = await dataPromise.json()
    const allOnTrack = data.filter(item => item.status === "on-track");

    const stats = [
        { value: data.length, label: 'Total Friends' },
        { value: allOnTrack.length, label: 'On Track' },
        { value: '6', label: 'Need Attention' },
        { value: '12', label: 'Interactions This Month' },
    ];


    return (
        <>
            <header className="flex flex-col items-center justify-center py-20 px-6">
                <h1 className="text-[#202832] text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">
                    Friends to keep close in your life
                </h1>

                <p className="text-[#6e7b8a] text-[15px] md:text-base text-center max-w-2xl mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the<br className="hidden md:block" /> relationships that matter most.
                </p>

                <button className="flex items-center gap-1.5 bg-[#285341] hover:bg-[#1e3f31] text-white font-medium text-[15px] px-6 py-2.5 rounded-md transition-colors">
                    <span className="text-[18px] leading-none mb-0.5">+</span> Add a Friend
                </button>
            </header>

            <div className=" mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center"
                        >
                            <span className="text-[#285341] text-3xl font-bold mb-3">
                                {stat.value}
                            </span>
                            <span className="text-[#6e7b8a] text-[15px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-gray-200 mt-12 mb-4"></div>
            </div>
            <Suspense fallback={<Fallback />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
                    {data.map(item => <ProfileCard key={item.id} item={item} />)}
                </div>
            </Suspense>
        </>
    )
}

export default HomeContent