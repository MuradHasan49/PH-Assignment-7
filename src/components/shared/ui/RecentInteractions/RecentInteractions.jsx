"use client"
import { BiSolidMessageDetail } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa';
import { FaRegFileVideo } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const RecentInteractions = ({ interactionsData }) => {

    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-4 lg:p-8">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[#112D23] text-lg lg:text-2xl font-bold">Recent Interactions</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-[#4B5563] hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition-all duration-300 group">
                    <FaHistory className="text-gray-400 group-hover:text-white transition-colors" />
                    Full History
                </button>
            </div>

            <div className="flex flex-col">
                {
                    interactionsData.map((item, ind) => (
                        <div key={ind} className="group">
                            <div className={`flex items-center justify-between gap-2 py-5 ${ind === interactionsData.length - 1 ? "" : "border-b border-gray-100"}`}>
                                <div className="flex items-center gap-5">

                                    <div className={`p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${item.action === "call" ? "bg-blue-50 text-blue-600" :
                                        item.action === "text" ? "bg-green-50 text-green-600" :
                                            "bg-purple-50 text-purple-600"
                                        }`}>
                                        {item.action === "call" ? <IoCall className="text-2xl" /> :
                                            item.action === "text" ? <BiSolidMessageDetail className="text-2xl" /> :
                                                <FaRegFileVideo className="text-2xl" />}
                                    </div>

                                    <div className="flex flex-col gap-0.5">
                                        <span className={`text-sm font-bold uppercase tracking-wider ${item.action === "call" ? "text-blue-700" :
                                            item.action === "text" ? "text-green-700" :
                                                "text-purple-700"
                                            }`}>
                                            {item.action}
                                        </span>
                                        <span className="text-[#374151] text-[15px] font-medium">
                                            {item.action === "text" ? "Asked for career advice" :
                                                item.action === "call" ? "Industry conference meetup" :
                                                    "Asked for online Conferences"}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[#9CA3AF] text-xs font-semibold bg-gray-50 px-3 py-1 rounded-full uppercase">
                                    {item.timestamp}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RecentInteractions;