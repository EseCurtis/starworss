import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { LisitingItem_skeleton, ListingItem } from "@/components/ListingItem";
import DomCondition from "@/components/DomCondition";
import { StateType } from "@/store/initalState";
import { BiSad } from "react-icons/bi";

export default function Characters() {
  const characters = useSelector((state: StateType) => state.characters);
  const charactersFetchStatus = useSelector(
    (state: StateType) => state.charactersFetchStatus
  );
  
  const charactersFetchStatusMessage = useSelector(
    (state: StateType) => state.charactersFetchStatusMessage
  );

  const characterItemTwStyle =
    "w-[100%] h-[auto] max-[300px]:w-[100%] max-[760px]:mx-[auto] res2:w-[45%] sm:w-[100%]  res3:w-[45%] lg:w-[33%] 2xl:w-[33%] xl:w-[33%] l-animate--fade-in-up";

  return (
    <div className="flex justify-between flex-wrap h-full gap-4 mt-4 pr-5 min-[300px]:pr-0 l-animate--fade-in-up duration-[3s]">
      <DomCondition condition={charactersFetchStatus == "LOADING"}>
        {Array.from({ length: 9 }).map((j: any, i: number) => (
          <Fragment key={`skeleton_${i}`}>
            <div className={`${characterItemTwStyle} h-[200px]`}>
              <LisitingItem_skeleton />
            </div>
          </Fragment>
        ))}
      </DomCondition>

      <DomCondition condition={charactersFetchStatus == "SUCCESS"}>
        {characters?.map((data: any, i: number) => (
          <Fragment key={i}>
            <div className={characterItemTwStyle}>
              <ListingItem data={data} />
            </div>
          </Fragment>
        ))}
      </DomCondition>

      <DomCondition condition={charactersFetchStatus == "ERROR"}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="gap-3 p-4 flex items-center justify-center border rounded-lg border-white/10 bg-white/10 l-animate--fade-in-up mb-[7em]">
            <BiSad/>
            {charactersFetchStatusMessage}
          </div>
        </div>
      </DomCondition>
    </div>
  );
}
