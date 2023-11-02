/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import Button from '../Button';

export default {
  title: 'components|Button',
  component: Button.Full,
} as ComponentMeta<typeof Button.Full>;

const BoxStyle = () => css`
  margin: 100px 0 50px;
  & > button:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const absoluteBoxStyle = () => css`
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid ${pindirectThemes.color['Gray/12']};
  margin: 0 100px 100px;
`;

const Template: ComponentStory<typeof Button.Full> = () => {
  return (
    <div>
      <div css={BoxStyle}>
        <p>General usage</p>
        <Button.Full theme="primaryBlack">Primary Black</Button.Full>
        <Button.Full theme="primaryBlue">Primary Blue</Button.Full>
        <Button.Full theme="primaryBlack" isDisabled>
          Disabled
        </Button.Full>
      </div>

      <div>
        <p>Absolute usage (custom width: 300px)</p>

        <div css={absoluteBoxStyle}>
          <p>Relative Box</p>
          <Button.Full theme="primaryBlack" absolutePosition={{ top: 0 }}>
            Absolute top:0
          </Button.Full>
          <Button.Full theme="primaryBlue" absolutePosition={{ bottom: 0 }}>
            Absolute bottom:0
          </Button.Full>
        </div>
      </div>

      <Button.Full theme="primaryBlack" fixedPosition={{ top: 0 }}>
        Fixed top button
      </Button.Full>
      <Button.Full theme="primaryBlue" fixedPosition={{ bottom: 0 }}>
        Fixed bottom button
      </Button.Full>
    </div>
  );
};

export const full = Template.bind({});
