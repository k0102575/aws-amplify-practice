/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';

/*
  Interface
*/
export interface DashProps {
  height: number;
  width?: number;
  color: string;
  opacity?: number;
  dasharray?: string;
  strokeLineCap?: 'butt' | 'square' | 'round';
  style?: SerializedStyles;
}

/*
  Style
*/
const dashBoxStyle = ({ height, width, color, opacity, dasharray, strokeLineCap }: DashProps) => css`
  overflow: hidden;
  width: ${width ? `${width}px` : '100%'};

  & > div {
    height: ${height}px;
    display: flex;
    width: 500px;
    background-color: transparent;

    & > svg {
      & > path {
        opacity: ${opacity};
        stroke: ${color};
        stroke-dasharray: ${dasharray};
        stroke-width: ${height};
        stroke-linecap: ${strokeLineCap};
      }
    }
  }
`;

/*
  Component
*/
const Dash = ({ height, width, color, opacity = 1, dasharray = '2 2', strokeLineCap = 'butt', style }: DashProps) => {
  return (
    <div css={[dashBoxStyle({ height, width, color, opacity, dasharray, strokeLineCap }), style]}>
      <div>
        <svg width="500" height={height} viewBox={`0 0 500 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={`M 0 ${height / 2} H 500`} strokeDashoffset="-1" />
        </svg>
      </div>
    </div>
  );
};

export default Dash;
export type DashType = { Dash: typeof Dash };
