import { HeroesActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import callApi from '../../utils/callApi'


function* handleFetch(){

}


function* watchFetchRequest(){
    yield takeEvery(HeroesActionTypes.FETCH_REQUEST,handleFetch)
}
export function* heroesSaga() {
    yield all([fork(watchFetchRequest)]);
}