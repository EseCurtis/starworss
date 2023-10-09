import $_GET from "@/helpers/$_GET";
import BASIC_FETCH from "@/store/actions/BASIC_FETCH";
import { StateType } from "@/store/initalState";

const FETCH_ALL_CHARACTERS = (state: StateType, { currentPage, dispatcher }: any): StateType => {

    BASIC_FETCH(`${state.characters_api_url}/?page=${currentPage}`)
        .then((response) => {
            dispatcher({
                type: "POPULATE_PAGINATION_DATA", payload: {
                    paginationData: {
                        currentPage,
                        next: $_GET("page", response.next),
                        prev: $_GET("page", response.previous),
                        count: response.count
                    }
                }
            })

            dispatcher({ type: "POPULATE_CHARACTERS_DATA", payload: { characters: response.results } })
            dispatcher({ type: "CHARACTERS_FETCH:STATUS", payload: { status: "SUCCESS" } })
        })
        .catch((error) => {
            console.error(error)
            dispatcher({ type: "CHARACTERS_FETCH:STATUS", payload: { status: "ERROR", message: error.toString() } })
        })

    return { ...state, charactersFetchStatus: "LOADING" };
}

export default FETCH_ALL_CHARACTERS