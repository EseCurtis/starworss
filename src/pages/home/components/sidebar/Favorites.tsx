import React, { useEffect } from "react";
import { Fragment } from "react";
import {
  FavoritedItem,
  FavoritedItem_skeleton
} from "../../../../components/FavoritedItem";
import { useSelector } from "react-redux";

export default function Favorites() {
  const characters = useSelector((state: any) => state.characters);
  const state = useSelector((state: any) => state);

  useEffect(() => {
    console.log(state);
  }, [characters]);

  return (
    <div
        className="grid h-full gap-1 px-6 max-[1050px]:flex max-[1050px]:pl-0"
      >
        {!characters
          ? Array.from({ length: 15 }).map((j: any, i: number) => (
              <Fragment key={`skeleton_${i}`}>
                <div className="h-[auto] max-[1050px]:w-[100%] l-animate--fade-in-up ">
                  <FavoritedItem_skeleton />
                </div>
              </Fragment>
            ))
          : characters?.map((data: any, i: number) => (
              <Fragment key={i}>
                <div className="h-[auto] max-[1050px]:w-[100%] l-animate--fade-in-up ">
                  <FavoritedItem data={data} />
                </div>
              </Fragment>
            ))}
      </div>
  );
}
