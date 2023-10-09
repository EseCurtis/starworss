import Layout from "@/layout";
import MainContent from "./components/Main.content";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import $_GET from "@/helpers/$_GET";

export default function Character() {
  const characterId = $_GET("characterId");
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
