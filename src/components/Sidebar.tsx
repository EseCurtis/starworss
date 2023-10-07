import { ReactNode } from "react";
export default function Sidebar ({ children }: { children: ReactNode }) {
    return (
        <div className="col-span-1">
            { children } 
        </div>
    )
}