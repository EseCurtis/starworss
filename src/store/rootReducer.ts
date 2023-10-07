import { Reducer } from 'redux';
import Rswitch from '../helpers/Rswitch';
import { InitialState, StateType } from './initalState';
import FETCH_ALL_CHARACTERS from './reducers/FETCH_ALL_CHARACTERS';

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

    .default(() => state)
    .matched();

  return matched;
};

export default rootReducer;
