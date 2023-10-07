import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { LisitingItem_skeleton, ListingItem } from "../../../../components/ListingItem";

export default function Characters() {
  const characters = useSelector((state: any) => state.characters);
  const state = useSelector((state: any) => state);

  useEffect(() => {
    console.log(state)
  }, [characters])

  return (
    <div
      className="flex justify-between flex-wrap h-full gap-4 mt-4 pr-5 l-animate--fade-in-up duration-[3s]"
    >
      {(!characters) ? (
        Array.from({ length: 15 }).map((j: any, i: number) => (
          <Fragment key={`skeleton_${i}`}>
            <div className="w-[30%] h-[auto]">
              <LisitingItem_skeleton />
            </div>
          </Fragment>
        ))
      ) : (
        characters?.map((data: any, i: number) => (
          <Fragment key={i}>
            <div className="w-[32%] h-[auto]  max-[1162px]:w-[45%] max-[760px]:w-[95%] max-[760px]:mx-[auto] l-animate--fade-in-up">
              <ListingItem data={data} />
            </div>
          </Fragment>
        ))
        
      )}
    </div>
  );
}
