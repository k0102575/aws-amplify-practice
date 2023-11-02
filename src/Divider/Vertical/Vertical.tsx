/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';

/*
  Interface
*/
export interface VerticalProps {
  height: number;
  thickness: number;
  color: string;
  style?: SerializedStyles;
}

/*
  Style
*/
const svgStyle = ({ height, thickness }: { height: number; thickness: number }) => css`
  display: flex;
  width: ${thickness}px;
  height: ${height}px;
`;

/*
  Component
*/
const Vertical = ({ height, thickness, color, style }: VerticalProps) => {
  return (
    <div css={[svgStyle({ height, thickness }), style]}>
      <svg width={thickness} height={height}>
        <rect width={thickness} height={height} fill={color} />
      </svg>
    </div>
  );
};

export default Vertical;
export type VerticalType = { Vertical: typeof Vertical };
