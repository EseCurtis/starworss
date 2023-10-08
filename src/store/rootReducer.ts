import { Reducer } from 'redux';
import Rswitch from '@/helpers/Rswitch';
import { InitialState, StateType } from './initalState';
import FETCH_ALL_CHARACTERS from './reducers/FETCH_ALL_CHARACTERS';
import FETCH_CHARACTER from './reducers/FETCH_CHARACTER';

export interface ActionType {
  type: string;
  payload?: any;
}

const rootReducer: Reducer<StateType, ActionType> = (state = InitialState, action) => {
  const _Rswitch = new Rswitch(action.type);

  const matched = _Rswitch

    .match("FETCH_ALL_CHARACTERS", () => {
      FETCH_ALL_CHARACTERS(state, action.payload.dispatcher);
      return state;
    })

    .match("POPULATE_CHARACTERS_DATA", () => {
      return { ...state, ...action.payload };
    })

    .match("CHARACTERS_FETCH:STATUS", () => {
      return {
        ...state,
        charactersFetchStatus: action.payload.status,
        charactersFetchStatusMessage: action.payload?.message
      };
    })

    .match("FETCH_CHARACTER", () => {
      const fetchedCharacter = FETCH_CHARACTER(state, action.payload);

      if(fetchedCharacter) {
        return fetchedCharacter
      } else {
        return state
      }
    })

    .match("POPULATE_CHARACTER_DATA", () => {
      console.log(action.payload)
      return { ...state, ...action.payload };
    })

    .match("CHARACTER_FETCH:STATUS", () => {
      return {
        ...state,
        characterFetchStatus: action.payload.status,
        characterFetchStatusMessage: action.payload?.message
      };
    })

    .match("FETCH_ALL_FAVORITES", () => {
      FETCH_ALL_CHARACTERS(state, action.payload.dispatcher);
      return state;
    })

    .match("POPULATE_FAVORITES_DATA", () => {
      return { ...state, ...action.payload };
    })

    .match("FAVORITES_FETCH:STATUS", () => {
      return {
        ...state,
        favoritedCharactersFetchStatus: action.payload.status
      } ;
    })

    .default(() => state)
    .matched();

  return matched;
};

export default rootReducer;
