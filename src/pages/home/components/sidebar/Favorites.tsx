import { Fragment, useEffect } from "react";
import {
  FavoritedItem,
  FavoritedItem_skeleton
} from "@/components/FavoritedItem";
import { useDispatch, useSelector } from "react-redux";
import DomCondition from "@/components/DomCondition";
import { StateType } from "@/store/initalState";

export default function Favorites() {
  const favoritedCharacters = useSelector((state: StateType) => state.favoritedCharacters);
  const characters = useSelector((state: StateType) => state.characters);
  const favoritedCharactersFetchStatus = useSelector((state: StateType) => state.favoritedCharactersFetchStatus);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher({ type: "FETCH_FAVORITES", payload: { dispatcher } });
  }, [characters]);

  return (
    <div className="flex h-full gap-1 px-6 md:flex-row res1:flex-row sm:flex-row lg:flex-col xl:flex-col res3:flex-col  max-[1050px]:pl-0 pt-3">
      <DomCondition condition={favoritedCharactersFetchStatus == "LOADING"}>
        {Array.from({ length: 15 }).map((j: any, i: number) => (
          <Fragment key={`skeleton_${i}`}>
            <div className="h-[auto]  max-[1050px]:w-[100%] l-animate--fade-in-up ">
              <FavoritedItem_skeleton />
            </div>
          </Fragment>
        ))}
      </DomCondition>

      <DomCondition condition={favoritedCharactersFetchStatus == "SUCCESS"}>
        {favoritedCharacters?.map((data: any, i: number) => (
          <Fragment key={i}>
            <div className="h-[auto] w-[auto] l-animate--fade-in-up ">
              <FavoritedItem data={data} />
            </div>
          </Fragment>
        ))}
      </DomCondition>

      <DomCondition condition={favoritedCharactersFetchStatus == "ERROR"}>
        <h3>{favoritedCharactersFetchStatus}</h3>
      </DomCondition>

      <DomCondition condition={favoritedCharacters.length < 1}>
        <h3 className="px-2 animate-pulse">No favorites yet!</h3>
      </DomCondition>
    </div>
  );
}
