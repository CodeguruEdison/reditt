import { combineReducers, Action, AnyAction, Dispatch } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { LayoutState,layoutReducer } from './layout';
import { fork, all } from 'redux-saga/effects';
import { heroesSaga } from './heroes/saga';
import { History } from 'history';



export interface ApplicationState {
    layout:LayoutState,
    router:RouterState
}
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
  
export function* rootSaga () {
    yield all([
        fork(heroesSaga)
    ])
}
export const createRootReducer =( history:History) => {

   return  combineReducers({
        layout:layoutReducer,
        router:connectRouter(history)
    })
}
