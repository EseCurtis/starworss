import { ReactNode } from "react";
export default function MainPage ({ children, isSingle = false }: { children: ReactNode, isSingle?: boolean }) {
    const optionalTwStyles = !isSingle ? "col-span-3 max-h-full max-[1050px]:h-auto" : "";
    return (
        <div className={`row-span-1 h-[100vh] w-full overflow-hidden p-3 ${optionalTwStyles}`} >
            { children }
        </div>
    )
}