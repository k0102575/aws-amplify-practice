/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainWrapper from 'src/MainWrapper';
import { css } from '@emotion/react';
import Anchor from './Anchor';

export default {
  title: 'components|Navigation|Anchor',
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const cssStyle = (i: number) => css`
  height: ${`2${i}00px`};
  background-color: lightblue;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Template: ComponentStory<typeof Anchor> = () => {
  const datas = ['Anchor1', 'Anchor2', 'Anchor3'];

  return (
    <MainWrapper>
      <Anchor
        headers={['Anchor1', 'Anchor2', 'Anchor3']}
        bodys={datas.map((data, i) => {
          return (
            <div key={data} css={cssStyle(i)}>
              {data}
            </div>
          );
        })}
        top={0}
        headerSidePadding={20}
        isStoryBookTest
      />
    </MainWrapper>
  );
};

export const anchor = Template.bind({});
