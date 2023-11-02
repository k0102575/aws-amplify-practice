/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { pindirectThemes } from '../themes/pindirectThemes';

/*
  Interface
*/
export interface HrProps {
  height?: number;
  color?: string;
  style?: SerializedStyles;
}

/*
  Style
*/
const box = ({ height, color }: HrProps) => css`
  min-height: ${height || 1}px;
  height: ${height || 1}px;
  width: 100%;
  background-color: ${color || pindirectThemes.color.Black};
`;

/*
  Component
*/
const Hr = ({ style, height, color }: HrProps) => <div css={[box({ height, color }), style]} />;

export default Hr;
