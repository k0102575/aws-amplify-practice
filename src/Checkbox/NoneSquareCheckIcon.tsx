/** @jsxImportSource @emotion/react */
import Icon from 'src/Icon/Icon';
import { pindirectThemes } from '../themes/pindirectThemes';
import { CheckboxIconProps } from './types';

/*
  Interface
*/

/*
  Component
*/
const NoneSquareCheckIcon = ({ checked, size }: CheckboxIconProps) => {
  const color = checked ? pindirectThemes.color.Black : pindirectThemes.color['Gray/06'];
  const widthHeightSize = size === 'small' ? '20px' : '24px';

  return (
    <Icon
      name="icCheck"
      width={widthHeightSize}
      height={widthHeightSize}
      strokeWidth={1.5}
      color={color}
    />
  );
};

export default NoneSquareCheckIcon;
