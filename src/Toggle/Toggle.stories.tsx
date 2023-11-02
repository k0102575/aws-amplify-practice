import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'components|Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => {
  // useState
  const [isChecked, setIsChecked] = useState(true);

  // handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <main>
      <Toggle name="test" onChange={onChange} isChecked={isChecked} />
    </main>
  );
};

export const toggle = Template.bind({});
