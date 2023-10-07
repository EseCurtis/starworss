import { FC, useState, useRef, useEffect } from "react";
import { BiSolidBookmark, BiSolidChevronDown, BiSolidChevronUp, BiSolidSmile } from "react-icons/bi";

export const FavoritedItem_skeleton = () => {
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

export const FavoritedItem: FC<FavoritedItemProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const componentRef = useRef<any>(null);

  const toggleChevron = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (componentRef.current && !componentRef.current?.contains(e?.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className=" h-full rounded-lg flex flex-col gap-2 p-2 hover:opacity-90 transition-[0.4s] text-black max-[1050px]:pl-0"
      ref={componentRef}
    >
      <div className=" border-2 border-[#ffffff10] w-full block flex-col p-3 backdrop-blur-xl text-white bg-black/10 rounded-lg">
        <div className="flex gap-2">
          <b className="flex items-center gap-[2px]">
            <BiSolidSmile className="text-blue-400" />
          </b>
          <p className="max-[1050px]:whitespace-nowrap">{data?.name}</p>

          <div className="flex items-center gap-4 ml-auto">
            <BiSolidBookmark className="text-yellow-400 hover:opacity-70 cursor-pointer" />
            <div className="chevron">
              {isExpanded ? (
                <BiSolidChevronUp
                  className="text-blue-400 hover:opacity-70 cursor-pointer"
                  onClick={toggleChevron}
                />
              ) : (
                <BiSolidChevronDown
                  className="text-blue-400 hover:opacity-70 cursor-pointer"
                  onClick={toggleChevron}
                />
              )}
            </div>
          </div>
        </div>
        <div
          className={`flex-col text-sm transition-[0.4s] ${
            isExpanded ? 'max-h-full pt-3' : 'max-h-0 overflow-hidden p-0'
          }`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur distinctio inventore laborum! Earum repellendus veniam, at deserunt quasi enim!
        </div>
      </div>
    </div>
  );
};