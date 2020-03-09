import {action} from 'typesafe-actions';
import {LayoutActionTypes,ThemeColors} from './types';
import { AnyAction } from 'redux';

export const setTheme =(theme:ThemeColors)=> {
   return  action(
      LayoutActionTypes.SET_THEME,
      theme);
}

//export type layoutActions = setTheme;
