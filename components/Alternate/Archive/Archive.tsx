import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Archive/Archive.module.css';
import { combineClasses } from '@Utils';
import { IScreenWithOptionsProps } from '@Types/interfaces';
import Program from '@Events/Program';
import Information from '@Events/Information';
import poster from '@Public/poster.png';

const Archive = ({ isActive, options }: IScreenWithOptionsProps) => {
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
        !isActive || !appeared ? styles.inactive : ''
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
          <h3 className={styles.blockName}>Архив</h3>
          <div className={styles.gallery}>
            <div className={combineClasses(styles.back, styles.branch)}>
              <div className={styles.case} style={{ '--delay': '0' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '.8' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '.3' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '1.5' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className={combineClasses(styles.front, styles.branch)}>
              <div className={styles.case} style={{ '--delay': '1' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '1.2' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '1' } as CSSProperties}>
                <Image src={poster} layout="fill" objectFit="contain" />
              </div>
              <div className={styles.case} style={{ '--delay': '2' } as CSSProperties}>
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
