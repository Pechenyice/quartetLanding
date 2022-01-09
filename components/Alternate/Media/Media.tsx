import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Media/Media.module.css';
import { combineClasses } from '@Utils';
import { IScreenProps } from '@Types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@Media';
import Polina from '@Public/Polina.png';
import PolinaK from '@Public/Polinak.png';
import Alex from '@Public/Alex.png';
import Varvara from '@Public/Varvara.png';
import violin from '@Public/violin.png';

const Main = ({ isActive }: IScreenProps) => {
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
      <div className={styles.animator}>
        <div>
          <div className={styles.links}>
            {media.map((m, i) => (
              <div
                className={styles.link}
                key={i}
                style={
                  {
                    '--active-color': m.activeColor,
                    '--scale': 0.5 - 0.25 * Math.abs(i - Math.floor(media.length / 2)),
                    '--delay': 0.25 * Math.abs(i - Math.floor(media.length / 2)),
                  } as CSSProperties
                }
              >
                <a href={m.link}>
                  <FontAwesomeIcon icon={m.icon} />
                  <div className={styles.linkHint}>Перейти в {m.name}</div>
                </a>
              </div>
            ))}
          </div>
          <h2 className={styles.heading}>Clio quartet</h2>
          <div className={styles.images}>
            <div className={styles.image} style={{ '--delay': '.1' } as CSSProperties}>
              <Image src={Polina} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.image} style={{ '--delay': '.2' } as CSSProperties}>
              <Image src={Alex} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.image} style={{ '--delay': '.3' } as CSSProperties}>
              <Image src={violin} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.image} style={{ '--delay': '.4' } as CSSProperties}>
              <Image src={PolinaK} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.image} style={{ '--delay': '.5' } as CSSProperties}>
              <Image src={Varvara} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
