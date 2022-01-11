import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Events/Events.module.css';
import mobileStyles from '@Styles/Alternate/Events/Events.mobile.module.css';
import { combineClasses, createCascade } from '@Utils';
import { ICascadeStyles, IScreenWithOptionsProps } from '@Types/interfaces';
import Program from '@Events/Program';
import Information from '@Events/Information';
import poster from '@Public/poster.png';

const Events = ({ isActive, isMobile, options }: IScreenWithOptionsProps) => {
  let cascade: ICascadeStyles = createCascade(isMobile, styles, mobileStyles);

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
        !isActive || !appeared ? cascade.inactive : '',
        !appeared ? cascade.entering : ''
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
          <h3 className={cascade.blockName}>Следующее выступление</h3>
          <div className={cascade.content}>
            <div className={cascade.info}>
              <div
                className={cascade.elem}
                style={{ '--delay': '0s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Название программы</h4>
                <p className={cascade.elemContent}>{Program.name}</p>
              </div>
              <div
                className={cascade.elem}
                style={{ '--delay': '0.2s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Продолжительность</h4>
                <p className={cascade.elemContent}>{Program.duration}</p>
              </div>
              <div
                className={cascade.elem}
                style={{ '--delay': '0.4s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>В программе</h4>
                <p className={cascade.elemContent}>{Program.content.join(', ')}</p>
              </div>
            </div>
            <div className={cascade.image}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={cascade.info}>
              <div
                className={cascade.elem}
                style={{ '--delay': '0.6s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Мероприятие</h4>
                <p className={cascade.elemContent}>{Information.name}</p>
              </div>
              <div
                className={cascade.elem}
                style={{ '--delay': '0.8s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Место проведения</h4>
                <p className={cascade.elemContent}>{Information.location}</p>
              </div>
              <div
                className={cascade.elem}
                style={{ '--delay': '1s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Дата</h4>
                <p className={cascade.elemContent}>{Information.date}</p>
              </div>
              <div
                className={cascade.elem}
                style={{ '--delay': '1.2s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={cascade.elemName}>Стоимость билета</h4>
                <p className={cascade.elemContent}>От {Information.price} ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
