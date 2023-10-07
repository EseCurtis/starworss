export interface StateType {
    characters_api_url: string;
    characters: any;
}

export const InitialState: StateType = {
    characters_api_url: "https://swapi.dev/api/people",
    characters: null,
};
