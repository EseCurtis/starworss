import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const DELETE_FAVORITE = (state: StateType, { dispatcher, character }: any): StateType => {
    const tempState = state
    const isFavorite = tempState.favoritedCharacters.some((fav: any) => fav.characterId === character.characterId);

    if (!isFavorite) {
        return {
            ...state,
            favoritedCharactersAddStatus: "ERROR",
            favoritedCharactersAddStatusMessage: "Non existent favorite"
        };
    }

    dexieStore.favoritedCharacters.where('characterId').equals(character.characterId).delete()
        .then(() => {
            const updatedFavorites = state.favoritedCharacters.filter((fav: any) => fav.characterId !== character.characterId);
            console.log(updatedFavorites)
            
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { favoritedCharacters: updatedFavorites } });
            dispatcher({ type: "FAVORITES_DELETE:STATUS", payload: { status: "SUCCESS" } });
        })
        .catch((error) => {
            dispatcher({ type: "FAVORITES_DELETE:STATUS", payload: { status: "ERROR", message: error.toString() } });
        });

    return { ...state, favoritedCharactersDeleteStatus: "LOADING" };
};

export default DELETE_FAVORITE;
