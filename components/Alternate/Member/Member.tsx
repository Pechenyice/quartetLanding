import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Member/Member.module.css';
import mobileStyles from '@Styles/Alternate/Member/Member.mobile.module.css';
import { combineClasses, createCascade, withAssetPrefix } from '@Utils';
import {
  ICascadeStyles,
  IMemberScreenOptions,
  IMemberScreenProps,
  IScreenProps,
} from '@Types/interfaces';
import star from '@Public/star.png';
import { ClassicNavigationAnchors } from '@Types/enums';

const Member = ({ isActive, isMobile, member, options, onAppeared }: IMemberScreenProps) => {
  let cascade: ICascadeStyles = useMemo(
    () => createCascade(isMobile, styles, mobileStyles),
    [isMobile]
  );

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

  useEffect(() => {
    onAppeared({ name: member.screenName, status: appeared });
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
        (options as IMemberScreenOptions).reversed ? cascade.reversed : '',
        !isActive || !appeared ? cascade.inactive : ''
      )}
      ref={wrapper}
      id={member.screenName}
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
        <div className={cascade.memberInner}>
          <div className={cascade.image}>
            <Image src={withAssetPrefix(member.preview)} layout="fill" objectFit="contain" />
          </div>
          <div className={cascade.data}>
            <div className={cascade.info}>
              <h3 className={combineClasses(cascade.heading, cascade.name)}>{member.name}</h3>
              <div className={cascade.divider}>
                <Image src={star} layout="fill" objectFit="contain" />
              </div>
              <h3 className={combineClasses(cascade.heading, cascade.instrument)}>
                {member.instrument}
              </h3>
            </div>
            <div className={cascade.text}>
              <p>{member.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
