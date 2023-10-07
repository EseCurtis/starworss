import { FC } from "react";
import { BiDumbbell, BiRuler, BiSmile } from "react-icons/bi";
import { BsGenderTrans } from "react-icons/bs";
import Info from "./components/Info";

export const LisitingItem_skeleton = () => {
  return (
    <div className="w-full h-full rounded-lg flex flex-col gap-2 p-2 animate-pulse">
      <div className="bg-gray-300 w-full h-[200px] rounded-lg"></div>
      <div className="w-full flex gap-1">
        <div className="flex flex-col w-[50%] gap-1">
          <div className="flex gap-1 w-full ">
            <span className="p-1 rounded-full bg-gray-300 w-10" />
            <span className="p-1 rounded-full bg-gray-300" />
          </div>
          <span className="p-1 rounded-full bg-gray-300 w-20" />
          <span className="p-1 rounded-full bg-gray-300 w-12" />
        </div>
        <div className="flex flex-col items-end w-[50%] gap-1">
          <div className="flex justify-end gap-1 w-full">
            <span className="p-2 rounded-full bg-gray-300" />
            <span className="p-2 rounded-md bg-gray-300 w-6" />
          </div>
          <span className="p-1 rounded-full bg-gray-300 w-10" />
        </div>
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
    <div className="w-full h-full  flex justify-center flex-col gap-2 p-2  bg-[#0000004f] backdrop-blur-xl border border-white/10  rounded-lg text-white">
      <div className="w-full  flex flex-col p-3 bg-[#ffffff00] rounded-lg">
        {infoData.map((item, i) => (
          <Info key={i} {...item} />
        ))}
      </div>
      <div className="w-full flex gap-1">
        <div className="flex flex-col w-[50%] gap-1">
        </div>
        <div className="flex flex-col items-end w-[50%] gap-1">
         
        </div>
      </div>
    </div>
  );
};
