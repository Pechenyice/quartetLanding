import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Media/Media.module.css';
import mobileStyles from '@Styles/Alternate/Media/Media.mobile.module.css';
import { combineClasses, createCascade } from '@Utils';
import { ICascadeStyles, IScreenProps } from '@Types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@Media';
import Polina from '@Public/Polina.png';
import PolinaK from '@Public/Polinak.png';
import Alex from '@Public/Alex.png';
import Varvara from '@Public/Varvara.png';
import violin from '@Public/violin.png';
import { ClassicNavigationAnchors } from '@Types/enums';

const Main = ({ isActive, isMobile, onAppeared }: IScreenProps) => {
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
    onAppeared({ name: 'media', status: appeared });
  }, [appeared]);

  function AnimatorController() {
    if (wrapper.current?.getBoundingClientRect().top < window.innerHeight - 200) {
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
      id={ClassicNavigationAnchors.MEDIA}
    >
      <div className={cascade.animator}>
        <div className={cascade.inner}>
          <div className={cascade.links}>
            {media.map((m, i) => (
              <div
                className={cascade.link}
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
                  <div className={cascade.linkHint}>Перейти в {m.name}</div>
                </a>
              </div>
            ))}
          </div>
          <h2 className={cascade.heading}>Clio quartet</h2>
          <div className={cascade.images}>
            <div className={cascade.image} style={{ '--delay': '.1' } as CSSProperties}>
              <Image src={Polina} layout="fill" objectFit="contain" />
            </div>
            <div className={cascade.image} style={{ '--delay': '.2' } as CSSProperties}>
              <Image src={Alex} layout="fill" objectFit="contain" />
            </div>
            <div
              className={combineClasses(cascade.image, cascade.violin)}
              style={{ '--delay': '.3' } as CSSProperties}
            >
              <Image src={violin} layout="fill" objectFit="contain" />
            </div>
            <div className={cascade.image} style={{ '--delay': '.4' } as CSSProperties}>
              <Image src={PolinaK} layout="fill" objectFit="contain" />
            </div>
            <div className={cascade.image} style={{ '--delay': '.5' } as CSSProperties}>
              <Image src={Varvara} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
