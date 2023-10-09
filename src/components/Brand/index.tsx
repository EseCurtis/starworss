import { BiSolidRocket } from "react-icons/bi";

export default function BrandLogo () {
    return (
        <h1 className="font-bold font-star-wars flex gap-3 items-center relative">
          StarWars
          <span className="flex h-3 w-3 animate-ping bg-blue-400 rounded-full absolute right-0 top-0"></span>
          <BiSolidRocket />
        </h1>
    )
}