import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const FETCH_FAVORITES = (state: StateType, dispatcher: any): StateType => {

    dexieStore.favoritedCharacters.toArray()
        .then((response) => {
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { favoritedCharacters: response }})
            dispatcher({ type: "FAVORITES_FETCH:STATUS", payload: { status: "SUCCESS" } })
        })
        
        .catch((error) => {
            console.error(error)
            dispatcher({ type: "FAVORITES_FETCH:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })
    
    return { ...state, favoritedCharactersFetchStatus: "LOADING" };
}

export default FETCH_FAVORITES