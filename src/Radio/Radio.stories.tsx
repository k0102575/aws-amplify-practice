import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Radio from './Radio';

export default {
  title: 'components|Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = () => {
  // useState
  const [checkedValue, setCheckedValue] = useState('test1');

  // handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Radio size="medium" onChange={onChange} name="test" id="test1" value="test1" checked={checkedValue === 'test1'} label={<span>라디오 </span>} />
      <Radio size="small" onChange={onChange} name="test" id="test2" value="test2" checked={checkedValue === 'test2'} label={<span>라디오2 </span>} />
      <button type="submit">submit</button>
    </form>
  );
};

export const radio = Template.bind({});
