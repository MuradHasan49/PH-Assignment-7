"use client"
import { InteractionsDataCotext } from '@/components/ContextApi/GlobalsContext'
import NoDataFound from '@/components/shared/NoDataFound/NoDataFound'
import { useContext, useState, useRef, useEffect } from 'react'
import { BiSolidMessageDetail, BiChevronDown } from 'react-icons/bi'
import { FaRegFileVideo } from 'react-icons/fa6'
import { IoCall, IoGrid } from 'react-icons/io5'

const TimeLinePage = () => {
  const { interactionsData } = useContext(InteractionsDataCotext)
  const [data, setdata] = useState(interactionsData)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState("All Interactions")
  const dropdownRef = useRef(null)

  const Calls = interactionsData.filter(item => item.action === "call")
  const Texts = interactionsData.filter(item => item.action === "text")
  const Videos = interactionsData.filter(item => item.action === "video")


  const filterOptions = [
    {
      id: "all",
      label: "All Interactions",
      icon: <IoGrid />,
      data: interactionsData,
      show: true,
      bg: "bg-gray-100",
      text: "text-gray-600"
    },
    {
      id: "call",
      label: "Calls only",
      icon: <IoCall />,
      data: Calls,
      show: Calls.length > 0,
      bg: "bg-blue-50",
      text: "text-blue-600"
    },
    {
      id: "text",
      label: "Text only",
      icon: <BiSolidMessageDetail />,
      data: Texts,
      show: Texts.length > 0,
      bg: "bg-green-50",
      text: "text-green-600"
    },
    {
      id: "video",
      label: "Video only",
      icon: <FaRegFileVideo />,
      data: Videos,
      show: Videos.length > 0,
      bg: "bg-purple-50",
      text: "text-purple-600"
    },
  ]

  const currentOption = filterOptions.find(opt => opt.label === selectedLabel)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleFilter = (filterData, label) => {
    setdata(filterData)
    setSelectedLabel(label)
    setIsOpen(false)
  }

  if (interactionsData.length === 0) return <NoDataFound />

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans bg-[#f8fafc] min-h-screen">
      <h1 className="text-[#1a2533] text-3xl md:text-[36px] font-bold tracking-tight mb-8">Timeline</h1>

      <div className="relative w-full max-w-sm mb-10 z-100" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#244D3F] transition-all duration-300 outline-none"
        >
          <span className="flex items-center gap-3.5 text-sm font-semibold text-gray-800">
            <span className={`p-2 rounded-lg ${currentOption?.bg || 'bg-gray-100'} ${currentOption?.text || 'text-gray-600'}`}>
              {currentOption?.icon || <IoGrid />}
            </span>
            {selectedLabel}
          </span>
          <BiChevronDown className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <div className={`absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl z-[101] overflow-hidden transition-all duration-300 origin-top 
                    ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
          <div className="p-2 space-y-1">
            {filterOptions.map((opt) => opt.show && (
              <button
                key={opt.id}
                onClick={() => handleFilter(opt.data, opt.label)}
                className={`w-full flex items-center gap-4 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium ${opt.id !== 'all' ? opt.text : ""}`}
              >
                <span className={`p-2 rounded-lg text-lg ${opt.bg} ${opt.text}`}>
                  {opt.icon}
                </span>
                {opt.label}
                <span className='ml-auto text-xs text-gray-400'>
                  {opt.data.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, ind) => (
          <div key={ind} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${item.action === "call" ? "bg-blue-50 text-blue-600" :
                item.action === "text" ? "bg-green-50 text-green-600" :
                  "bg-purple-50 text-purple-600"
              }`}>
              {item.action === "call" ? <IoCall className="text-2xl" /> :
                item.action === "text" ? <BiSolidMessageDetail className="text-2xl" /> :
                  <FaRegFileVideo className="text-2xl" />}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[16px] text-gray-500">
                <span className={`font-bold capitalize ${item.action === "call" ? "text-blue-700" :
                    item.action === "text" ? "text-green-700" :
                      "text-purple-700"
                  }`}>{item.action}</span> with {item.user.name}
              </p>
              <p className="text-[14px] text-gray-400">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLinePage