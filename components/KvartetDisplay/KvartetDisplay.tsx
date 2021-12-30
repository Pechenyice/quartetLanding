import Image from 'next/image';
import React, { CSSProperties, useEffect } from 'react';
import styles from '@Styles/KvartetDisplay/KvartetDisplay.module.css';
import back from '@Public/back.png';
import { IKvartet } from '@Types/interfaces';
import { combineClasses, withAssetPrefix } from '@Utils/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { quotes } from 'quotes';

export default function KvartetDisplay({ kvartet }: IKvartet): JSX.Element {
  let membersAreas: HTMLCollectionOf<Element> = null as unknown as HTMLCollectionOf<Element>;
  let quotesArea: Element = null as unknown as Element;

  useEffect(() => {
    membersAreas = document.getElementsByClassName(styles.memberInner);
    quotesArea = document.getElementsByClassName(styles.quotes)[0];
    document.addEventListener('scroll', kvartetDisplayAnimatorController);

    return () => {
      document.removeEventListener('scroll', kvartetDisplayAnimatorController);
    };
  }, []);

  function kvartetDisplayAnimatorController() {
    if (
      !quotesArea.classList.contains(styles.quotes_active) &&
      quotesArea.getBoundingClientRect().top < window.innerHeight - 200
    ) {
      quotesArea.classList.add(styles.quotes_active);
    } else if (
      quotesArea.classList.contains(styles.quotes_active) &&
      quotesArea.getBoundingClientRect().top > window.innerHeight
    ) {
      quotesArea.classList.remove(styles.quotes_active);
    }

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
        <div className={styles.memberDescriptionImage}>
          {/* <Image src={back} alt="member back" layout="fill" objectFit="contain" /> */}
        </div>
        <div className={styles.memberDescriptionText}>
          {/* <h3 className={styles.memberName}>{m.name}</h3> */}
          {/* <h6 className={styles.memberInstrument}>{m.instrument}</h6> */}
          <p className={styles.memberAbout}>{m.about}</p>
        </div>
      </div>
    </section>
  ));

  let quotesPreview = quotes.map((q, i) => (
    <div
      className={styles.quote}
      key={`quote-${i}`}
      style={{ '--quote-index': `${(i + 1) * 0.2}` } as CSSProperties}
    >
      <div className={styles.quoteContent}>
        <FontAwesomeIcon
          className={combineClasses(styles.quoteDecorator, styles.quoteLeft)}
          icon={faQuoteLeft}
        />
        <p className={styles.quoteContent}>{q.content}</p>
        <FontAwesomeIcon
          className={combineClasses(styles.quoteDecorator, styles.quoteRight)}
          icon={faQuoteLeft}
        />
      </div>
      <div className={styles.quoteAuthor}>- {q.author}</div>
    </div>
  ));

  return (
    <section className={styles.displayWrapper}>
      {kvartetPreview.slice(0, 2)}
      <div className={styles.quotes}>{quotesPreview}</div>
      {kvartetPreview.slice(2)}
    </section>
  );
}
