import React, { CSSProperties, useEffect } from 'react';
import styles from '@Styles/QuotesDisplay/QuotesDisplay.module.css';
import { quotes } from 'quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { combineClasses } from '@Utils/index';

const QuotesDisplay = () => {
  let quotesArea: Element = null as unknown as Element;

  useEffect(() => {
    quotesArea = document.getElementsByClassName(styles.quotes)[0];
    document.addEventListener('scroll', quotesDisplayAnimatorController);

    return () => {
      document.removeEventListener('scroll', quotesDisplayAnimatorController);
    };
  }, []);

  function quotesDisplayAnimatorController() {
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
  }

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

  return <div className={styles.quotes}>{quotesPreview}</div>;
};

export default QuotesDisplay;
