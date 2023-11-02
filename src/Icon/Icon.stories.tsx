import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'components|Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => {
  return (
    <>
      <Icon name="icChevron" width="30px" height="30px" rotate={90} />
      <Icon name="icHome" width="24px" height="24px" strokeWidth={2} />
      <Icon name="icRoamingCs" width="16px" height="16px" />
      <Icon name="icChargeCs" width="16px" height="16px" />
    </>
  );
};

export const icon = Template.bind({});
