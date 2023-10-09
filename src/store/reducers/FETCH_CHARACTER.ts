import BASIC_FETCH from "@/store/actions/BASIC_FETCH";
import { StateType } from "@/store/initalState";

const FETCH_CHARACTER = (state: StateType, {characterId, dispatcher}: any): StateType | boolean => {
    const characterUrl = `${state.characters_api_url}/${characterId}/`
    const characterFromState = state.characters.find((character) => character.url === characterUrl);

    if(characterFromState) {
        return  { ...state, character: characterFromState, characterFetchStatus: "SUCCESS" }
    } else {
        BASIC_FETCH(characterUrl)
        .then((response) => {
            dispatcher({ type: "POPULATE_CHARACTER_DATA", payload: { character: response }})
            dispatcher({ type: "CHARACTER_FETCH:STATUS", payload: { status: "SUCCESS" } })
        })
        .catch((error) => {
            dispatcher({ type: "CHARACTER_FETCH:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })
    }

    return false;
}

export default FETCH_CHARACTER