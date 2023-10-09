import { StateType } from "@/store/initalState";
import { dexieStore } from "..";

const DELETE_FAVORITE = (state: StateType, { dispatcher, character }: any): StateType => {
    dexieStore.favoritedCharacters.where('characterId').equals(character.id).delete()
        .then(() => {
            const updatedFavorites = state.favoritedCharacters.filter((fav: any) => fav.id !== character.id);
            
            dispatcher({ type: "POPULATE_FAVORITES_DATA", payload: { favorites: updatedFavorites } });
            dispatcher({ type: "FAVORITES_DELETE:STATUS", payload: { status: "SUCCESS" } });
        })
        .catch((error) => {
            dispatcher({ type: "FAVORITES_DELETE:STATUS", payload: { status: "ERROR", message: error.toString() } });
        });

    return state
};

export default DELETE_FAVORITE;
