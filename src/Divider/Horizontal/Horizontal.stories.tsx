/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { css } from '@emotion/react';
import Divider from '../Divider';

export default {
  title: 'components|Divider',
  component: Divider.Horizontal,
} as ComponentMeta<typeof Divider.Horizontal>;

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

const Template: ComponentStory<typeof Divider.Horizontal> = () => {
  return (
    <div css={wrapperStyle}>
      <div css={boxStyle}>
        <span>1px Horizontal Divider </span>
        <Divider.Horizontal width={100} thickness={1} color={pindirectThemes.color.Black} />
      </div>
      <div>
        <span>5px Horizontal Divider </span>
        <Divider.Horizontal width={100} thickness={5} color={pindirectThemes.color.Pindirect_blue} />
      </div>
      <div>
        <span>10px Horizontal Divider </span>
        <Divider.Horizontal width={100} thickness={10} color={pindirectThemes.color.Pindirect_purple} />
      </div>
    </div>
  );
};

export const Horizontal = Template.bind({});
