import { ReactNode } from "react";
export default function MainPage ({ children }: { children: ReactNode }) {
    return (
        <div className="col-span-3 row-span-1 h-full max-h-full overflow-hidden p-3" >
            { children }
        </div>
    )
}