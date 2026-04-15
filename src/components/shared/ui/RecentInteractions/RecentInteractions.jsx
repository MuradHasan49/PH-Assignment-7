"use client"
import { BiSolidMessageDetail } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa';
import { FaRegFileVideo } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

export default function RecentInteractions({ interactionsData }) {

    const a = interactionsData.map(item => item)
    return (
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 p-1 lg:p-8">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#112D23] text-lg lg:text-2xl font-semibold">Recent Interactions</h2>
                <button  className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-md text-sm font-medium text-[#4B5563] hover:bg-gray-100 transition-colors">
                    <FaHistory className="text-gray-500" />
                    Full History
                </button>
            </div>

            <div className="flex flex-col">
                {
                    interactionsData.map((item, ind) => (
                        <div key={ind}>
                            <div className="flex items-center justify-between gap-2 py-6 border-b border-gray-500/50">
                                <div className="flex items-center gap-6">

                                    {item.action == "call" ? <IoCall className="text-3xl text-gray-800" /> : item.action == "text" ? <BiSolidMessageDetail className="text-3xl text-gray-800" /> : <FaRegFileVideo className="text-3xl text-gray-800" />}

                                    <div className="flex flex-col">
                                        <span className="text-[#1F2937] text-lg font-medium uppercase">{item.action}</span>
                                        <span className="text-[#6B7280] text-[15px]">{item.action == "text" ? "Asked for career advice" : item.action == "call" ? "Industry conference meetup" : "Asked for online Conferences"}</span>
                                    </div>
                                </div>
                                <span className="text-[#6B7280] text-[15px]">{item.timestamp}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}