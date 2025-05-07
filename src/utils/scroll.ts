import { scroller as scroll } from 'react-scroll';

export const scrollToBlock = (blockID: string): void => {
  scroll.scrollTo(blockID, {
    duration: 500,
    delay: 100,
    smooth: true,
  });
};
