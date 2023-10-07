import { Fragment } from "react";
import styles from "../../../utils/customStyles.module.css";
import { FavoritedItem } from "../../../components/FavoritedItem";

export default function MainContent() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center overflow-hidden pr-3 border-red-500">
      <div className="w-full pl-2">
        <div className=" bg-[#070811] rounded-lg text-white p-5">
            <h3 className="font-bold">Header</h3>
        </div>
      </div>

      <div
        className={`${styles.custom_scrollbar}  flex justify-between flex-wrap h-full overflow-y-scroll gap-4 mt-4 pr-5`}
      >
        {Array.from({ length: 15 }).map((j, i) => (
          <Fragment key={i}>
            <div className="w-[30%] h-[auto]">
                <FavoritedItem />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
