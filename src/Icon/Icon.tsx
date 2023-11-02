/** @jsxImportSource @emotion/react */
import { createElement } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import * as svg from './svg';

export type IconNameType = keyof typeof svg;

export interface IconProps {
  name: IconNameType;
  fixStroke?: boolean;
  strokeWidth?: number;
  rotate?: number;
  width?: string;
  height?: string;
  color?: string;
  fillColor?: string;
  style?: SerializedStyles;
}

const iconStyle = (
  fixStroke: boolean,
  strokeWidth: number,
  rotate: number,
  width?: string,
  height?: string,
  color?: string,
  fillColor?: string,
) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(${rotate}deg);
    width: ${width};
    height: ${height};

    path,
    circle {
      stroke: ${color};
      fill: ${fillColor};

      ${fixStroke &&
      css`
        stroke-width: ${strokeWidth || 1};
        vector-effect: non-scaling-stroke;
      `}
    }
  }
`;

const Icon = ({ name, width, height, color, fixStroke = true, strokeWidth = 1, rotate = 0, fillColor, style }: IconProps) => (
  <div css={[iconStyle(fixStroke, strokeWidth, rotate, width, height, color, fillColor), style]}>{createElement(svg[name])}</div>
);

export default Icon;
