import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Archive/Archive.module.css';
import mobileStyles from '@Styles/Alternate/Archive/Archive.mobile.module.css';
import { combineClasses, createCascade } from '@Utils';
import { ICascadeStyles, IScreenWithOptionsProps } from '@Types/interfaces';
import Program from '@Events/Program';
import Information from '@Events/Information';
import poster from '@Public/poster.png';
import { ClassicNavigationAnchors } from '@Types/enums';

const Archive = ({ isActive, isMobile, options, onAppeared }: IScreenWithOptionsProps) => {
  let cascade: ICascadeStyles = useMemo(
    () => createCascade(isMobile, styles, mobileStyles),
    [isMobile]
  );

  let [appeared, setAppeared] = useState(false);

  let wrapper = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    let appearance: any = -1;
    if (!isMobile) {
      appearance = setTimeout(() => setAppeared(true), 300);
    } else {
      document.addEventListener('scroll', AnimatorController);
      AnimatorController();
    }

    return () => {
      clearTimeout(appearance);
      document.removeEventListener('scroll', AnimatorController);
    };
  }, []);

  useEffect(() => {
    onAppeared({ name: 'archive', status: appeared });
  }, [appeared]);

  function AnimatorController() {
    if (wrapper.current?.getBoundingClientRect().top < window.innerHeight / 2) {
      setAppeared(true);
    }

    if (wrapper.current?.getBoundingClientRect().top >= window.innerHeight) {
      setAppeared(false);
    }
  }

  return (
    <section
      className={combineClasses(
        cascade.wrapper,
        'appScreen',
        !isActive || !appeared ? cascade.inactive : ''
      )}
      ref={wrapper}
      id={ClassicNavigationAnchors.ARCHIVE}
    >
      {options.decorators.map((d, i) => (
        <div
          key={`decorator-${i}`}
          className={cascade.decorator}
          style={
            {
              '--width': d.width + 'px',
              '--height': d.height + 'px',
              '--opacity': d.opacity ? d.opacity : '.7',
              '--color': d.color,
              '--delay': `0.${(i + 1) * 5}`,
              [`${d.position.top ? '--top' : '--bottom'}`]: d.position.top
                ? d.position.top + 'px'
                : d.position.bottom + 'px',
              [`${d.position.left ? '--left' : '--right'}`]: d.position.left
                ? d.position.left + 'px'
                : d.position.right + 'px',
            } as CSSProperties
          }
        ></div>
      ))}
      <div className={cascade.animator}>
        <div className={cascade.block}>
          <h3 className={cascade.blockName}>??????????</h3>
          <div className={cascade.gallery}>
            <div className={combineClasses(cascade.back, cascade.branch)}>
              <div className={cascade.case} style={{ '--delay': '0' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '.8' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '.3' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '1.5' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className={combineClasses(cascade.front, cascade.branch)}>
              <div className={cascade.case} style={{ '--delay': '1' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '1.2' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '1' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.case} style={{ '--delay': '2' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
