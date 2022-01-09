import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Events/Events.module.css';
import { combineClasses } from '@Utils';
import { IScreenWithOptionsProps } from '@Types/interfaces';
import Program from '@Events/Program';
import Information from '@Events/Information';
import poster from '@Public/poster.png';

const Events = ({ isActive, options }: IScreenWithOptionsProps) => {
  let [appeared, setAppeared] = useState(false);

  useEffect(() => {
    let appearance = setTimeout(() => setAppeared(true), 300);

    return () => clearTimeout(appearance);
  }, []);

  return (
    <section
      className={combineClasses(
        styles.wrapper,
        'appScreen',
        !isActive || !appeared ? styles.inactive : '',
        !appeared ? styles.entering : ''
      )}
    >
      {options.decorators.map((d, i) => (
        <div
          key={`decorator-${i}`}
          className={styles.decorator}
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
      <div className={styles.animator}>
        <div className={styles.block}>
          <h3 className={styles.blockName}>Следующее выступление</h3>
          <div className={styles.content}>
            <div className={styles.info}>
              <div
                className={styles.elem}
                style={{ '--delay': '0s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Название программы</h4>
                <p className={styles.elemContent}>{Program.name}</p>
              </div>
              <div
                className={styles.elem}
                style={{ '--delay': '0.2s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Продолжительность</h4>
                <p className={styles.elemContent}>{Program.duration}</p>
              </div>
              <div
                className={styles.elem}
                style={{ '--delay': '0.4s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>В программе</h4>
                <p className={styles.elemContent}>{Program.content.join(', ')}</p>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.info}>
              <div
                className={styles.elem}
                style={{ '--delay': '0.6s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Мероприятие</h4>
                <p className={styles.elemContent}>{Information.name}</p>
              </div>
              <div
                className={styles.elem}
                style={{ '--delay': '0.8s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Место проведения</h4>
                <p className={styles.elemContent}>{Information.location}</p>
              </div>
              <div
                className={styles.elem}
                style={{ '--delay': '1s', '--translation': '-50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Дата</h4>
                <p className={styles.elemContent}>{Information.date}</p>
              </div>
              <div
                className={styles.elem}
                style={{ '--delay': '1.2s', '--translation': '50px' } as CSSProperties}
              >
                <h4 className={styles.elemName}>Стоимость билета</h4>
                <p className={styles.elemContent}>От {Information.price} ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
