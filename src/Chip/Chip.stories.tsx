/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import Chip from './Chip';

export default {
  title: 'components|Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const wrapperStyle = () => css`
  display: grid;
  gap: 10px;
`;

const Template: ComponentStory<typeof Chip> = () => {
  return (
    <div css={wrapperStyle}>
      <Chip color="white" type="large" text="Test1" backColor="blue" />
      <Chip color="white" type="medium" text="5개월 할인" backColor={pindirectThemes.color.Pindirect_purple} />
      <Chip color="white" type="number" text="123" backColor="blue" />
      <Chip color="white" type="small" text="Family Site" backColor={pindirectThemes.color['Gray/06']} />
    </div>
  );
};

export const chip = Template.bind({});
