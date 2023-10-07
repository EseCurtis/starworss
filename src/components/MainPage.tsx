import { ReactNode } from "react";
export default function MainPage ({ children }: { children: ReactNode }) {
    return (
        <div className="col-span-3">
            { children }
        </div>
    )
}