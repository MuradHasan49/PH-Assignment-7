"use client"
import { InteractionsDataCotext } from '@/components/ContextApi/GlobalsContext'
import NoDataFound from '@/components/shared/NoDataFound/NoDataFound'
import { useContext, useState } from 'react'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { FaRegFileVideo } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'

const TimeLinePage = () => {
  const { interactionsData } = useContext(InteractionsDataCotext)

  const Calls = interactionsData.filter(item => item.action == "call")
  const Texts = interactionsData.filter(item => item.action == "text")
  const Videos = interactionsData.filter(item => item.action == "video")

  const [data, setdata] = useState(interactionsData)

  const DataFilter = (currentValue) => {
    setdata(currentValue)
  }

  return (
    <>
      <div className="container mx-auto p-8 font-sans bg-[#f8fafc] min-h-screen">
        {
          data.length == 0 ? <NoDataFound /> :
            <>
              <h1 className="text-[#1a2533] text-[36px] font-bold tracking-tight mb-8">
                Timeline
              </h1>
              <div className="relative w-full max-w-75">
                <select
                  onChange={(e) => DataFilter(e.target.value == 2 ? Calls : e.target.value == 3 ? Texts : e.target.value == 4 ? Videos : interactionsData)}
                  className="w-60 h-10 border rounded-md border-gray-600/60 outline-none px-2"
                >
                  <option value="1">All Interactions</option>
                  <option value="2">Calls only</option>
                  <option value="3">Text only</option>
                  <option value="4">Video only</option>
                </select>
              </div>

              {
                data.map((item, ind) => (


                  <div key={ind} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] my-5">
                    <div className="text-[28px] leading-none pb-1">
                      {item.action == "call" ? <IoCall className="text-3xl text-gray-800" /> : item.action == "text" ? <BiSolidMessageDetail className="text-3xl text-gray-800" /> : <FaRegFileVideo className="text-3xl text-gray-800" />}

                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[16px] text-[#64748b]">
                        <span className="font-extrabold text-[#214a3d]">{item.action == "text" ? "Text" : item.action == "call" ? "Call" : "Video"}</span> with {item.user.name}
                      </p>
                      <p className="text-[14px] text-[#64748b]">
                        {item.timestamp}
                      </p>
                    </div>
                  </div>
                ))
              }
            </>
        }
      </div>
    </>
  )
}

export default TimeLinePage