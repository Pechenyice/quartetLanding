import React, { CSSProperties, useEffect } from 'react';
import styles from '@Styles/Media/Media.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'media';

const Media = () => {
  let mediaArea: Element = null as unknown as Element;

  useEffect(() => {
    mediaArea = document.getElementsByClassName(styles.wrapper)[0];
    document.addEventListener('scroll', mediaDisplayAnimatorController);

    return () => {
      document.removeEventListener('scroll', mediaDisplayAnimatorController);
    };
  }, []);

  function mediaDisplayAnimatorController() {
    if (
      !mediaArea.classList.contains(styles.media_active) &&
      mediaArea.getBoundingClientRect().top < window.innerHeight - 200
    ) {
      mediaArea.classList.add(styles.media_active);
    } else if (
      mediaArea.classList.contains(styles.media_active) &&
      mediaArea.getBoundingClientRect().top > window.innerHeight
    ) {
      mediaArea.classList.remove(styles.media_active);
    }
  }

  return (
    <section className={styles.wrapper}>
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
