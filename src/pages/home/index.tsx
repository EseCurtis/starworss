import Layout from "../../layout";
import MainContent from "./components/Main.content";
import SidebarContent from "./components/Sidebar.content";

export default function Home () {
    return (
        <Layout
            main={<MainContent/>}
            sidebar={<SidebarContent/>}
        />
    )
}