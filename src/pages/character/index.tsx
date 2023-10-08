import Layout from "@/layout";
import MainContent from "./components/Main.content";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import URLtoID from "@/helpers/URLtoID";

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
          characterId: URLtoID(characterId, true) 
        }
      });
    }
  }, [characterId]);

  return <Layout main={<MainContent/>}/>;
}
