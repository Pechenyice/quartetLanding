import React from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Member/Member.module.css';
import { combineClasses, withAssetPrefix } from '@Utils';
import { IMemberScreenProps } from '@Types/interfaces';

const Member = ({ isActive, member }: IMemberScreenProps) => {
  return (
    <section
      className={combineClasses(styles.wrapper, 'appScreen', !isActive ? styles.inactive : '')}
    >
      <div className={styles.animator}>
        <div>
          <div>
            <Image src={withAssetPrefix(member.preview)} layout="fill" objectFit="contain" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Member;
