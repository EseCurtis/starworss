import { BiGlobe } from "react-icons/bi";
import RandomShape from "../../../components/RandomShape";
import Characters from "./main/Characters";
import styles from "../../../utils/customStyles.module.css";
import Header from "./main/Header";

export default function MainContent() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start pr-3 text-white relative max-[1050px]:pl-4">
      <div className="h-full w-full z-[3] flex flex-col pl-2">
        <div className="w-full relative z-10">
          <Header/>
        </div>
        <div className="flex gap-2 items-center justify-start text-[17px] mt-5 pb-5 min-[300px]:pl-0">
          <BiGlobe className="text-yellow-500" />
          <h1 className="font-bold-sm  min-[300px]:text-[12px]  ">All Characters</h1>
        </div>
        <div
          className={`${styles.custom_scrollbar} overflow-y-auto h-full pb-2`}
        >
          <Characters />
        </div>
      </div>
    </div>
  );
}
