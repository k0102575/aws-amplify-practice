/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { ChangeEvent, ReactNode } from 'react';
import NoneSquareCheckIcon from './NoneSquareCheckIcon';
import SquareCheckIcon from './SquareCheckIcon';
import { CheckboxIconProps } from './types';

/*
  Interface
*/

type FlexPostionTypes = 'center' | 'flex-start' | 'flex-end';

interface CheckboxProps extends CheckboxIconProps {
  name: string;
  label?: ReactNode;
  style?: SerializedStyles;
  isSquare?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  flexPosition?: FlexPostionTypes;
}

/*
  Style
*/
const checkboxContainerStyle = () => css`
  width: fit-content;
`;

const labelStyle = (flexPosition: FlexPostionTypes) => css`
  cursor: pointer;
  display: flex;
  align-items: ${flexPosition};
`;

const hiddenInputStyle = () => css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0px;
  width: 0px;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
`;

/*
  Component
*/
const Checkbox = ({ name, checked, label, size = 'small', isSquare = true, style, flexPosition = 'center', onChange }: CheckboxProps) => (
  <div css={[checkboxContainerStyle(), style]}>
    <label css={labelStyle(flexPosition)} htmlFor={name}>
      <input css={hiddenInputStyle} id={name} type="checkbox" onChange={onChange} checked={checked} />
      {isSquare ? <SquareCheckIcon size={size} checked={checked} /> : <NoneSquareCheckIcon size={size} checked={checked} />}
      {label && label}
    </label>
  </div>
);

export default Checkbox;
