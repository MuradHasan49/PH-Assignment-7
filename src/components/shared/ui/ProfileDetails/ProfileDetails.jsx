"use client"
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa"
import { FaInbox, FaPencil, FaRegBell, FaRegCommentDots, FaRegFileVideo, FaRegTrashCan } from "react-icons/fa6"
import RecentInteractions from "../RecentInteractions/RecentInteractions";
import { useContext, useState } from "react";
import { InteractionsDataCotext } from "@/components/ContextApi/GlobalsContext";

const ProfileDetails = ({ specificUser }) => {
    const { picture, name, days_since_contact, status, tags, email, bio, next_due_date, goal } = specificUser;
    const { interactionsData, setInteractionsData } = useContext(InteractionsDataCotext)

    const handleInput = (type) => {
        const readableTimestamp = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).replace(',', ' -');
        const newEntry = {
            user: specificUser,
            action: type,
            timestamp: readableTimestamp
        };

        setInteractionsData([newEntry, ...interactionsData]);
    };
    return (
        <>
            <div className="min-h-screen  p-10 font-sans text-gray-900">
                <div className="container mx-auto flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
                        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center text-center border border-gray-100">
                            <Image
                                width={112}
                                height={112}
                                src={picture}
                                alt={name}
                                className=" rounded-full object-cover mb-6 border-4 border-white shadow-inner"
                            />
                            <h1 className="text-gray-900 text-3xl font-bold mb-3" > {name} </h1>

                            <div className="flex flex-col gap-2.5 items-center mb-6">
                                <span className="bg-[#FF4D4D] text-white text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    {status}
                                </span>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map((item, ind) => (
                                        <span
                                            key={ind}
                                            className="bg-[#d4f8e3] text-[#2c784c] text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            <p className="text-gray-600 text-[15px] italic leading-relaxed max-w-sm mb-4">
                                {bio}
                            </p>
                            <p className="text-gray-500 text-[13px]">
                                Preferred: <span className="font-medium">{email}</span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button className="flex items-center gap-3.5 bg-white border border-gray-100 rounded-lg p-5 w-full text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                                <FaRegBell className="text-xl" />
                                Snooze 2 Weeks
                            </button>
                            <button className="flex items-center gap-3.5 bg-white border border-gray-100 rounded-lg p-5 w-full text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                                <FaInbox className="text-xl" />
                                Archive
                            </button>
                            <button className="flex items-center gap-3.5 bg-white border border-gray-100 rounded-lg p-5 w-full text-lg font-medium text-red-600 hover:bg-red-50 transition-colors">
                                <FaRegTrashCan className="text-xl" />
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center text-center border border-gray-100">
                                <span className="text-[#0D382B] text-5xl font-extrabold mb-3">{days_since_contact}</span>
                                <span className="text-gray-600 text-base">Days Since Contact</span>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center text-center border border-gray-100">
                                <span className="text-[#0D382B] text-5xl font-extrabold mb-3">{goal}</span>
                                <span className="text-gray-600 text-base">Goal Days</span>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center text-center border border-gray-100">
                                <span className="text-[#0D382B] text-3xl xl:text-4xl font-extrabold mb-3">{next_due_date}</span>
                                <span className="text-gray-600 text-base">Next Due</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border border-gray-100">
                            <div>
                                <h3 className="text-[#0D382B] text-2xl font-bold mb-3">Relationship Goal</h3>
                                <p className="text-gray-700 text-lg">
                                    Connect every <strong className="font-bold"> {goal} days</strong>
                                </p>
                            </div>
                            <button className="flex items-center gap-2.5 bg-[#F3F4F6] border border-gray-200 rounded-lg px-6 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                                <FaPencil className="text-sm" />
                                Edit
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-10 border border-gray-100">
                            <h3 className="text-[#0D382B] text-2xl font-bold mb-8">Quick Check-In</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <button onClick={() => handleInput("call")} className="flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] border border-gray-100 rounded-xl p-8 text-xl font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                                    <FaPhoneAlt className="text-4xl text-gray-800" />
                                    Call
                                </button>
                                <button onClick={() => handleInput("text")} className="flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] border border-gray-100 rounded-xl p-8 text-xl font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                                    <FaRegCommentDots className="text-4xl text-gray-800" />
                                    Text
                                </button>
                                <button onClick={() => handleInput("video")} className="flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] border border-gray-100 rounded-xl p-8 text-xl font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                                    <FaRegFileVideo className="text-4xl text-gray-800" />
                                    Video
                                </button>
                            </div>
                        </div>
                        <RecentInteractions interactionsData={interactionsData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails