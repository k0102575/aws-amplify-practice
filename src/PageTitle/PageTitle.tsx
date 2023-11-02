/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import { pindirectThemes } from '../themes/pindirectThemes';

/*
  Interface
*/
export interface PageTitleProps {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  style?: SerializedStyles;
}

/*
  Style
*/
const titleWrapperStyle = (subtitleColor: string) => css`
  white-space: pre-wrap;
  word-break: keep-all;

  & > h2 {
    ${pindirectThemes.fontWeight.SemiBold};
    ${pindirectThemes.fontSize.Title2};
    color: ${pindirectThemes.color.Black};
  }

  & > p {
    margin-top: 10px;
    ${pindirectThemes.fontSize.Body3};
    ${pindirectThemes.fontWeight.Medium};
    color: ${subtitleColor};
  }
`;

/*
  Component
*/
const PageTitle = ({ title, subtitle, subtitleColor, style }: PageTitleProps) => (
  <div css={[titleWrapperStyle(subtitleColor || pindirectThemes.color['Gray/09']), style]}>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

export default PageTitle;
