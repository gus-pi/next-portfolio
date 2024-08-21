'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi';

type ProjectSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};

const ProjectSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: ProjectSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default ProjectSliderBtns;
