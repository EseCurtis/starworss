import BASIC_FETCH from "../actions/BASIC_FETCH";
import { StateType } from "../initalState";

const FETCH_ALL_CHARACTERS = (state : StateType, dispatcher: any): void => {
    BASIC_FETCH(state.characters_api_url)
    .then((response) => {
        dispatcher({ type: "POPULATE_CHARACTERS_DATA", payload: { characters: response.results } })
    })
    .catch((error) => {
        console.error(error)
    })
}

export default FETCH_ALL_CHARACTERS