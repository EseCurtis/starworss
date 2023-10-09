import BASIC_FETCH from "@/store/actions/BASIC_FETCH";
import { StateType } from "@/store/initalState";

const FETCH_ALL_CHARACTERS = (state: StateType, dispatcher: any): void => {
    // could implement a eature to store the already gotten data to load first before the updated one loads or use as fallback data incase of network error
    
    BASIC_FETCH(state.characters_api_url)
        .then((response) => {
            dispatcher({ type: "POPULATE_PAGINATION_DATA", payload: { paginationData: {
                next: response.next,
                previous: response.previous,
                count: response.count
            } }})
            dispatcher({ type: "POPULATE_CHARACTERS_DATA", payload: { characters: response.results }})
            dispatcher({ type: "CHARACTERS_FETCH:STATUS", payload: { status: "SUCCESS" } })
        })
        .catch((error) => {
            console.error(error)
            dispatcher({ type: "CHARACTERS_FETCH:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })
}

export default FETCH_ALL_CHARACTERS