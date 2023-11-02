/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';

import { pindirectThemes } from '../themes/pindirectThemes';

type ChipTypes = 'medium' | 'large' | 'number' | 'small';
export interface ChipProps {
  type: ChipTypes;
  text: string;
  backColor: string;
  color: string;
  style?: SerializedStyles;
}

const smallStyle = () => css`
  display: block;
  height: 16px;
  padding: 0 4px;
  ${pindirectThemes.fontSize.Body6};
  ${pindirectThemes.fontWeight.SemiBold};
`;

const mediumStyle = () => css`
  height: 20px;
  padding: 1px 6px;
  ${pindirectThemes.fontSize.Body5};
  ${pindirectThemes.fontWeight.Bold};
`;

const largeStyle = () => css`
  height: 29px;
  padding: 5px 9px;
  ${pindirectThemes.fontSize.Body4};
  ${pindirectThemes.fontWeight.SemiBold};
`;

const numberStyle = () => css`
  width: 22px;
  height: 22px;
  ${pindirectThemes.fontSize.Body2};
  ${pindirectThemes.fontWeight.Bold};
`;

const containerStyle = ({ type, backColor, color }: { type: ChipTypes; backColor: string; color: string }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: ${backColor};
  color: ${color};
  border-radius: 3px;

  ${type === 'medium' && mediumStyle()}
  ${type === 'large' && largeStyle()}
  ${type === 'number' && numberStyle()}
  ${type === 'small' && smallStyle()}
`;

const backgroundStyle = () => css`
  height: fit-content;
  border-radius: 3px;
  overflow: hidden;
  background-color: ${pindirectThemes.color.White};
`;

const Chip = ({ type = 'medium', text, backColor, color, style }: ChipProps) => (
  <div css={backgroundStyle}>
    <div css={[containerStyle({ type, backColor, color }), style]}>
      <span>{text}</span>
    </div>
  </div>
);

export default Chip;
