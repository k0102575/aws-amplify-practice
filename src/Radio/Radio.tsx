/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { InputHTMLAttributes, ReactNode } from 'react';
import RadioIcon from './RadioIcon';

/*
  Interface
*/
type RadioExtendsProps = {
  size?: 'medium' | 'small';
  style?: SerializedStyles;
  label?: ReactNode;
};

type InputPickProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'name' | 'onChange' | 'id' | 'checked'>;

type RadioProps = RadioExtendsProps & InputPickProps;

/*
  Style
*/
const radioStyle = () => css`
  display: flex;
  width: fit-content;
  align-items: center;
`;

const inputHiddenStyle = () => css`
  margin: 0px;
  width: 0px;
  height: 0px;
  opacity: 0;
`;

const labelStyle = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

/*
  Component
*/
const Radio = ({ value, name, id, checked, size = 'medium', label, style, onChange }: RadioProps) => {
  return (
    <div css={[radioStyle, style]}>
      <input type="radio" css={inputHiddenStyle} value={value} name={name} id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} css={labelStyle}>
        <RadioIcon checked={checked} size={size} />
        {label && label}
      </label>
    </div>
  );
};

export default Radio;
