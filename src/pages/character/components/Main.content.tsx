
import DomCondition from "@/components/DomCondition";
import { StateType } from "@/store/initalState";
import { useSelector } from "react-redux";



export default function MainContent() {
  const character = useSelector((state: StateType) => state.character);
  const characterFetchStatus = useSelector((state: StateType) => state.characterFetchStatus);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pr-3 text-white relative max-[1050px]:pl-4">
      <DomCondition condition={characterFetchStatus == "LOADING"}>
        <h1 className="text-[40px] animate-pulse">Loading</h1>
      </DomCondition>

      <DomCondition condition={characterFetchStatus == "SUCCESS"}>
        <h1 className="text-[40px]">{JSON.stringify(character)}</h1>
      </DomCondition>

      <DomCondition condition={characterFetchStatus == "ERROR"}>
        <h1 className="text-[40px] animate-bounce">ERROR</h1>
      </DomCondition>
    </div>
  );
}
