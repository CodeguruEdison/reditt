import { HeroesActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import {callApi} from '../../utils/api';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''

function* handleFetch(){
 try{
   const res = yield call(callApi,'get',API_ENDPOINT,'/heroes');
    if(res.error){
        yield put(fetchError(res.error));
    }else{
        yield put(fetchSuccess(res))
    }

 }
 catch(err){
    if(err instanceof Error){
        yield put(fetchError(err.stack!))
    }
    else{
        yield put(fetchError('An unknown error occurred.'))
    }
 }
}
//https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/

function* watchFetchRequest(){
    yield takeEvery(HeroesActionTypes.FETCH_REQUEST,handleFetch)
}
export function* heroesSaga() {
    yield all([fork(watchFetchRequest)]);
}