import { Reducer } from 'redux';
import Rswitch from '@/helpers/Rswitch';
import { InitialState, StateType } from './initalState';
import FETCH_ALL_CHARACTERS from './reducers/FETCH_ALL_CHARACTERS';
import FETCH_CHARACTER from './reducers/FETCH_CHARACTER';
import ADD_FAVORITE from './reducers/ADD_FAVORITE';
import DELETE_FAVORITE from './reducers/DELETE_FAVORITE';
import FETCH_FAVORITES from './reducers/FETCH_FAVORITES';

export interface ActionType {
  type: string;
  payload?: any;
}

const rootReducer: Reducer<StateType, ActionType> = (state = InitialState, action) => {
  const _Rswitch = new Rswitch(action.type);

  const matched = _Rswitch

    .match("FETCH_ALL_CHARACTERS", () => {
      return FETCH_ALL_CHARACTERS(state, action.payload);
    })

    .match("POPULATE_CHARACTERS_DATA", () => {
      return { ...state, ...action.payload };
    })

    .match("POPULATE_PAGINATION_DATA", () => {
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
      return FETCH_CHARACTER(state, action.payload);
    })

    .match("POPULATE_CHARACTER_DATA", () => {
      return { ...state, ...action.payload };
    })

    .match("CHARACTER_FETCH:STATUS", () => {
      return {
        ...state,
        characterFetchStatus: action.payload.status,
        characterFetchStatusMessage: action.payload?.message
      };
    })

    .match("FETCH_FAVORITES", () => {
      FETCH_FAVORITES(state, action.payload.dispatcher);
      return state;
    })

    .match("POPULATE_FAVORITES_DATA", () => {
      return { ...state, ...action.payload };
    })

    .match("ADD_FAVORITE", () => {
      return ADD_FAVORITE(state, action.payload);
    })

    .match("DELETE_FAVORITE", () => {
      return DELETE_FAVORITE(state, action.payload);
    })

    .match("FAVORITES_FETCH:STATUS", () => {
      return {
        ...state,
        favoritedCharactersFetchStatus: action.payload.status
      };
    })

    .match("FAVORITES_ADD:STATUS", () => {
      return {
        ...state,
        favoritedCharactersAddStatus: action.payload.status
      };
    })

    .match("FAVORITES_DELETE:STATUS", () => {
      return {
        ...state,
        favoritedCharactersDeleteStatus: action.payload.status
      };
    })

    .default(() => state)
    .matched();

  return matched;
};

export default rootReducer;
