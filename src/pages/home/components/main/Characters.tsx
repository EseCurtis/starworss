import { Fragment } from "react";
import { useSelector } from "react-redux";
import { LisitingItem_skeleton, ListingItem } from "@/components/ListingItem";
import DomCondition from "@/components/DomCondition";
import { StateType } from "@/store/initalState";

export default function Characters() {
  const characters = useSelector((state: StateType) => state.characters);
  const charactersFetchStatus = useSelector((state: StateType) => state.charactersFetchStatus);
  const charactersFetchStatusMessage = useSelector((state: StateType) => state.charactersFetchStatusMessage);

  const characterItemTwStyle = "w-[32%] h-[auto] max-[300px]:w-[100%]  max-[1162px]:w-[45%] max-[760px]:w-[95%] max-[760px]:mx-[auto] l-animate--fade-in-up";

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
        <h3>{charactersFetchStatusMessage}</h3>
      </DomCondition>
    </div>
  );
}
