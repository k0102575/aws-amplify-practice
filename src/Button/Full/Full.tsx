/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { BUTTON_TYPES, ButtonPositionProps } from '../Button';

type THEME_TYPES = 'primaryBlue' | 'primaryBlack';

export interface FullProps {
  theme: THEME_TYPES;
  children: string;
  type?: BUTTON_TYPES;
  style?: SerializedStyles;
  isDisabled?: boolean;
  fixedPosition?: ButtonPositionProps;
  absolutePosition?: ButtonPositionProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/*
  style
*/
const fullStyle = () => css`
  width: 100%;
  max-width: 500px;
  height: 54px;
  cursor: pointer;
  ${pindirectThemes.fontSize.Title4};
  ${pindirectThemes.fontWeight.SemiBold};
  border: none;
`;

const enableStyle = (theme: THEME_TYPES) => css`
  color: ${pindirectThemes.color.White};
  background-color: ${theme === 'primaryBlue' ? pindirectThemes.color.Pindirect_blue : pindirectThemes.color.Black};

  &:active {
    background-color: ${theme === 'primaryBlue' ? pindirectThemes.color.Pindirect_blue_Pressed : pindirectThemes.color['Gray/12']};
    color: ${pindirectThemes.color.White}${pindirectThemes.color.Alpha_080};
  }
`;

const disabledStyle = () => css`
  pointer-events: none;
  background-color: ${pindirectThemes.color['Gray/06']};
  color: ${pindirectThemes.color['Gray/08']};
`;

const fixedStyle = ({ top, bottom, left, right }: ButtonPositionProps) => css`
  position: fixed;
  top: ${top !== undefined ? `${top}px` : 'initial'};
  bottom: ${bottom !== undefined ? `${bottom}px` : 'initial'};
  left: ${left !== undefined ? `${left}px` : 'initial'};
  right: ${right !== undefined ? `${right}px` : 'initial'};
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
const Full = ({ children, type = 'button', theme = 'primaryBlack', style, isDisabled, fixedPosition, absolutePosition, onClick }: FullProps) => {
  const _stateStyle = useMemo(() => (isDisabled ? disabledStyle() : enableStyle(theme)), [isDisabled, theme]);
  const _fixedStyle = useMemo(() => fixedPosition && fixedStyle(fixedPosition), [fixedPosition]);
  const _absoluteStyle = useMemo(() => absolutePosition && absoluteStyle(absolutePosition), [absolutePosition]);

  return (
    <button css={[fullStyle(), _stateStyle, _fixedStyle, _absoluteStyle, style]} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Full;
export type FullType = { Full: typeof Full };
