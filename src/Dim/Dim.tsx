/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect } from 'react';
import { pindirectThemes } from '../themes/pindirectThemes';

interface DimProps {
  isOpen: boolean;
  zIndex: number;
  backgroundColor?: string;
}

const containerStyle = (
  zIndex: number,
  backgroundColor: string = pindirectThemes.color.Black,
) => css`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  max-width: 500px;
  background-color: ${backgroundColor};
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex};
`;

const Dim = ({ isOpen, zIndex, backgroundColor }: DimProps) => {
  const setBodyOverflowHidden = useCallback((isBodyOverflowHidden: boolean) => {
    if (isBodyOverflowHidden) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, []);

  // useEffect
  useEffect(() => {
    setBodyOverflowHidden(isOpen);
  }, [setBodyOverflowHidden, isOpen]);

  if (!isOpen) {
    return null;
  }

  return <div css={containerStyle(zIndex, backgroundColor)} />;
};

export default Dim;
