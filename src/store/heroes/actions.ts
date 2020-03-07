import { action } from 'typesafe-actions'
import { HeroesActionTypes, Hero } from './types';
//https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/
export const fetchRequest =()=>{
    return action(HeroesActionTypes.FETCH_REQUEST);
}
export const fetchSuccess =(data:Hero[]) =>{
    return action(HeroesActionTypes.FETCH_SUCCESS,data);
}
export const fetchError =(message:string) =>{
    return action(HeroesActionTypes.FETCH_ERROR,message);
}
   