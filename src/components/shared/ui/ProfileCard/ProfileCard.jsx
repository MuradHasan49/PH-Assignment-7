import Image from "next/image";

export default function ProfileCard({ item }) {
    const { picture, name, days_since_contact, status, tags } = item;
    const validation = status == "almost due" ? "bg-[#eeb14e]" : status == "overdue" ? "bg-red-500" : "bg-[#2c784c]"
    return (
        <div className=" bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-gray-50 p-6 flex flex-col items-center">

            <Image
                width={84}
                height={84}
                src={picture}
                alt="Profile"
                className="rounded-full object-cover mb-4"
            />
            <h2 className="text-[#2a3441] text-[18px] font-bold mb-1">
                {name}
            </h2>
            <p className="text-[#838c9b] text-[13px] mb-4">
                {days_since_contact}d ago
            </p>

            <div className="flex flex-col gap-2.5 items-center mt-1">
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
                <span className={` ${validation} text-white text-[13px] font-medium px-4 py-1.5 rounded-full uppercase`}>
                    {status}
                </span>
            </div>

        </div>
    );
}