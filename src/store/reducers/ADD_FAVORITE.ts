import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const ADD_FAVORITE = (state: StateType, {dispatcher, character}: any): StateType | boolean => {

    dexieStore.favoritedCharacters.add({ characterId: character.id, name: character.name })
        .then((response) => {
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { characters: response }})
            dispatcher({ type: "FAVORITES_ADD:STATUS", payload: { status: "SUCCESS" } })
        })
        
        .catch((error) => {
            console.error(error)
            dispatcher({ type: "FAVORITES_ADD:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })
    
    return state;
}

export default ADD_FAVORITE