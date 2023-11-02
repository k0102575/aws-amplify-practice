/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { css } from '@emotion/react';
import Divider from '../Divider';

export default {
  title: 'components|Divider',
  component: Divider.Vertical,
} as ComponentMeta<typeof Divider.Vertical>;

const wrapperStyle = () => css`
  padding: 10px;
  background-color: ${pindirectThemes.color.Pindirect_blue}0d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
`;

const boxStyle = () => css``;

const Template: ComponentStory<typeof Divider.Vertical> = () => {
  return (
    <div css={wrapperStyle}>
      <div css={boxStyle}>
        <span>1px Vertical Divider </span>
        <Divider.Vertical height={12} thickness={1} color={pindirectThemes.color.Black} />
      </div>
      <div>
        <span>5px Vertical Divider </span>
        <Divider.Vertical height={12} thickness={5} color={pindirectThemes.color.Pindirect_blue} />
      </div>
      <div>
        <span>10px Vertical Divider </span>
        <Divider.Vertical height={12} thickness={10} color={pindirectThemes.color.Pindirect_purple} />
      </div>
    </div>
  );
};

export const vertical = Template.bind({});
