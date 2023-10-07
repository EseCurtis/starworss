import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import RandomShape from "./components/RandomShape";

export default function Layout({
  main,
  sidebar
}: {
  main: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-clip">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 w-full h-full blur-[70px]">
            <div className="h-full w-full relative z-[3] opacity-[0.6]">
              <RandomShape className="bg-[#5050b3] -z-[2] top-[-3] left-0" />
              <RandomShape className="bg-[#50b3ace8] -z-[2] right-4 bottom-0" />
            </div>
          </div>
          <div
            className="absolute w-full h-full z-[3]"
            style={{ background: "url('/dotted-bg.svg')" }}
          />
        </div>
      </div>

      <div className="w-screen h-screen min-h-screen sm:grid min-[1050px]:grid-cols-4 sm:gap-3 grid-cols-1 relative z-10 max-[1050px]:h-auto">
        <Sidebar>{sidebar}</Sidebar>
        <MainPage>{main}</MainPage>
      </div>
    </div>
  );
}
