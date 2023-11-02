/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';

/*
  Interface
*/
export interface HorizontalProps {
  width: number;
  thickness: number;
  color: string;
  style?: SerializedStyles;
}

/*
  Style
*/

const svgStyle = ({ width, thickness }: { width: number; thickness: number }) => css`
  display: flex;
  width: ${width}px;
  height: ${thickness}px;
`;

/*
  Component
*/
const Horizontal = ({ width, thickness, color, style }: HorizontalProps) => {
  return (
    <div css={[svgStyle({ width, thickness }), style]}>
      <svg width={width} height={thickness}>
        <rect width={width} height={thickness} fill={color} />
      </svg>
    </div>
  );
};

export default Horizontal;
export type HorizontalType = { Horizontal: typeof Horizontal };
