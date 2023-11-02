import { css } from '@emotion/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { NavigationSliderProps } from './types';

const componentStyle = (gap: number) => css`
  display: grid;
  gap: ${gap}px;
`;

const commonHeaderStyle = (height: number, headerSidePadding: number) => css`
  display: flex;
  justify-content: space-between;
  height: ${height}px;
  align-items: center;
  background-color: ${pindirectThemes.color.White};
  box-shadow: none;
  z-index: 10;
  padding: 0 ${headerSidePadding}px;
`;

const tabStyle = (isActive: boolean) => css`
  flex: 1;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${isActive ? pindirectThemes.color.Black : pindirectThemes.color['Gray/08']};
  padding: 0 4px;
  cursor: pointer;
  pointer-events: ${isActive && 'none'};

  & > span {
    ${pindirectThemes.fontSize.Body3};
    ${pindirectThemes.fontWeight.SemiBold};
  }
`;

const sliderStyle = ({ headerLength, sliderSidePadding, index, headerSidePadding }: NavigationSliderProps) => {
  const baseWidth = `calc((100% - ${headerSidePadding}px  * 2) / ${headerLength})`;

  return css`
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${pindirectThemes.color.Black};
    width: ${`calc(${baseWidth} - (${sliderSidePadding}px * 2))`};
    left: ${`calc(${baseWidth} * ${index} + ${sliderSidePadding}px + ${headerSidePadding}px)`};
    transition: left 0.2s;
  `;
};

const NavigationCommonStyle = {
  componentStyle,
  commonHeaderStyle,
  tabStyle,
  sliderStyle,
};

export default NavigationCommonStyle;
