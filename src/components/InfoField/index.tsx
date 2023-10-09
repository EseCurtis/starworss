import { BiArrowToRight } from "react-icons/bi";

export default function InfoField ({ label, icon, value} : { label: any, icon: any, value: string}) {
    return (
        <div className="flex gap-3 w-full">
          <b className="flex items-center gap-2 min-[300px]:text-[12px]">
          {icon}{label} <BiArrowToRight/>
          </b>
          <p className=" min-[300px]:text-[12px]">{value}</p>
        </div>
    )
}