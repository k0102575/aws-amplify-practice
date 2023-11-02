/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { pindirectThemes } from './themes/pindirectThemes';

interface MainWrapperProps {
  children: React.ReactNode;
}

const wrapperStyle = () => css`
  background-color: rgb(248, 249, 250);
`;

const styles = () => css`
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${pindirectThemes.color.White};
  min-width: 320px;
  max-width: 500px;
  margin: 0px auto;
  position: relative;
`;

const MainWrapper = ({ children }: MainWrapperProps) => (
  <div css={wrapperStyle}>
    <div css={styles}>{children}</div>
  </div>
);

export default MainWrapper;
