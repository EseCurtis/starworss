import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Character from "./pages/character";
import Search from "./pages/search";

export default function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/search" element={<Search />} />
      </>
    )
  );

  return <RouterProvider router={appRouter} />;
}
