type FetchStatus = 'LOADING' | 'SUCCESS' | 'ERROR';
type statusMessage = string | null;
type paginationData = {
  currentPage: number,
  next: string,
  prev: string,
  count: number,
}

export interface StateType {
  characters_api_url: string;

  //characters
  charactersFetchStatus: FetchStatus;
  charactersFetchStatusMessage: statusMessage;
  characters: any[];

  //single character
  characterFetchStatus: FetchStatus;
  characterFetchStatusMessage: statusMessage;
  character: object;

  //favorite
  favoritedCharacters: any[];
  favoritedCharactersFetchStatus: FetchStatus;
  favoritedCharactersAddStatus: FetchStatus;
  favoritedCharactersDeleteStatus: FetchStatus;
  favoritedCharactersFetchStatusMessage: statusMessage,
  favoritedCharactersAddStatusMessage: statusMessage,
  favoritedCharactersDeleteStatusMessage: statusMessage,

  //pagination
  paginationData: paginationData
}

export const InitialState: StateType = {
  characters_api_url: "https://swapi.dev/api/people",

  //characters
  charactersFetchStatus: 'LOADING',
  charactersFetchStatusMessage: null,
  characters: [],

  //single character
  characterFetchStatus: 'LOADING',
  characterFetchStatusMessage: null,
  character: {},

  //favorite
  favoritedCharacters: [],
  favoritedCharactersFetchStatus: 'LOADING',
  favoritedCharactersAddStatus: 'LOADING',
  favoritedCharactersDeleteStatus: 'LOADING',
  favoritedCharactersFetchStatusMessage: null,
  favoritedCharactersAddStatusMessage: null,
  favoritedCharactersDeleteStatusMessage: null,

  //pagination data
  paginationData: {
    currentPage: 1,
    next: "",
    prev: "",
    count: 0,
  }
};
