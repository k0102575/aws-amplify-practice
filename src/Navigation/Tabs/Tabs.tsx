/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';
import NavigationCommonStyle from '../styles';
import { NavigationProps } from '../types';

/*
  Interface
*/
export interface TabsProps extends NavigationProps {
  activeIndex: number;
  onClickTab: (index: number) => void;
}

/*
  Style
*/
const tabsHeaderStyle = (headerHeight: number, headerSidePadding: number) => css`
  ${NavigationCommonStyle.commonHeaderStyle(headerHeight, headerSidePadding)};
  position: relative;
`;

/*
  Component
*/
const Tabs = ({
  headers,
  bodys,
  headerHeight = 36,
  headerSidePadding = 0,
  sliderSidePadding = 4,
  gap = 20,
  activeIndex = 0,
  onClickTab,
  style,
}: TabsProps) => {
  // useEffect
  useEffect(() => {
    if (headers.length !== bodys.length) {
      throw new Error('Tabs Component 의 Headers 개수와 Bodys 개수가 일치 하지 않습니다.');
    }
  }, [headers, bodys]);

  return (
    <div css={[NavigationCommonStyle.componentStyle(gap), style]}>
      <div css={tabsHeaderStyle(headerHeight, headerSidePadding)}>
        {headers.map((tab, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`Tabs-header-${tab}-${i}`}
            css={NavigationCommonStyle.tabStyle(i === activeIndex)}
            onClick={() => {
              onClickTab(i);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === 'Space') {
                onClickTab(i);
              }
            }}
            role="button"
            tabIndex={i}
          >
            <span>{tab}</span>
          </div>
        ))}
        <div css={NavigationCommonStyle.sliderStyle({ headerLength: headers.length, sliderSidePadding, headerSidePadding, index: activeIndex })} />
      </div>
      {bodys[activeIndex]}
    </div>
  );
};

export default Tabs;
export type TabsType = { Tabs: typeof Tabs };
