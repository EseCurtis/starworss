import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

export default function Layout({
  main,
  sidebar,
}: {
  main: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div className="w-screen h-screen p-3 grid grid-cols-4 gap-3">
      <Sidebar>{sidebar}</Sidebar>
      <MainPage>{main}</MainPage>
    </div>
  );
}
