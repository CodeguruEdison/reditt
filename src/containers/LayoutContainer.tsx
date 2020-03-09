import React, { FC, ReactElement } from 'react';

import { ThemeColors, LayoutActionTypes } from '../store/layout';
import { ApplicationState } from '../store';

import { useDispatch, useSelector } from 'react-redux';
import * as layoutActions from '../store/layout/actions';

interface LayoutContainerProps {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}
interface LayoutContainerRenderProps {
  render?: (props: LayoutContainerProps) => ReactElement;
  children?: (props: LayoutContainerProps) => ReactElement;
}

const LayoutContainer: FC<LayoutContainerRenderProps> = ({
  render,
  children
}) => {
  const { theme } = useSelector((state: ApplicationState) => state.layout);
  const dispatch = useDispatch();
  const setTheme = (color: ThemeColors) =>
    dispatch(layoutActions.setTheme(color));

  if (render) {
    return render({ theme, setTheme });
  }
  if (children) {
    return children({ theme, setTheme });
  }

  return null;
};
export default LayoutContainer;
