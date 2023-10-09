import Layout from "@/layout";
import MainContent from "./components/Main.content";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Character() {
  const queryString = window.location.search;
  const characterId = new URLSearchParams(queryString).get("characterId");
  const dispatcher = useDispatch();

  useEffect(() => {
    if (characterId) {
      dispatcher({
        type: "FETCH_CHARACTER",
        payload: { 
          dispatcher, 
          characterId: characterId 
        }
      });
    }
  }, [characterId]);

  return <Layout main={<MainContent/>}/>;
}
