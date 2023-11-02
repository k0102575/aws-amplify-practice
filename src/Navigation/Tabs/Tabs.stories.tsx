import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainWrapper from 'src/MainWrapper';
import { useState } from 'react';
import Tabs from './Tabs';

export default {
  title: 'components|Navigation|Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  // useState
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const datas = ['Tab1', 'Tab2', 'Tab3'];

  const onClickTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <MainWrapper>
      <Tabs
        headers={['Tab1', 'Tab2', 'Tab3']}
        bodys={datas.map((data) => {
          return <div key={data}>{data}</div>;
        })}
        activeIndex={activeIndex}
        onClickTab={onClickTab}
      />
    </MainWrapper>
  );
};

export const tabs = Template.bind({});
