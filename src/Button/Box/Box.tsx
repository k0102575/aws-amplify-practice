/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { BUTTON_TYPES, ButtonPositionProps } from '../Button';

type THEME_TYPES = 'primaryBlue' | 'primaryBlack' | 'primaryGray' | 'inverse' | 'secondGray';
type SIZE_TYPES = 'small' | 'medium' | 'large';
interface CUSTOM_THEME {
  backgroundColor: string;
  color?: string;
}

export interface BoxProps {
  theme: THEME_TYPES | CUSTOM_THEME;
  children: string;
  size: SIZE_TYPES;
  width?: string;
  type?: BUTTON_TYPES;
  style?: SerializedStyles;
  isDisabled?: boolean;
  absolutePosition?: ButtonPositionProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/*
  style
*/
const boxStyle = (width?: string) => css`
  width: ${width || 'initial'};
  padding: 0 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const smallStyle = () => css`
  height: 32px;
  ${pindirectThemes.fontSize.Body3};
  ${pindirectThemes.fontWeight.Regular};
`;

const mediumStyle = (isSemiboldStyle: boolean) => css`
  height: 40px;
  ${pindirectThemes.fontSize.Body2};
  ${isSemiboldStyle ? pindirectThemes.fontWeight.SemiBold : pindirectThemes.fontWeight.Regular};
`;

const largeStyle = () => css`
  height: 48px;
  ${pindirectThemes.fontSize.Body1};
  ${pindirectThemes.fontWeight.SemiBold};
`;

const blackEnableStyle = () => css`
  color: ${pindirectThemes.color.White};
  background-color: ${pindirectThemes.color.Black};
`;

const blueEnableStyle = () => css`
  color: ${pindirectThemes.color.White};
  background-color: ${pindirectThemes.color.Pindirect_blue};
`;

const grayEnableStyle = () => css`
  color: ${pindirectThemes.color['Gray/09']};
  background-color: ${pindirectThemes.color['Gray/02']};
  border: 1px solid ${pindirectThemes.color['Gray/05']};
`;

const inverseEnableStyle = () => css`
  color: ${pindirectThemes.color['Gray/09']};
  background-color: ${pindirectThemes.color.White};
  border: 1px solid ${pindirectThemes.color['Gray/05']};
`;

const secondaryGrayEnableStyle = () => css`
  color: ${pindirectThemes.color['Gray/15']};
  background-color: ${pindirectThemes.color['Gray/03']};
`;

const customThemeEnableStyle = ({ backgroundColor, color }: CUSTOM_THEME) => css`
  color: ${color || pindirectThemes.color.White};
  background-color: ${backgroundColor};
`;

const disabledStyle = () => css`
  cursor: none;
  pointer-events: none;
  background-color: ${pindirectThemes.color['Gray/01']};
  border: 1px solid ${pindirectThemes.color['Gray/03']};
  color: ${pindirectThemes.color['Gray/06']};
`;

const inverseDisabledStyle = () => css`
  cursor: none;
  pointer-events: none;
  background-color: ${pindirectThemes.color.White};
  border: 1px solid ${pindirectThemes.color['Gray/05']};
  color: ${pindirectThemes.color['Gray/06']};
`;

const absoluteStyle = ({ top, bottom, left, right }: ButtonPositionProps) => css`
  position: absolute;
  top: ${top !== undefined ? `${top}px` : 'initial'};
  bottom: ${bottom !== undefined ? `${bottom}px` : 'initial'};
  left: ${left !== undefined ? `${left}px` : 'initial'};
  right: ${right !== undefined ? `${right}px` : 'initial'};
`;

/*
  Component
*/
const Box = ({ children, type = 'button', theme, size, width, style, isDisabled, absolutePosition, onClick }: BoxProps) => {
  const _sizeStyle = useMemo(() => {
    if (size === 'small') {
      return smallStyle();
    }

    if (size === 'large') {
      return largeStyle();
    }

    const isSemiboldStyle = !isDisabled && (theme === 'primaryBlack' || theme === 'primaryBlue' || typeof theme !== 'string');

    return mediumStyle(isSemiboldStyle);
  }, [size, theme, isDisabled]);

  const _stateStyle = useMemo(() => {
    if (isDisabled) {
      return theme === 'inverse' ? inverseDisabledStyle() : disabledStyle();
    }

    if (typeof theme !== 'string') {
      return customThemeEnableStyle(theme);
    }

    if (theme === 'primaryBlack') {
      return blackEnableStyle();
    }

    if (theme === 'primaryBlue') {
      return blueEnableStyle();
    }

    if (theme === 'primaryGray') {
      return grayEnableStyle();
    }

    if (theme === 'inverse') {
      return inverseEnableStyle();
    }

    if (theme === 'secondGray') {
      return secondaryGrayEnableStyle();
    }
  }, [isDisabled, theme]);

  const _absoluteStyle = useMemo(() => absolutePosition && absoluteStyle(absolutePosition), [absolutePosition]);

  return (
    <button css={[boxStyle(width), _sizeStyle, _stateStyle, _absoluteStyle, style]} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Box;
export type BoxType = { Box: typeof Box };
