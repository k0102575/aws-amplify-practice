/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/react';
import Button from '../Button';

export default {
  title: 'components|Button',
  component: Button.Modal,
} as ComponentMeta<typeof Button.Modal>;

const containerStyle = () => css`
  & > button:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const Template: ComponentStory<typeof Button.Modal> = () => {
  return (
    <div css={containerStyle}>
      <Button.Modal>Modal button</Button.Modal>
      <Button.Modal isDisabled>Disabled Modal button</Button.Modal>
    </div>
  );
};

export const modal = Template.bind({});
