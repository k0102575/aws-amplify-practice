import { useEffect, useRef } from 'react';

/*
  Interface
*/
interface IntersectionObserverProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number | Array<number>;
  onIntersect: IntersectionObserverCallback;
}

/*
  Component
*/
const BodyObserverComponent = ({ children, rootMargin = '0px', threshold = 0, onIntersect }: IntersectionObserverProps) => {
  // useRef
  const ref = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    const currentRef = ref.current;

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });

    observer.observe(ref.current as Element);

    return () => {
      if (currentRef) {
        observer?.unobserve(currentRef as Element);
      }
    };
  }, [ref, rootMargin, threshold, onIntersect]);

  return <div ref={ref}>{children}</div>;
};

export default BodyObserverComponent;
