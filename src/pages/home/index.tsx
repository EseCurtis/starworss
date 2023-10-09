import Layout from "@/layout";
import MainContent from "./components/Main.content";
import SidebarContent from "./components/Sidebar.content";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const dispatcher = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatcher({ type: "FETCH_ALL_CHARACTERS", payload: { currentPage: page || 1, dispatcher } });
  }, [dispatcher, page])

  return (<Layout main={<MainContent />} sidebar={<SidebarContent />} />);
}
