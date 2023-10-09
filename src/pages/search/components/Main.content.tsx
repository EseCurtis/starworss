import Characters from "@/pages/home/components/main/Characters";
import { BiGlobe } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import styles from "@/utils/customStyles.module.css";
import Pagination from "@/components/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "@/store/initalState";
import BrandLogo from "@/components/Brand";

export default function MainContent() {
  const [searchParams] = useSearchParams();
  const characters_api_url = useSelector((state: StateType) => state.characters_api_url);
  const searchResults = useSelector((state: StateType) => state.paginationData.count);
  const dispatcher = useDispatch();
  const query = searchParams.get("q");
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    dispatcher({ type: "FETCH_ALL_CHARACTERS", payload: { 
        currentPage, 
        dispatcher, 
        alternateEndpoint: `${characters_api_url}/?search=${query}&page=${currentPage}`
    }})
  }, [query, currentPage])

  return (
    <div className="w-full h-full flex flex-col items-start justify-start  text-white relative max-[1050px]:pl-4">
      <div className="h-full w-full z-[3] flex flex-col pl-2">
        <div className="w-full relative z-10">
          <div className="flex justify-start rounded-lg text-white p-5 backdrop-blur-sm border border-white/10 max-[1050px]:p-1 max-[1050px]:justify-start">
            <div className="flex items-center px-3">
                <BrandLogo/>
            </div>
            <div className="ml-auto">
                <Pagination urlPattern={`?q=${query}&page=`}/>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-start text-[17px] mt-5 pb-5 min-[300px]:pl-0">
          <BiGlobe className="text-yellow-500" />
          <h1 className="font-bold-sm  min-[300px]:text-[12px]">Results for "{query}" ({searchResults})</h1>
        </div>
        <div className={`${styles.custom_scrollbar} overflow-y-auto h-full pb-2 w-full`} >
          <Characters />
        </div>
      </div>
    </div>
  );
}
