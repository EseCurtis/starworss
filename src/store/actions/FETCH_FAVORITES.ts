import { dexieStore } from "..";

export default async function FETCH_FAVORITES() {
    const favorites = await dexieStore.favoritedCharacters.toArray();
    return favorites;
}