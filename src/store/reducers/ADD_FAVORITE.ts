import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const ADD_FAVORITE = (state: StateType, { dispatcher, character }: any): StateType => {
    const newFavorite = { characterId: character.id, name: character.name };
    const isFavorite = state.favoritedCharacters.some((fav: any) => fav.characterId === character.characterId);

    if (isFavorite) {
        return {
            ...state,
            favoritedCharactersAddStatus: "ERROR",
            favoritedCharactersAddStatusMessage: "Already favorited!"
        };
    }

    dexieStore.favoritedCharacters
        .add(newFavorite)
        .then(() => {
            const updatedFavorites = [...state.favoritedCharacters, newFavorite];

            console.log(updatedFavorites)
            
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { favoritedCharacters: updatedFavorites } });
            dispatcher({ type: "FAVORITES_ADD:STATUS", payload: { status: "SUCCESS" } });
        })
        .catch((error) => {
            console.error(error);
            dispatcher({ type: "FAVORITES_ADD:STATUS", payload: { status: "ERROR", message: error.toString() } });
            return state;
        });

    return { ...state, favoritedCharactersAddStatus: "LOADING" };
};

export default ADD_FAVORITE;
