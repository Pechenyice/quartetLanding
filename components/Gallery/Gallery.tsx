import React, { CSSProperties, useEffect } from 'react';
import Image from 'next/image';
import styles from '@Styles/Gallery/Gallery.module.css';
import poster from '@Public/poster.jpg';
import program from '@Events/Program';
import information from '@Events/Information';
import { combineClasses } from '@Utils/index';

const Gallery = () => {
  let galleryArea: Element = null as unknown as Element;
  let galleryArchive: Element = null as unknown as Element;

  useEffect(() => {
    galleryArea = document.getElementsByClassName(styles.wrapper)[0];
    galleryArchive = document.getElementsByClassName(styles.additive)[0];
    document.addEventListener('scroll', galleryAnimatorController);
    document.addEventListener('scroll', galleryArchiveAnimatorController);

    return () => {
      document.removeEventListener('scroll', galleryAnimatorController);
      document.removeEventListener('scroll', galleryArchiveAnimatorController);
    };
  }, []);

  function galleryAnimatorController() {
    if (
      !galleryArea.classList.contains(styles.gallery_active) &&
      galleryArea.getBoundingClientRect().top < window.innerHeight - screen.height / 2
    ) {
      galleryArea.classList.add(styles.gallery_active);
    } else if (
      galleryArea.classList.contains(styles.gallery_active) &&
      galleryArea.getBoundingClientRect().top > window.innerHeight
    ) {
      galleryArea.classList.remove(styles.gallery_active);
    }
  }

  function galleryArchiveAnimatorController() {
    if (
      !galleryArchive.classList.contains(styles.archive_active) &&
      galleryArchive.getBoundingClientRect().top < window.innerHeight - screen.height / 2
    ) {
      galleryArchive.classList.add(styles.archive_active);
    } else if (
      galleryArchive.classList.contains(styles.archive_active) &&
      galleryArchive.getBoundingClientRect().top > window.innerHeight
    ) {
      galleryArchive.classList.remove(styles.archive_active);
    }
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.subscription}>Следующее выступление</h2>
      <div className={styles.main}>
        <div className={styles.about}>
          <div className={styles.block} style={{ '--delay': '0' } as CSSProperties}>
            <p className={styles.script}>Название программы:</p>
            <br />
            <span className={styles.accent}>{program.name}</span>
          </div>
          <div className={styles.block} style={{ '--delay': '.2' } as CSSProperties}>
            <p className={styles.script}>Продолжительность:</p>
            <br />
            <span className={styles.accent}>{program.duration}</span>
          </div>
          <div className={styles.block} style={{ '--delay': '.4' } as CSSProperties}>
            <p className={styles.script}>Произведения:</p>
            <br />
            <ul>
              {program.content.map((c, i) => (
                <li key={i} className={styles.case}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.poster}>
          <Image src={poster} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.about} style={{ '--delay': '.6' } as CSSProperties}>
          <div className={styles.block}>
            <p className={styles.script}>Мероприятие:</p>
            <br />
            <span className={styles.accent}>{information.name}</span>
          </div>
          <div className={styles.block} style={{ '--delay': '.8' } as CSSProperties}>
            <p className={styles.script}>Место проведения:</p>
            <br />
            <span className={styles.accent}>{information.location}</span>
          </div>
          <div className={styles.block} style={{ '--delay': '1' } as CSSProperties}>
            <p className={styles.script}>Дата:</p>
            <br />
            <span className={styles.accent}>{information.date}</span>
          </div>
          <div className={styles.block} style={{ '--delay': '1.2' } as CSSProperties}>
            <p className={styles.script}>Цена:</p>
            <br />
            <span className={styles.accent}>{information.price} ₽</span>
          </div>
        </div>
      </div>
      <div className={styles.additive}>
        <h2 className={combineClasses(styles.subscription, styles.subscriptionArchive)}>Архив</h2>
        <div className={styles.gallery}>
          <div className={combineClasses(styles.back, styles.branch)}>
            <div className={styles.case} style={{ '--delay': '0' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '.8' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '.3' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '1.5' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={combineClasses(styles.front, styles.branch)}>
            <div className={styles.case} style={{ '--delay': '1' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '1.2' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '1' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <div className={styles.case} style={{ '--delay': '2' } as CSSProperties}>
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
