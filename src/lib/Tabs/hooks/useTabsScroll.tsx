/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import { ScrollState, TabsDirection } from '../types';

const useTabsScroll = (
  ref: RefObject<HTMLDivElement> | null,
  direction: TabsDirection
) => {
  const [isOverFlow, setIsOverFlow] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>(null);

  const handleMoveScroll = (pos: 'start' | 'end') => {
    if (!ref || !ref.current) return;

    const { scrollLeft, clientWidth, scrollTop, clientHeight } = ref.current;

    if (direction === 'horizontal')
      ref.current.scrollTo({
        left:
          pos === 'end' ? scrollLeft + clientWidth : scrollLeft - clientWidth,
        behavior: 'smooth',
      });

    if (direction === 'vertical')
      ref.current.scrollTo({
        top:
          pos === 'end' ? scrollTop + clientHeight : scrollTop - clientHeight,
        behavior: 'smooth',
      });
  };

  const handleScroll = () => {
    if (!ref || !ref.current) return;

    const {
      scrollWidth,
      clientWidth,
      scrollLeft,
      scrollTop,
      scrollHeight,
      clientHeight,
    } = ref.current;

    if (scrollLeft > 0 || scrollTop > 0) setScrollState('both');
    else setScrollState('start');

    if (
      direction === 'horizontal' &&
      Math.abs(scrollWidth - scrollLeft - clientWidth) < 5
    )
      setScrollState('end');

    if (
      direction === 'vertical' &&
      Math.abs(scrollHeight - scrollTop - clientHeight) < 5
    )
      setScrollState('end');
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!ref || !ref.current) return;

      const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
        ref.current;

      if (scrollWidth > clientWidth || scrollHeight > clientHeight) {
        setIsOverFlow(true);
      }

      handleScroll();
    });

    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref && ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [handleScroll, ref]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const { current } = ref;

    current.addEventListener('scroll', handleScroll);

    return () => {
      current.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, ref]);

  return { isOverFlow, scrollState, handleMoveScroll };
};

export default useTabsScroll;