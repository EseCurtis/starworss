import BrandLogo from "@/components/Brand";
import { StateType } from "@/store/initalState";
import { BiChevronLeft, BiSolidRocket } from "react-icons/bi";
import { useSelector } from "react-redux";

interface characterType {
    name?: string
}

export default function Character() {
  const character: characterType = useSelector((state: StateType) => state.character);

  return (
    <div className="h-full w-full borderborder-[#f00] grid grid-rows-6 gap-2">
        <div className=" row-span-1 flex items-center w-full h-[auto] p-3 justify-between">
            <b className="flex gap-2 items-center bg-white/10 border border-white/20 p-3 rounded-lg"><BiChevronLeft/> Go Back</b>
            <div className="mx-auto pr-[100px] ">
                <BrandLogo/>
            </div>
        </div>

        <div className="mx-3 h-full row-span-5 w-full flex justify-center items-center rounded-lg">
            <div className="p-4 bg-[#0000004f] backdrop-blur-xl border border-white/10  rounded-lg text-white max-w-[70vw] overflow-hidden">
                <img src={`http://localhost:3000/search-images?q=${character?.name}`} alt="" />
            </div>
        </div>
    </div>
  );
}
