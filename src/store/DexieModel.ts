import Dexie from 'dexie';

export default class MainDB extends Dexie {
    favoritedCharacters: Dexie.Table<IFavoritedCharacter, number>;

  constructor() {
    super("main");

    this.version(1).stores({
        favoritedCharacters: "++id, characterId, name",
    });

    this.favoritedCharacters = this.table("favoritedCharacters");
  }
}

export interface IFavoritedCharacter {
  id?: number;
  characterId: number;
  name: string;
}


