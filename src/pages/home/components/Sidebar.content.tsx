import { BiHappyHeartEyes } from "react-icons/bi";
import styles from "../../../utils/customStyles.module.css";
import { Fragment } from "react";
import { FavoritedItem } from "../../../components/FavoritedItem";
import Characters from "./sidebar/Characters";

export default function SidebarContent() {
  return (
    <div className="w-full h-full flex flex-col py-5 px-2 bg-gray-100 rounded-lg">
      <div className="flex gap-2 items-center justify-center text-[20px]">
        <h1 className="font-bold">Your Favorites </h1>
        <BiHappyHeartEyes className="text-yellow-500" />
      </div>

      <Characters/>
    </div>
  );
}
