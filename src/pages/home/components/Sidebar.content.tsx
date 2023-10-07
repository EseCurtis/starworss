import { BiHappyHeartEyes } from "react-icons/bi";
import styles from "../../../utils/customStyles.module.css";
import { Fragment } from "react";
import { FavoritedItem } from "../../../components/FavoritedItem";

export default function SidebarContent() {
  return (
    <div className="w-full h-full flex flex-col py-5 px-2 bg-gray-100 rounded-lg">
      <div className="flex gap-2 items-center justify-center text-[20px]">
        <h1 className="font-bold">Your Favorites </h1>
        <BiHappyHeartEyes className="text-yellow-500" />
      </div>

      <div
        className={`${styles.custom_scrollbar} grid h-full overflow-y-scroll gap-4 mt-4 px-6`}
      >
        {Array.from({ length: 3 }).map((j, i) => (
          <Fragment key={i}>
            <div className="h-[200px]">
                <FavoritedItem />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
