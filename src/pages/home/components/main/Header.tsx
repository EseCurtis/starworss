import BasicInput from "@/components/Input";
import Pagination from "@/components/Pagination";
import { FaTimes } from "react-icons/fa";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="flex justify-end rounded-lg text-white p-5 backdrop-blur-sm border border-white/10 max-[1050px]:p-1 max-[1050px]:justify-start">
      <SearchBox/>
      <div className="ml-auto">
        <Pagination />
      </div>
    </div>
  );
}
