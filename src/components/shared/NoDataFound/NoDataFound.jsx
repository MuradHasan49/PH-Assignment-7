import Link from "next/link";
import { SiTimescale } from "react-icons/si";

const NoDataFound = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center p-10 mt-10 rounded-2xl  border border-gray-600/30 bg-base-200/50 backdrop-blur-md">
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
        <div className="relative z-10 p-5 rounded-full bg-linear-to-tr from-base-300 to-base-100 border border-gray-600/50 shadow-xl">
          <SiTimescale className="text-3xl md:text-6xl lg:text-9xl"/>
        </div>
      </div>


      <h3 className="text-xl font-bold tracking-tight text-base-content">
        No History Log Found
      </h3>

      <div className="mt-6">
        <Link href={"/"}> <button className="btn  btn-outline btn-accent">Back Home</button> </Link>
      </div>
    </div>
  );
};

export default NoDataFound;