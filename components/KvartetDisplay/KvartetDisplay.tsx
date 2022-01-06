import Image from 'next/image';
import React, { CSSProperties, useEffect } from 'react';
import styles from '@Styles/KvartetDisplay/KvartetDisplay.module.css';
import back from '@Public/back.png';
import { IKvartet } from '@Types/interfaces';
import { combineClasses, withAssetPrefix } from '@Utils';
import { QuotesDisplay } from '..';

export default function KvartetDisplay({ kvartet }: IKvartet): JSX.Element {
  let membersAreas: HTMLCollectionOf<Element> = null as unknown as HTMLCollectionOf<Element>;

  useEffect(() => {
    membersAreas = document.getElementsByClassName(styles.memberInner);
    document.addEventListener('scroll', kvartetDisplayAnimatorController);

    return () => {
      document.removeEventListener('scroll', kvartetDisplayAnimatorController);
    };
  }, []);

  function kvartetDisplayAnimatorController() {
    for (let memberArea of membersAreas) {
      if (
        !memberArea.classList.contains(styles.memberInner_active) &&
        memberArea.getBoundingClientRect().top < window.innerHeight - 200
      ) {
        memberArea.classList.add(styles.memberInner_active);
        continue;
      }

      if (
        memberArea.classList.contains(styles.memberInner_active) &&
        memberArea.getBoundingClientRect().top > window.innerHeight
      ) {
        memberArea.classList.remove(styles.memberInner_active);
      }
    }
  }

  let kvartetPreview = kvartet.map((m, i) => (
    <section
      className={combineClasses(styles.memberInner, i % 2 ? styles.memberInner_rightAligned : '')}
      key={`member-${i}`}
    >
      <div className={styles.memberPreview}>
        <Image
          src={back}
          className={styles.memberBack}
          alt="member back"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.memberImg}>
          <Image
            src={`${withAssetPrefix(m.preview)}`}
            alt="kvartet member"
            layout="fill"
            objectFit="contain"
          />
          <h4 className={styles.memberImageName}>{m.name}</h4>
        </div>
      </div>
      <div className={styles.memberDescription}>
        <div className={styles.memberDescriptionImage}></div>
        <div className={styles.memberDescriptionText}>
          <p className={styles.memberAbout}>{m.about}</p>
        </div>
      </div>
    </section>
  ));

  return (
    <section className={styles.displayWrapper}>
      {kvartetPreview.slice(0, 2)}
      <QuotesDisplay />
      {kvartetPreview.slice(2)}
    </section>
  );
}
