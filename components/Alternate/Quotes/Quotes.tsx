import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Quotes/Quotes.module.css';
import mobileStyles from '@Styles/Alternate/Quotes/Quotes.mobile.module.css';
import { combineClasses, createCascade } from '@Utils';
import { ICascadeStyles, IScreenWithOptionsProps } from '@Types/interfaces';
import { quotes } from '@Quotes';
import star from '@Public/star.png';

const Quotes = ({ isActive, isMobile, options }: IScreenWithOptionsProps) => {
  let cascade: ICascadeStyles = createCascade(isMobile, styles, mobileStyles);

  let [appeared, setAppeared] = useState(false);

  let wrapper = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    let appearance: any = -1;
    if (!isMobile) {
      appearance = setTimeout(() => setAppeared(true), 20);
    } else {
      document.addEventListener('scroll', AnimatorController);
      AnimatorController();
    }

    return () => {
      clearTimeout(appearance);
      document.removeEventListener('scroll', AnimatorController);
    };
  }, []);

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
          <div className={cascade.line}>
            <div className={cascade.quote}>
              <div className={cascade.content}>{quotes[0].content}</div>
              <div className={cascade.star}>
                <Image src={star} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.author}>{quotes[0].author}</div>
            </div>
            <div className={cascade.divider}></div>
            {!isMobile && (
              <div className={cascade.quote}>
                <div className={cascade.content}>{quotes[1].content}</div>
                <div className={cascade.star}>
                  <Image src={star} layout="fill" objectFit="contain" />
                </div>
                <div className={cascade.author}>{quotes[1].author}</div>
              </div>
            )}
          </div>
          {isMobile && (
            <div className={cascade.line}>
              <div className={cascade.quote}>
                <div className={cascade.content}>{quotes[1].content}</div>
                <div className={cascade.star}>
                  <Image src={star} layout="fill" objectFit="contain" />
                </div>
                <div className={cascade.author}>{quotes[1].author}</div>
              </div>
              <div className={cascade.divider}></div>
            </div>
          )}
          <div className={cascade.line}>
            <div className={cascade.quote}>
              <div className={cascade.content}>{quotes[2].content}</div>
              <div className={cascade.star}>
                <Image src={star} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.author}>{quotes[2].author}</div>
            </div>
            <div className={cascade.divider}></div>
          </div>
          <div className={cascade.line}>
            <div className={cascade.divider}></div>
            <div className={cascade.quote}>
              <div className={cascade.content}>{quotes[3].content}</div>
              <div className={cascade.star}>
                <Image src={star} layout="fill" objectFit="contain" />
              </div>
              <div className={cascade.author}>{quotes[3].author}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
