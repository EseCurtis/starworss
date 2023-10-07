import { BiSolidRocket, BiSolidBookmark } from "react-icons/bi";
import styles from "../../../utils/customStyles.module.css";
import Favorites from "./sidebar/Favorites";

export default function SidebarContent() {
  return (
    <div className="w-full h-full flex flex-col py-5 px-2 bg-[#00000024] text-white border-r border-white/20">
      <div className="flex gap-2 items-center justify-start text-[20px] px-10 mt-3 mb-5">
        <h1 className="font-bold font-star-wars flex gap-3 items-center relative">
          StarWars
          <span className="flex h-3 w-3 animate-ping bg-blue-400 rounded-full absolute right-0 top-0"></span>
          <BiSolidRocket />
        </h1>
      </div>

      <div className="flex gap-2 items-center justify-start text-[17px] px-8 mt-5 pb-5">
        <h1 className="font-bold-sm min-[300px]:text-[12px]">Your Favorites</h1>
        <BiSolidBookmark className="text-yellow-500" />
      </div>

      <div className={`${styles.custom_scrollbar} h-full overflow-y-auto max-[1050px]:mx-7`}>
        <Favorites />
      </div>
    </div>
  );
}
