/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { pindirectThemes } from 'src/themes/pindirectThemes';
import { css } from '@emotion/react';
import { pindirectThemes } from 'src/themes/pindirectThemes';
import Button from '../Button';

export default {
  title: 'components|Button',
  component: Button.Box,
} as ComponentMeta<typeof Button.Box>;

const BoxStyle = () => css`
  margin: 10px 0 40px;
  & > button:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const infoBoxStyle = (margin?: string) => css`
  padding: 20px;
  background-color: ${pindirectThemes.color.Pindirect_blue}${pindirectThemes.color.Alpha_005};
  border-radius: 10px;
  margin: ${margin || 0};

  & > p {
    margin: 0 0 8px;
  }
`;

const buttonBoxStyle = () => css`
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  & > button:not(:first-of-type) {
    margin-left: 10px;
  }
`;

const absoluteBoxStyle = () => css`
  position: relative;
  height: 100px;
  padding: 20px;
  background-color: ${pindirectThemes.color.Pindirect_blue}${pindirectThemes.color.Alpha_005};
  border-radius: 10px;

  & > p {
    margin: 0 0 8px;
  }
`;

const Template: ComponentStory<typeof Button.Box> = () => {
  return (
    <div>
      <div css={BoxStyle}>
        <p>Small Buttons</p>

        <div css={infoBoxStyle()}>
          <p>Themes</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="small" theme="primaryBlack">
              Primary Black
            </Button.Box>
            <Button.Box size="small" theme="primaryBlue">
              Primary Blue
            </Button.Box>
            <Button.Box size="small" theme="primaryGray">
              Primary Gray
            </Button.Box>
            <Button.Box size="small" theme="secondGray">
              Secondary Gray
            </Button.Box>
            <Button.Box size="small" theme="inverse">
              Inverse
            </Button.Box>
            <Button.Box size="small" theme={{ backgroundColor: pindirectThemes.color.KakaoPay, color: pindirectThemes.color['Gray/15'] }}>
              Custom Color
            </Button.Box>
          </div>
        </div>

        <div css={infoBoxStyle('10px 0 0')}>
          <p>Disabled</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="small" theme="primaryBlack" isDisabled>
              Other Theme
            </Button.Box>
            <Button.Box size="small" theme="inverse" isDisabled>
              Inverse Theme
            </Button.Box>
          </div>
        </div>
      </div>

      <div css={BoxStyle}>
        <p>Medium Buttons</p>

        <div css={infoBoxStyle()}>
          <p>Themes</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="medium" theme="primaryBlack">
              Primary Black
            </Button.Box>
            <Button.Box size="medium" theme="primaryBlue">
              Primary Blue
            </Button.Box>
            <Button.Box size="medium" theme="primaryGray">
              Primary Gray
            </Button.Box>
            <Button.Box size="medium" theme="secondGray">
              Secondary Gray
            </Button.Box>
            <Button.Box size="medium" theme="inverse">
              Inverse
            </Button.Box>
            <Button.Box size="medium" theme={{ backgroundColor: pindirectThemes.color.KakaoPay, color: pindirectThemes.color['Gray/15'] }}>
              Custom Color
            </Button.Box>
          </div>
        </div>

        <div css={infoBoxStyle('10px 0 0')}>
          <p>Disabled</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="medium" theme="primaryBlack" isDisabled>
              Other Theme
            </Button.Box>
            <Button.Box size="medium" theme="inverse" isDisabled>
              Inverse Theme
            </Button.Box>
          </div>
        </div>
      </div>

      <div css={BoxStyle}>
        <p>Large Buttons</p>

        <div css={infoBoxStyle()}>
          <p>Themes</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="large" theme="primaryBlack">
              Primary Black
            </Button.Box>
            <Button.Box size="large" theme="primaryBlue">
              Primary Blue
            </Button.Box>
            <Button.Box size="large" theme="primaryGray">
              Primary Gray
            </Button.Box>
            <Button.Box size="large" theme="secondGray">
              Secondary Gray
            </Button.Box>
            <Button.Box size="large" theme="inverse">
              Inverse
            </Button.Box>
            <Button.Box size="large" theme={{ backgroundColor: pindirectThemes.color.KakaoPay, color: pindirectThemes.color['Gray/15'] }}>
              Custom Color
            </Button.Box>
          </div>
        </div>

        <div css={infoBoxStyle('10px 0 0')}>
          <p>Disabled</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="large" theme="primaryBlack" isDisabled>
              Other Theme
            </Button.Box>
            <Button.Box size="large" theme="inverse" isDisabled>
              Inverse Theme
            </Button.Box>
          </div>
        </div>
      </div>

      <div>
        <p>Fixed Width Usage</p>
        <div css={infoBoxStyle('10px 0 0')}>
          <p>Absolute usage</p>
          <div css={buttonBoxStyle}>
            <Button.Box size="small" theme="primaryBlack" width="100px">
              width 100px
            </Button.Box>
            <Button.Box size="small" theme="primaryBlack" width="200px">
              width 200px
            </Button.Box>
            <Button.Box size="small" theme="primaryBlack" width="300px">
              width 300px
            </Button.Box>
          </div>
        </div>
      </div>

      <div>
        <p>Absolute usage</p>

        <div css={absoluteBoxStyle}>
          <p>Relative Box</p>
          <Button.Box size="small" theme="primaryBlack" absolutePosition={{ top: 50, left: 10 }}>
            Absolute top:50 left:10
          </Button.Box>
          <Button.Box size="small" theme="primaryBlue" absolutePosition={{ bottom: 10, right: 10 }}>
            Absolute bottom:10 right:10
          </Button.Box>
        </div>
      </div>
    </div>
  );
};

export const box = Template.bind({});
