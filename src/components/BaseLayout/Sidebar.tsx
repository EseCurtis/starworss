import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 h-full max-h-[100vh] overflow-hidden max-[1050px]:h-auto relative z-20">
      {children}
    </div>
  );
}
