import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';

export interface NavigationProps {
  headers: string[] | ReactNode[];
  bodys: ReactNode[];
  headerHeight?: number;
  headerSidePadding?: number;
  sliderSidePadding?: number;
  gap?: number;
  style?: SerializedStyles;
}

export interface NavigationSliderProps {
  headerLength: number;
  sliderSidePadding: number;
  index: number;
  headerSidePadding: number;
}
