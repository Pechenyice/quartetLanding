import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from '@Styles/KvartetDisplay/KvartetDisplay.module.css';
import back from '@Public/back.png';
import { IKvartet } from '@Types/interfaces';
import { combineClasses, getPrefix } from '@Utils/index';

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
        memberArea.getBoundingClientRect().top < window.innerHeight - 300
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
          alt="logo back"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.memberImg}>
          <Image
            src={`${getPrefix()}${m.preview}`}
            alt="kvartet member"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.memberDescription}>
        <h3 className={styles.memberName}>{m.name}</h3>
        <h6 className={styles.memberInstrument}>{m.instrument}</h6>
        <p className={styles.memberAbout}>{m.about}</p>
      </div>
    </section>
  ));

  return <section className={styles.displayWrapper}>{kvartetPreview}</section>;
}
