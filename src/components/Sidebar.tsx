import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-1 h-full max-h-full overflow-hidden">
      {children}
    </div>
  );
}
