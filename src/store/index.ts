import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { LayoutState,layoutReducer } from './layout';
import { fork, all } from 'redux-saga/effects';
import { heroesSaga } from './heroes/saga';


export interface ApplicationState {
    layout:LayoutState,
    router:RouterState
}
export function* rootSaga () {
    yield all([fork(heroesSaga)])
}
export const createRootReducer =( history:History) => {
    combineReducers({
        layout:layoutReducer,
        router:connectRouter(history)
    })
}
