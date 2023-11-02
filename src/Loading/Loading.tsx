/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import Lottie from 'src/Lottie/Lottie';
import { useCallback, useEffect } from 'react';
import { pindirectThemes } from '../themes/pindirectThemes';

interface LoadingProps {
  isOpen: boolean;
  zIndex: number;
  text?: string;
  style?: SerializedStyles;
}

const containerStyle = (zIndex: number) => css`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  max-width: 500px;
  background-color: ${pindirectThemes.color.White};
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

const textStyle = () => css`
  ${pindirectThemes.fontSize.Body3};
  ${pindirectThemes.fontWeight.Medium};
  color: ${pindirectThemes.color['Gray/10']};
  margin-top: 10px;
  white-space: pre-line;
  text-align: center;
`;

const Loading = ({ isOpen, zIndex, text, style }: LoadingProps) => {
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

  return (
    <div css={[containerStyle(zIndex), style]}>
      <Lottie name="whirl" width={80} height={120} speed={0.96} />
      {text && <p css={textStyle}>{text}</p>}
    </div>
  );
};

export default Loading;
