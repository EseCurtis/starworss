import BasicInput from "@/components/Input";
import Pagination from "@/components/Pagination";
import { FaTimes } from "react-icons/fa";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="flex flex-wrap-reverse items-center res4:p-4 res4:justify-center justify-end gap-4 rounded-lg text-white res3:p-5 backdrop-blur-sm border border-white/10 max-[1050px]:p-1 max-[1050px]:justify-start">
      <SearchBox/>
      <div className=" lg:ml-auto res3:ml-auto sm:ml-0 my-3 res4:justify-center">
        <Pagination />
      </div>
    </div>
  );
}
