/* eslint-disable react/jsx-no-useless-fragment */
/** @jsxImportSource @emotion/react */

import { pindirectThemes } from 'src/themes/pindirectThemes';

/*
  Interface
*/
interface RadioIconProps {
  checked?: boolean;
  size?: 'medium' | 'small';
}

/*
  Component
*/
const RadioIcon = ({ checked, size = 'medium' }: RadioIconProps) => {
  const color = checked ? pindirectThemes.color.Black : pindirectThemes.color['Gray/05'];

  return (
    <>
      {size === 'medium' ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.75" y="0.75" width="16.5" height="16.5" rx="8.25" stroke={color} strokeWidth="1.5" />
          <rect x="4.5" y="4.5" width="9" height="9" rx="4.5" fill={color} />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke={color} />
          <rect x="4" y="4" width="8" height="8" rx="4" fill={color} />
        </svg>
      )}
    </>
  );
};

export default RadioIcon;
