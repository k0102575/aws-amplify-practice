/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { pindirectThemes } from 'src/themes/pindirectThemes';

/*
  Interface
*/
export interface ToggleProps {
  name: string;
  isChecked?: boolean;
  style?: SerializedStyles;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/*
  Style
*/
const ToggleWrapperStyle = () => css`
  display: flex;
  width: fit-content;
`;

const hiddenCheckboxStyle = () => css`
  opacity: 0;
  width: 0px;
  height: 0px;
  margin: 0px;
`;

const ToggleBoxStyle = (isChecked?: boolean) => css`
  background-color: ${isChecked ? pindirectThemes.color.Pindirect_blue : pindirectThemes.color['Gray/06']};
  width: 47px;
  height: 28px;
  border-radius: 14px;
  cursor: pointer;
  position: relative;

  & > div {
    background-color: ${pindirectThemes.color.White};
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 3px;
    left: ${isChecked ? '3px' : '22px'};
  }
`;

/*
  Component
*/
const Toggle = ({ name, isChecked, style, onChange }: ToggleProps) => {
  return (
    <div css={[ToggleWrapperStyle, style]}>
      <input type="checkbox" css={hiddenCheckboxStyle} name={name} id={name} checked={isChecked} onChange={onChange} />
      <label htmlFor={name}>
        <div css={ToggleBoxStyle(isChecked)}>
          <div />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
