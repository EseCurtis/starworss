import { BiArrowToRight } from "react-icons/bi";

export default function Info ({ label, icon, value} : { label: any, icon: any, value: string}) {
    return (
        <div className="flex gap-3 w-full">
          <b className="flex items-center gap-2">
          {icon}{label} <BiArrowToRight/>
          </b>
          <p>{value}</p>
        </div>
    )
}