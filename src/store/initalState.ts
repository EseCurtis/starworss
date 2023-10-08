type FetchStatus = 'LOADING' | 'SUCCESS' | 'ERROR';
type statusMessage = string | null;

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
    favoritedCharactersFetchStatus: 'LOADING'
};
