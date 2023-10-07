import React, { useEffect } from "react";
import { Fragment } from "react";
import {
  FavoritedItem,
  FavoritedItem_skeleton
} from "../../../../components/FavoritedItem";
import styles from "../../../../utils/customStyles.module.css";
import { useSelector } from "react-redux";

export default function Characters() {
  const characters = useSelector((state: any) => state.characters);
  const state = useSelector((state: any) => state);

  useEffect(() => {
    console.log(state)
  }, [characters])

  return (
    <div
      className={`${styles.custom_scrollbar}  flex justify-between flex-wrap h-full overflow-y-scroll gap-4 mt-4 pr-5 l-animate--fade-in-up duration-[3s]`}
    >
      {(!characters) ? (
        Array.from({ length: 15 }).map((j: any, i: number) => (
          <Fragment key={`skeleton_${i}`}>
            <div className="w-[30%] h-[auto]">
              <FavoritedItem_skeleton />
            </div>
          </Fragment>
        ))
      ) : (
        characters?.map((data: any, i: number) => (
          <Fragment key={i}>
            <div className="w-[32%] h-[auto] l-animate--fade-in-up duration-[3s]">
              <FavoritedItem data={data} />
            </div>
          </Fragment>
        ))
      )}
    </div>
  );
}
