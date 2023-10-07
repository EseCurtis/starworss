import { Reducer } from 'redux';
import Rswitch from '../helpers/Rswitch';
import { InitialState, StateType } from './initalState';

interface ActionType {
    type: string;
    payload?: any;
}

const rootReducer: Reducer<StateType, ActionType> = (state = InitialState, action) => {
    const _Rswitch = new Rswitch(action.type);

    const matched = _Rswitch
        .match("SAY_HELLO", () => {
            console.log("added reducer!")
            return state;
        })

        .default(() => state)
        .matched()

    return matched;
};

export default rootReducer;
