import { FC } from "react";
import { BiChevronRight, BiSolidBookmark, BiSolidSmile } from "react-icons/bi";
import SkeletonLine from "../SkeletonLine";

export const FavoritedItem_skeleton = () => {
  return (
    <div className="w-full block  p-3 backdrop-blur-xl text-white bg-black/10 rounded-lg">
        <SkeletonLine /> 
        <p className="opacity-0 h-0">..........</p>
      </div>
  );
};

interface FavoritedItemProps {
  data: any;
}

export const FavoritedItem: FC<FavoritedItemProps> = ({ data }) => {
 

  return (
    <div
      className=" h-full rounded-lg flex flex-col gap-1 p-2 hover:opacity-90 transition-[0.4s] text-black max-[1050px]:pl-0"
    >
      <div className=" border-2 border-[#ffffff10] w-full block flex-col p-3 backdrop-blur-xl text-white bg-black/10 rounded-lg">
        <div className="flex gap-2">
          <b className="flex items-center gap-[2px]">
            <BiSolidSmile className="text-blue-400" />
          </b>
          <p className="max-[1050px]:whitespace-nowrap min-[300px]:text-[12px]">{data?.name}</p>

          <div className="flex items-center gap-4 ml-auto">
            <BiSolidBookmark className="text-yellow-400 hover:opacity-70 cursor-pointer" />
            <BiChevronRight className="text-blue-400 hover:opacity-70 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};