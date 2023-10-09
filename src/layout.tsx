import { ReactNode } from "react";
import Sidebar from "./components/BaseLayout/Sidebar";
import MainPage from "./components/BaseLayout/MainPage";
import RandomShape from "./components/RandomShape";
import DomCondition from "./components/DomCondition";

export default function Layout({
  main,
  sidebar
}: {
  main: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen bg-black relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-clip">
        <div className="relative w-full h-full">
          {/* Background Blur */}
          <div className="absolute inset-0 w-full h-full blur-[70px]">
            <div className="h-full w-full relative z-[3] opacity-[0.6]">
              <RandomShape className="bg-[#5050b3] z-[2] top-[-3] left-0" />
              <RandomShape className="bg-[#50b3ace8] z-[2] right-4 bottom-0" />
            </div>
          </div>
          {/* Dotted Background */}
          <div
            className="absolute w-full h-full z-[3]"
            style={{ background: "url('/dotted-bg.svg')" }}
          />
        </div>
      </div>

      <div className="h-full w-full relative z-20">
          {/* Sidebar and Main Content */}
        <DomCondition condition={!!sidebar}>
          <div className="grid grid-cols-1 res1:grid-cols-4 sm:grid-cols-1">
            <Sidebar>{sidebar}</Sidebar>
            <MainPage>{main}</MainPage>
          </div>
        </DomCondition>

        <DomCondition condition={!!!sidebar}>
          <MainPage isSingle={true}>{main}</MainPage>
        </DomCondition>
      </div>
    </div>
  );
}
