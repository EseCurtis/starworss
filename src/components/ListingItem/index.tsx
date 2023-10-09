import { FC, useEffect, useState } from "react";
import {
  BiBookmark,
  BiDumbbell,
  BiInfoCircle,
  BiRuler,
  BiSmile
} from "react-icons/bi";
import { BsGenderTrans } from "react-icons/bs";
import InfoField from "@/components/InfoField";
import SkeletonLine from "@/components/SkeletonLine";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const LisitingItemTwStyles =
  "w-full  flex justify-center flex-col gap-2 p-2  bg-[#0000004f] backdrop-blur-xl border border-white/10  rounded-lg text-white";

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
  const [itemId, setItemId] = useState(null);
  const dispatcher = useDispatch();

  const addToFavorites = (data: any) => {
    dispatcher({ type: "ADD_FAVORITE", payload: { dispatcher, character: {...data, id: itemId } }  })
  }

  useEffect(() => {
    setItemId(data?.url.trim().split("/").reverse()[1]);
  }, [data.url]);

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
      <div className="w-full h-[170px] flex items-start bg-gray-200 overflow-hidden">
        <img
          className="object-contain w-full"
          src={`http://localhost:3000/search-images?q=${data?.name}`}
          alt=""
        />
      </div>

      <div className="w-full  flex flex-col p-3 rounded-lg relative">
        {infoData.map((item, i) => (
          <InfoField key={i} {...item} />
        ))}
      </div>

      <div className="w-full flex gap-1">
        <div className="flex flex-col w-[50%] gap-1"></div>
        <div className="flex flex-col items-end w-[50%] gap-1"></div>
      </div>

      <div className="w-full flex flex-col items-center p-3 gap-2">
        <button onClick={() => addToFavorites(data)}className=" min-[300px]:text-[12px] flex items-center justify-center w-full border border-2 border-white text-white rounded-full p-3 gap-2">
          Add to Favorites
          <BiBookmark />
        </button>
        <Link to={`/character/${itemId}`} className=" min-[300px]:text-[12px] flex items-center justify-center w-full bg-white text-black rounded-full p-3 gap-2">
          See More <BiInfoCircle className="text-[16px]" />
        </Link>
      </div>
    </div>
  );
};
