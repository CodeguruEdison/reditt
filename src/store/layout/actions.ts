import {action} from 'typesafe-actions';
import {LayoutActionTypes,ThemeColors} from './types';

export const setTheme =(theme:ThemeColors)=> {
   return  action(LayoutActionTypes.SET_THEME,theme);
}


