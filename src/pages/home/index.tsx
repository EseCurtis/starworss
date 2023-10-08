import Layout from "@/layout";
import MainContent from "./components/Main.content";
import SidebarContent from "./components/Sidebar.content";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher({ type: "FETCH_ALL_CHARACTERS", payload: { dispatcher } });
  }, [dispatcher])

  return (<Layout main={<MainContent />} sidebar={<SidebarContent />} />);
}
