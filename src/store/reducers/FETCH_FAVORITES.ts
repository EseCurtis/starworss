import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const FETCH_FAVORITES = (state: StateType, dispatcher: any): StateType | boolean => {

    dexieStore.favoritedCharacters.toArray()
        .then((response) => {
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { characters: response }})
            dispatcher({ type: "FAVORITES_FETCH:STATUS", payload: { status: "SUCCESS" } })
        })
        
        .catch((error) => {
            console.error(error)
            dispatcher({ type: "FAVORITES_FETCH:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })
    
    return state;
}

export default FETCH_FAVORITES