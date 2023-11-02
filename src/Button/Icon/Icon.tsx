/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { BUTTON_TYPES, ButtonPositionProps } from '../Button';
import IconComp, { IconProps as _IconProps } from '../../Icon/Icon';

type THEME_TYPES = 'primaryBlue' | 'primaryBlack' | 'primaryGray';
type SIZE_TYPES = 'medium' | 'large';
interface CUSTOM_THEME {
  backgroundColor: string;
  color?: string;
}

export interface IconProps {
  theme: THEME_TYPES | CUSTOM_THEME;
  children: string;
  size: SIZE_TYPES;
  iconProps: _IconProps;
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
const iconStyle = (width?: string) => css`
  width: ${width || 'initial'};
  padding: 0 10px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const mediumStyle = (isSemiboldStyle: boolean) => css`
  height: 40px;
  ${pindirectThemes.fontSize.Body2};
  ${isSemiboldStyle ? pindirectThemes.fontWeight.SemiBold : pindirectThemes.fontWeight.Regular};

  & > p {
    margin: 0 1px 0 4px;
  }
`;

const largeStyle = () => css`
  height: 48px;
  ${pindirectThemes.fontSize.Body1};
  ${pindirectThemes.fontWeight.SemiBold};

  & > p {
    margin: 0 2px 0 4px;
  }
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

const customThemeEnableStyle = ({ backgroundColor, color }: CUSTOM_THEME) => css`
  color: ${color || pindirectThemes.color.White};
  background-color: ${backgroundColor};
`;

const disabledStyle = () => css`
  pointer-events: none;
  background-color: ${pindirectThemes.color['Gray/01']};
  border: 1px solid ${pindirectThemes.color['Gray/03']};
  color: ${pindirectThemes.color['Gray/06']};
  ${pindirectThemes.fontWeight.Regular};
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
const Icon = ({ children, type = 'button', theme, size, iconProps, width, style, isDisabled, absolutePosition, onClick }: IconProps) => {
  const _sizeStyle = useMemo(() => {
    if (size === 'large') {
      return largeStyle();
    }

    const isSemiboldStyle = theme === 'primaryBlack' || theme === 'primaryBlue' || typeof theme !== 'string';
    return mediumStyle(isSemiboldStyle);
  }, [size, theme]);

  const _stateStyle = useMemo(() => {
    if (isDisabled) {
      return disabledStyle();
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
  }, [isDisabled, theme]);

  const _absoluteStyle = useMemo(() => absolutePosition && absoluteStyle(absolutePosition), [absolutePosition]);

  const iconColor = useMemo(() => {
    if (isDisabled) {
      return pindirectThemes.color['Gray/06'];
    }

    if (iconProps?.color) {
      return iconProps.color;
    }

    if (theme === 'primaryGray') {
      return pindirectThemes.color['Gray/09'];
    }

    return pindirectThemes.color.White;
  }, [isDisabled, iconProps, theme]);

  return (
    <button css={[iconStyle(width), _sizeStyle, _stateStyle, _absoluteStyle, style]} type={type} onClick={onClick}>
      <IconComp
        name={iconProps.name}
        width="20px"
        height="20px"
        color={iconColor}
        fillColor={iconProps?.fillColor}
        rotate={iconProps?.rotate || 0}
        fixStroke={iconProps?.fixStroke}
        strokeWidth={1}
      />
      <p>{children}</p>
    </button>
  );
};

export default Icon;
export type IconType = { Icon: typeof Icon };
