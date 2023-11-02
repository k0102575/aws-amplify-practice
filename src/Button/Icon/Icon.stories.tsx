/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { pindirectThemes } from 'src/themes/pindirectThemes';
import { css } from '@emotion/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import Button from '../Button';

export default {
  title: 'components|Button',
  component: Button.Icon,
} as ComponentMeta<typeof Button.Icon>;

const IconStyle = () => css`
  margin: 10px 0 40px;
  & > button:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const infoIconStyle = (margin?: string) => css`
  padding: 20px;
  background-color: ${pindirectThemes.color.Pindirect_blue}${pindirectThemes.color.Alpha_005};
  border-radius: 10px;
  margin: ${margin || 0};

  & > p {
    margin: 0 0 8px;
  }
`;

const buttonIconStyle = () => css`
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  & > button:not(:first-of-type) {
    margin-left: 10px;
  }
`;

const absoluteIconStyle = () => css`
  position: relative;
  height: 100px;
  padding: 20px;
  background-color: ${pindirectThemes.color.Pindirect_blue}${pindirectThemes.color.Alpha_005};
  border-radius: 10px;

  & > p {
    margin: 0 0 8px;
  }
`;

const Template: ComponentStory<typeof Button.Icon> = () => {
  return (
    <div>
      <div css={IconStyle}>
        <p>Medium Buttons</p>

        <div css={infoIconStyle()}>
          <p>Themes</p>
          <div css={buttonIconStyle}>
            <Button.Icon size="medium" theme="primaryBlack" iconProps={{ name: 'icGiftBox' }}>
              Primary Black
            </Button.Icon>
            <Button.Icon size="medium" theme="primaryBlue" iconProps={{ name: 'icGiftBox' }}>
              Primary Blue
            </Button.Icon>
            <Button.Icon size="medium" theme="primaryGray" iconProps={{ name: 'icGiftBox' }}>
              Primary Gray
            </Button.Icon>
            <Button.Icon
              size="medium"
              theme={{ backgroundColor: pindirectThemes.color.KakaoPay, color: pindirectThemes.color['Gray/15'] }}
              iconProps={{ name: 'icKakaoFill', color: pindirectThemes.color['Gray/15'] }}
            >
              Custom Color
            </Button.Icon>
          </div>
        </div>

        <div css={infoIconStyle('10px 0 0')}>
          <p>Disabled</p>
          <div css={buttonIconStyle}>
            <Button.Icon size="medium" theme="primaryBlack" isDisabled iconProps={{ name: 'icGiftBox' }}>
              Other Theme
            </Button.Icon>
          </div>
        </div>
      </div>

      <div css={IconStyle}>
        <p>Large Buttons</p>

        <div css={infoIconStyle()}>
          <p>Themes</p>
          <div css={buttonIconStyle}>
            <Button.Icon size="large" theme="primaryBlack" iconProps={{ name: 'icGiftBox' }}>
              Primary Black
            </Button.Icon>
            <Button.Icon size="large" theme="primaryBlue" iconProps={{ name: 'icGiftBox' }}>
              Primary Blue
            </Button.Icon>
            <Button.Icon size="large" theme="primaryGray" iconProps={{ name: 'icGiftBox' }}>
              Primary Gray
            </Button.Icon>
            <Button.Icon
              size="large"
              theme={{ backgroundColor: pindirectThemes.color.KakaoPay, color: pindirectThemes.color['Gray/15'] }}
              iconProps={{ name: 'icKakaoFill', color: pindirectThemes.color['Gray/15'] }}
            >
              Custom Color
            </Button.Icon>
          </div>
        </div>

        <div css={infoIconStyle('10px 0 0')}>
          <p>Disabled</p>
          <div css={buttonIconStyle}>
            <Button.Icon size="large" theme="primaryBlack" isDisabled iconProps={{ name: 'icGiftBox' }}>
              Other Theme
            </Button.Icon>
          </div>
        </div>
      </div>

      <div>
        <p>Absolute usage</p>
        <div css={absoluteIconStyle}>
          <p>Relative Icon</p>
          <Button.Icon size="medium" theme="primaryBlack" absolutePosition={{ top: 50, left: 10 }} iconProps={{ name: 'icGiftBox' }}>
            Absolute top:50 left:10
          </Button.Icon>
          <Button.Icon size="medium" theme="primaryBlue" absolutePosition={{ bottom: 10, right: 10 }} iconProps={{ name: 'icGiftBox' }}>
            Absolute bottom:10 right:10
          </Button.Icon>
        </div>
      </div>
    </div>
  );
};

export const icon = Template.bind({});
