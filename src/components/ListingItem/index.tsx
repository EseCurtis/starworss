import { FC } from "react";
import { BiDumbbell, BiRuler, BiSmile } from "react-icons/bi";
import { BsGenderTrans } from "react-icons/bs";
import Info from "./components/Info";
import SkeletonLine from "../SkeletonLine";

const LisitingItemTwStyles = "w-full  flex justify-center flex-col gap-2 p-2  bg-[#0000004f] backdrop-blur-xl border border-white/10  rounded-lg text-white"

export const LisitingItem_skeleton = () => {
  return (
    <div className={`h-auto ${LisitingItemTwStyles}`}>
      <div className="w-full  flex flex-col p-3 bg-[#ffffff00] rounded-lg gap-1">
        {Array.from({ length: 3 }).map((item: any, i: any) => (
          <SkeletonLine key={i} />
        ))}
      </div>
    </div>
  );
};

interface FavoritedItemProps {
  data: any;
}

export const ListingItem: FC<FavoritedItemProps> = ({ data }) => {
  const infoData = [
    {
      label: "Name",
      icon: <BiSmile className="text-blue-400" />,
      value: data?.name
    },
    {
      label: "Height",
      icon: <BiRuler className="text-blue-400" />,
      value: data?.height
    },
    {
      label: "Mass",
      icon: <BiDumbbell className="text-blue-400" />,
      value: data?.mass
    },
    {
      label: "Gender",
      icon: <BsGenderTrans className="text-blue-400" />,
      value: data?.gender
    }
  ];

  return (
    <div className={LisitingItemTwStyles}>
      <div className="w-full  flex flex-col p-3 bg-[#ffffff00] rounded-lg">
        {infoData.map((item, i) => (
          <Info key={i} {...item} />
        ))}
      </div>
      <div className="w-full flex gap-1">
        <div className="flex flex-col w-[50%] gap-1"></div>
        <div className="flex flex-col items-end w-[50%] gap-1"></div>
      </div>
    </div>
  );
};
