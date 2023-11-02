/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Icon from 'src/Icon/Icon';
import { pindirectThemes } from '../themes/pindirectThemes';
import { CheckboxIconProps, CheckboxSizeTypes } from './types';

/*
  style
*/
const inputboxStyle = (size: CheckboxSizeTypes, borderColor: string) => css`
  padding: 1px;
  border-radius: 3px;
  border: ${`${size === 'small' ? '1px' : '1.5px'} solid ${borderColor}`};
`;

/*
  Component
*/
const SquareCheckIcon = ({ checked, size }: CheckboxIconProps) => {
  // variables
  const color = checked ? pindirectThemes.color.Black : pindirectThemes.color['Gray/05'];

  const { widthHeight, strokeWidth } =
    size === 'small'
      ? {
          widthHeight: '12px',
          strokeWidth: 1,
        }
      : {
          widthHeight: '14px',
          strokeWidth: 1.5,
        };

  return (
    <div css={inputboxStyle(size, color)}>
      <Icon name="icCheck" width={widthHeight} height={widthHeight} strokeWidth={strokeWidth} color={color} />
    </div>
  );
};

export default SquareCheckIcon;
