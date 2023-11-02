/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { css } from '@emotion/react';
import BodyObserverComponent from './BodyObserverComponent';
import NavigationCommonStyle from '../styles';
import { NavigationProps } from '../types';

/*
  Interface
*/
export interface AnchorProps extends NavigationProps {
  top: number;
  isStoryBookTest?: boolean;
}

interface ObserverProps {
  isIntersecting: boolean;
  index: number;
}

/*
  Style
*/
const anchorHeaderStyle = (headerHeight: number, top: number, headerSidePadding: number) => css`
  ${NavigationCommonStyle.commonHeaderStyle(headerHeight, headerSidePadding)};
  position: sticky;
  top: ${top}px;
`;

/*
  Component
*/
const Anchor = ({
  headers,
  bodys,
  top,
  headerHeight = 36,
  headerSidePadding = 0,
  sliderSidePadding = 4,
  gap = 20,
  style,
  isStoryBookTest = false,
}: AnchorProps) => {
  // useState
  const [index, setIndex] = useState(0);
  const [isClick, setIsClick] = useState<boolean>(false);

  // useRef
  const observerRefs = useRef<Array<ObserverProps>>([]);
  const childRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tabBodyRef = useRef<HTMLDivElement>(null);

  // useMemo
  const { storyBookTop, scrollPotition } = useMemo(() => {
    if (isStoryBookTest) {
      return { storyBookTop: 50, scrollPotition: 50 - headerHeight + 2 };
    }

    return { storyBookTop: 0, scrollPotition: 0 };
  }, [isStoryBookTest, headerHeight]);

  // handler
  const onIntersect = useCallback(
    ([entries]: IntersectionObserverEntry[], i: number) => {
      const { isIntersecting } = entries;
      const { length } = bodys;

      observerRefs.current[i] = {
        isIntersecting,
        index: i,
      };

      const observerCurrentCount = observerRefs.current.filter((item) => item).length;

      if (observerCurrentCount !== length) {
        return;
      }

      const [filterArray] = observerRefs.current.filter((item) => item.isIntersecting);
      setIndex(filterArray ? filterArray?.index : 0);
    },
    [bodys],
  );

  const scrollToWithCallback = useCallback((offset: number, callback: () => void) => {
    const fixedOffset = offset.toFixed();
    const onScroll = () => {
      if (window.pageYOffset.toFixed() === fixedOffset) {
        window.removeEventListener('scroll', onScroll);
        callback();
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }, []);

  const onClickTab = useCallback(
    (clickIndex: number) => {
      setIsClick(true);

      const bodyTop = tabBodyRef.current?.offsetTop || 0;
      const minus = bodyTop - top - headerHeight + 1 + scrollPotition;

      const sumWithInitial = clickIndex
        ? childRefs.current.slice(0, clickIndex).reduce((sum, current) => {
            const currentHeight = current?.getBoundingClientRect()?.height || 0;
            if (currentHeight) {
              return sum + currentHeight;
            }

            return sum;
          }, 0)
        : 0;

      scrollToWithCallback(Math.ceil(sumWithInitial + minus), () => {
        setIsClick(false);
      });
    },
    [top, headerHeight, scrollPotition, scrollToWithCallback],
  );

  // useEffect
  useEffect(() => {
    if (headers.length !== bodys.length) {
      throw new Error('Anchor Component 의 Headers 개수와 Bodys 개수가 일치 하지 않습니다.');
    }
  }, [headers, bodys]);

  return (
    <div css={[NavigationCommonStyle.componentStyle(gap), style]}>
      <div css={anchorHeaderStyle(headerHeight, top, headerSidePadding)}>
        {headers.map((tab, i) => (
          <div
            key={`anchor-header-${tab}`}
            css={NavigationCommonStyle.tabStyle(i === index)}
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
        <div css={NavigationCommonStyle.sliderStyle({ headerLength: headers.length, sliderSidePadding, headerSidePadding, index })} />
      </div>
      <div ref={tabBodyRef}>
        {bodys.map((body, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`Anchor-Body-${i}`}
            ref={(el) => {
              childRefs.current[i] = el;
            }}
          >
            <BodyObserverComponent
              rootMargin={`${-(top + headerHeight + storyBookTop)}px`}
              threshold={0}
              onIntersect={(entries: IntersectionObserverEntry[]) => {
                if (!isClick) {
                  onIntersect(entries, i);
                }
              }}
            >
              {body}
            </BodyObserverComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anchor;
export type AnchorType = { Anchor: typeof Anchor };
