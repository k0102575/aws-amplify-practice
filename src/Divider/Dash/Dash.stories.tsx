/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import { css } from '@emotion/react';
import Divider from '../Divider';

export default {
  title: 'components|Divider',
  component: Divider.Dash,
} as ComponentMeta<typeof Divider.Dash>;

const BoxStyle = () => css`
  padding: 30px;
  overflow: hidden;
`;

const testBoxStyle = () => css`
  width: 250px;
  overflow: hidden;
`;

const testGridBoxStlye = () => css`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const testBox2Style = () => css`
  overflow: hidden;
`;

const Template: ComponentStory<typeof Divider.Dash> = () => {
  return (
    <>
      <div css={BoxStyle}>
        <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
        <br />
        <div css={testBoxStyle}>
          <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
        </div>
        <br />
        <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
        <br />
        <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="10 10" />
        <br />
        <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="10 10" />
        <br />
        <Divider.Dash height={2} width={250} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="10 10" />
      </div>

      <div css={testBox2Style}>
        <h2>Test1</h2>
        <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
        <p>테스트테스트</p>
      </div>

      <div css={testGridBoxStlye}>
        <div css={testBox2Style}>
          <h2>Test1</h2>
          <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
          <p>테스트테스트</p>
        </div>
        <div css={testBox2Style}>
          <h2>Test1</h2>
          <Divider.Dash height={2} color={pindirectThemes.color.Black} strokeLineCap="round" dasharray="2 4" />
          <p>테스트테스트</p>
        </div>
      </div>
    </>
  );
};

export const dash = Template.bind({});
