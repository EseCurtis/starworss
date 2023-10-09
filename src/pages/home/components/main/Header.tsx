import BasicInput from "@/components/Input";
import Pagination from "@/components/Pagination";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-end rounded-lg text-white p-5 backdrop-blur-sm border border-white/10 max-[1050px]:p-1 max-[1050px]:justify-start">
      <div className="relative">
        <BasicInput twStyles=" min-[300px]:text-[12px] p-3 rounded-lg border border-white/10 bg-white/10 focus:border-blue-500 max-w-[100%] min-[300px]:w-[100%]" placeholder="/ Search for a character"/>
      
        <div className="absolute max-w-[90vw] w-auto p-3 bg-black border border-white/10 rounded-lg">
          <p className="flex items-center gap-2 text-sm border-b border-white/10 py-3">
            <span><FaTimes/></span>
            <span>Luke skyWalker</span>
          </p>
        </div>
      </div>

      <div className="ml-auto">
        <Pagination/>
      </div>
    </div>
  );
}
