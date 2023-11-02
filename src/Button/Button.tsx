/** @jsxImportSource @emotion/react */
import Icon, { IconType } from './Icon/Icon';
import Box, { BoxType } from './Box/Box';
import Full, { FullType } from './Full/Full';
import Modal, { ModalType } from './Modal/Modal';

export type BUTTON_TYPES = 'button' | 'submit' | 'reset';

export interface ButtonPositionProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Button: FullType & ModalType & BoxType & IconType = () => {
  return <> </>;
};

Button.Full = Full;
Button.Icon = Icon;
Button.Box = Box;
Button.Modal = Modal;
export default Button;
