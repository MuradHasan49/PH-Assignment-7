"use client"
import { myContext } from '@/components/ContextApi/GlobalsContext';
import { useContext, useEffect } from 'react';
import { BiMessageRoundedDetail, BiPhoneCall, BiVideo } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa';

export default function RecentInteractions({ specificUser }) {
    const { data, setData } = useContext(myContext)
    const validation = data.find(item => item.id == specificUser.id)

    useEffect(() => {
        if (!specificUser) {
            return
        }
        if (!validation) {
            setData([...data, specificUser])
        }
    }, []);

    console.log(data)
    return (
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 p-8  font-sans">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#112D23] text-2xl font-semibold">Recent Interactions</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-md text-sm font-medium text-[#4B5563] hover:bg-gray-100 transition-colors">
                    <FaHistory className="text-gray-500" />
                    Full History
                </button>
            </div>

            <div className="flex flex-col">

                <div className="flex items-center justify-between py-6 border-b border-gray-100">
                    <div className="flex items-center gap-6">
                        <BiMessageRoundedDetail className="text-3xl text-gray-800" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[#1F2937] text-lg font-medium">Text</span>
                            <span className="text-[#6B7280] text-[15px]">Asked for career advice</span>
                        </div>
                    </div>
                    <span className="text-[#6B7280] text-[15px]">Jan 28, 2026</span>
                </div>

                <div className="flex items-center justify-between py-6 border-b border-gray-100">
                    <div className="flex items-center gap-6">
                        <BiPhoneCall className="text-3xl text-gray-800" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[#1F2937] text-lg font-medium">Meetup</span>
                            <span className="text-[#6B7280] text-[15px]">Industry conference meetup</span>
                        </div>
                    </div>
                    <span className="text-[#6B7280] text-[15px]">Jan 28, 2026</span>
                </div>

                <div className="flex items-center justify-between py-6 border-b border-gray-100">
                    <div className="flex items-center gap-6">
                        <BiVideo className="text-3xl text-gray-800" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[#1F2937] text-lg font-medium">Video</span>
                            <span className="text-[#6B7280] text-[15px]">Asked for career advice</span>
                        </div>
                    </div>
                    <span className="text-[#6B7280] text-[15px]">Jan 28, 2026</span>
                </div>

                <div className="flex items-center justify-between py-6">
                    <div className="flex items-center gap-6">
                        <BiPhoneCall className="text-3xl text-gray-800" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[#1F2937] text-lg font-medium">Text</span>
                            <span className="text-[#6B7280] text-[15px]">Asked for career advice</span>
                        </div>
                    </div>
                    <span className="text-[#6B7280] text-[15px]">Jan 28, 2026</span>
                </div>

            </div>
        </div>
    );
}