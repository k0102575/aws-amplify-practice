/* eslint-disable react/button-has-type */
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { useMemo } from 'react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { BUTTON_TYPES, ButtonPositionProps } from '../Button';

export interface ModalProps {
  children: string;
  type?: BUTTON_TYPES;
  style?: SerializedStyles;
  isDisabled?: boolean;
  absolutePosition?: ButtonPositionProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/*
  style
*/
const modalStyle = () => css`
  width: 100%;
  max-width: 500px;
  height: 54px;
  cursor: pointer;
  ${pindirectThemes.fontSize.Title4};
  ${pindirectThemes.fontWeight.SemiBold};
  border: none;
  border-radius: 5px;
  color: ${pindirectThemes.color.White};
  background-color: ${pindirectThemes.color.Black};
`;

const disabledStyle = () => css`
  cursor: none;
  pointer-events: none;
  background-color: ${pindirectThemes.color['Gray/06']};
  color: ${pindirectThemes.color['Gray/08']};
`;

const absoluteStyle = ({ top, bottom, left, right }: ButtonPositionProps) => css`
  position: absolute;
  top: ${top !== undefined ? `${top}px` : 'initial'};
  bottom: ${bottom !== undefined ? `${bottom}px` : 'initial'};
  left: ${left !== undefined ? `${left}px` : 'initial'};
  right: ${right !== undefined ? `${right}px` : 'initial'};
`;

/*
  Component
*/
const Modal = ({ children, type = 'button', style, isDisabled, absolutePosition, onClick }: ModalProps) => {
  const _stateStyle = useMemo(() => isDisabled && disabledStyle(), [isDisabled]);
  const _absoluteStyle = useMemo(() => absolutePosition && absoluteStyle(absolutePosition), [absolutePosition]);

  return (
    <button css={[modalStyle(), _stateStyle, _absoluteStyle, style]} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Modal;
export type ModalType = { Modal: typeof Modal };
