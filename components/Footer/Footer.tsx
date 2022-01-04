import React from 'react';
import Image from 'next/image';
import styles from '@Styles/Footer/Footer.module.css';
import violin from '@Public/violin.png';
import { IKvartet } from '@Types/interfaces';
import { KvartetMember } from '@Types/index';
import { withAssetPrefix } from '@Utils/index';

const Footer = ({ kvartet }: { kvartet: KvartetMember[] }) => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.reminder}>Clio quartet</h1>
      <div className={styles.quartet}>
        {kvartet.slice(0, 2).map((m, i) => (
          <div key={`footer-first-half-member-${i}`} className={styles.member}>
            <Image src={`${withAssetPrefix(m.preview)}`} layout="fill" objectFit="contain" />
          </div>
        ))}
        <div className={styles.member}>
          <Image src={violin} layout="fill" objectFit="contain" />
        </div>
        {kvartet.slice(2).map((m, i) => (
          <div key={`footer-last-half-member-${i}`} className={styles.member}>
            <Image src={`${withAssetPrefix(m.preview)}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
