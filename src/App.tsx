import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Character from "./pages/character";

export default function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </>
    )
  );

  return <RouterProvider router={appRouter} />;
}
